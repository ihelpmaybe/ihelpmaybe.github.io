#!/usr/bin/env node
/**
 * pulse-portfolio Web UI — minimal local server.
 * Exposes the same reads as the CLI over a local HTTP API.
 * Run: node web/server.js   (default port 3131)
 */

import { createServer } from "http";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { resolveChains } from "../src/chains.js";
import {
  getMultiChainNativeBalances,
  getTokenBalance,
  getNFTBalance,
  getTxCount,
  getBlockNumber,
  getHexStakes,
} from "../src/reader.js";
import { ensureWatchlist } from "../src/watchlist.js";
import { scanWatchlist } from "../src/watchScan.js";
import { buildPortfolioExport } from "../src/exportBag.js";
import { normalizeAddress } from "../src/address.js";
import { fetchPulseSpotUsd } from "../src/prices.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = (() => {
  const v = parseInt(process.env.PORT ?? "3131", 10);
  if (isNaN(v) || v < 1 || v > 65535) throw new Error("PORT must be an integer 1–65535");
  return v;
})();

// ─── rate limiter ─────────────────────────────────────────────────────────────
// Simple token-bucket: max N requests per second per IP, sliding window.

const RATE_LIMIT = (() => {
  const raw = process.env.PULSE_PORTFOLIO_RATE_LIMIT ?? process.env.SOLARIVIEW_RATE_LIMIT ?? "10";
  const v = parseInt(raw, 10);
  if (isNaN(v) || v <= 0) throw new Error("PULSE_PORTFOLIO_RATE_LIMIT must be a positive integer");
  return v;
})();
const RATE_WINDOW_MS = 1_000;
/** @type {Map<string, number[]>} */
const rateBuckets = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const hits = (rateBuckets.get(ip) ?? []).filter((t) => t > windowStart);
  if (hits.length >= RATE_LIMIT) {
    rateBuckets.set(ip, hits); // do not grow the array beyond the limit
    return true;
  }
  hits.push(now);
  rateBuckets.set(ip, hits);
  return false;
}

// Prune stale entries every 30 seconds to prevent unbounded growth.
setInterval(() => {
  const windowStart = Date.now() - RATE_WINDOW_MS;
  for (const [ip, hits] of rateBuckets) {
    const fresh = hits.filter((t) => t > windowStart);
    if (fresh.length === 0) rateBuckets.delete(ip);
    else rateBuckets.set(ip, fresh);
  }
}, 30_000).unref();

// ─── helpers ──────────────────────────────────────────────────────────────────

function jsonResponse(res, data, status = 200) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(JSON.stringify(data));
}

function htmlResponse(res, html) {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
  });
  res.end(html);
}

function badRequest(res, message) {
  jsonResponse(res, { error: message }, 400);
}

// ─── route handlers ───────────────────────────────────────────────────────────

async function handleBalance(res, query) {
  const { address, chain = "all" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");

  try {
    const chains = resolveChains(chain);
    const data = await getMultiChainNativeBalances(address, chains);
    jsonResponse(res, { address, ...data });
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleToken(res, query) {
  const { address, token, chain = "pulsechain" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");
  if (!token) return badRequest(res, "Missing required parameter: token");

  try {
    const [chainConfig] = resolveChains(chain);
    const data = await getTokenBalance(address, token, chainConfig);
    jsonResponse(res, data);
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleNFT(res, query) {
  const { address, contract, chain = "pulsechain" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");
  if (!contract) return badRequest(res, "Missing required parameter: contract");

  try {
    const [chainConfig] = resolveChains(chain);
    const data = await getNFTBalance(address, contract, chainConfig);
    jsonResponse(res, data);
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleActivity(res, query) {
  const { address, chain = "all" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");

  try {
    const chains = resolveChains(chain);
    const settled = await Promise.allSettled(chains.map((c) => getTxCount(address, c)));
    const results = settled.filter((s) => s.status === "fulfilled").map((s) => s.value);
    const errors = settled.filter((s) => s.status === "rejected").map((s) => ({ message: s.reason?.message ?? String(s.reason) }));
    jsonResponse(res, { address, activity: results, errors });
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleStakes(res, query) {
  const { address, chain = "pulsechain" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");

  try {
    const [chainConfig] = resolveChains(chain);
    const data = await getHexStakes(address, chainConfig);
    jsonResponse(res, data);
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

function handleWatchlist(res) {
  try {
    const list = ensureWatchlist();
    jsonResponse(res, list);
  } catch (err) {
    jsonResponse(res, { error: err.message }, 500);
  }
}

async function handleWatchScan(res, query) {
  try {
    const chainName = query.chain || "pulsechain";
    const [chainConfig] = resolveChains(chainName);
    const list = ensureWatchlist();
    if (!list.wallets.length) {
      return badRequest(res, "Watchlist empty — run: pulse-portfolio watch seed");
    }
    const concurrency = Math.min(4, Math.max(1, parseInt(query.concurrency || "2", 10) || 2));
    const full = query.full === "1" || query.full === "true";
    const usd = query.usd !== "0" && query.usd !== "false";
    const report = await scanWatchlist(list.wallets, chainConfig, {
      timeoutMs: full ? 30_000 : 15_000,
      concurrency,
      full,
      usd,
    });
    // Strip heavy bag payloads from web face
    jsonResponse(res, {
      ...report,
      rows: report.rows.map(({ bag, ...rest }) => rest),
    });
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleBag(res, query) {
  const { address, chain = "pulsechain" } = query;
  if (!address) return badRequest(res, "Missing required parameter: address");
  try {
    const wallet = normalizeAddress(address);
    const [chainConfig] = resolveChains(chain);
    const [bag, spot] = await Promise.all([
      buildPortfolioExport(wallet, chainConfig, { includeStakes: true }),
      chainConfig.id === 369 ? fetchPulseSpotUsd().catch(() => null) : null,
    ]);
    jsonResponse(res, { ...bag, prices: spot });
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

async function handleStatus(res, query) {
  const { chain = "all" } = query;

  try {
    const chains = resolveChains(chain);
    const settled = await Promise.allSettled(chains.map((c) => getBlockNumber(c)));
    const results = settled.filter((s) => s.status === "fulfilled").map((s) => s.value);
    const errors = settled.filter((s) => s.status === "rejected").map((s) => ({ message: s.reason?.message ?? String(s.reason) }));
    jsonResponse(res, { chains: results, errors });
  } catch (err) {
    jsonResponse(res, { error: err.message }, 400);
  }
}

function handleUI(res) {
  // Re-read each request so UI edits show without restarting (local desk).
  htmlResponse(res, readFileSync(path.join(__dirname, "index.html"), "utf8"));
}

// ─── router ───────────────────────────────────────────────────────────────────

const server = createServer(async (req, res) => {
  const ip = req.socket.remoteAddress ?? "unknown";

  if (isRateLimited(ip)) {
    jsonResponse(res, { error: "Too many requests" }, 429);
    return;
  }

  // Reject abnormally long URLs before any parsing.
  if (req.url.length > 512) {
    jsonResponse(res, { error: "Request URI too long" }, 414);
    return;
  }

  const url = new URL(req.url, `http://localhost`);
  const route = url.pathname;
  const query = Object.fromEntries(url.searchParams.entries());

  if (req.method !== "GET") {
    jsonResponse(res, { error: "Method not allowed" }, 405);
    return;
  }

  try {
    if (route === "/" || route === "/index.html") return handleUI(res);
    if (route === "/api/balance") return await handleBalance(res, query);
    if (route === "/api/token") return await handleToken(res, query);
    if (route === "/api/nft") return await handleNFT(res, query);
    if (route === "/api/activity") return await handleActivity(res, query);
    if (route === "/api/status") return await handleStatus(res, query);
    if (route === "/api/stakes") return await handleStakes(res, query);
    if (route === "/api/watchlist") return handleWatchlist(res);
    if (route === "/api/watch/scan") return await handleWatchScan(res, query);
    if (route === "/api/bag") return await handleBag(res, query);
    jsonResponse(res, { error: "Not found" }, 404);
  } catch (err) {
    jsonResponse(res, { error: "Internal server error" }, 500);
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`pulse-portfolio Web UI → http://127.0.0.1:${PORT}`);
  console.log("Listening on localhost only. No external traffic.");
});
