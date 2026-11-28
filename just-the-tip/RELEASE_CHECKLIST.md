# Ship checklist — Just The Tip v2.0.0

Walk the **current** operator UI. Automated tests do not prove a real toy or a live on-chain tip.

One URL: `http://127.0.0.1:5173/` · Chrome or Edge · Node 20+.

Drawer: **Home** → **Tip menu** → **Stream alerts** → **Go live** → **Settings**.

---

## 0. Gate (required)

```bash
npm run stop
npm run verify:release
```

Runs: shared+app typecheck, ladder, wallets, EIP-681, pools, coin-rewards, overlay, coverage, production `vite build`, Playwright `smoke:ui` (2 cycles) + `smoke:wallets` against **Vite** (`npm run dev`). It does **not** start `npm start`.

- [ ] `verify:release` prints `verify:release OK`
- [ ] Footer `v2.0.0` matches `package.json` and `src/version.ts`

Optional (not in the gate):

```bash
npm run verify:ladder-rescale
npm run verify:sku
```

With the app already on 5173:

```bash
npm run smoke:settings-persist
npm run smoke:sku
```

---

## 1. Production host

`verify:release` smokes Vite. Ship path is the built host.

```bash
npm run stop
npm start
```

- [ ] `http://127.0.0.1:5173/` loads in Chrome/Edge (not Cursor Simple Browser)
- [ ] Bound to **127.0.0.1:5173** only
- [ ] `/overlay` and `/overlay/qr` return HTML
- [ ] `/tip-menu` returns HTML (placeholder until you Export HTML)

Windows installer (operators without Node):

```bash
npm run dist:win
```

- [ ] `release/JustTheTip-Setup-2.0.0.exe` exists
- [ ] Installed **Just The Tip** shortcut opens the same `http://127.0.0.1:5173/` host
- [ ] OBS Browser Sources still work while the app is running

---

## 2. Home

- [ ] Paste PulseChain tip jar → **Save** (optional name). Not a private key. Saved list lives in Settings
- [ ] Footer donate address is the project jar — different from this receive wallet unless you meant that
- [ ] How to connect: **Lovense** (default) / **Bluetooth** / **Intiface**
- [ ] **Connect** succeeds; linked toys show as tip-ready
- [ ] **Test** runs alert + feed + queue + toy (motors move even if Practice is on)
- [ ] Uncheck **Buzz on** for any toy that must stay out of tips
- [ ] **Stop** / reconnect does not stick on “connected”
- [ ] Wrong Local IP or Intiface down shows readable error copy

Lovense Connect: same Wi‑Fi, open Connect then **Connect** (LAN search) or paste **Connect Local IP** (phone or PC). APPID optional. Bluetooth: this Chrome/Edge window only; **Keep toys after refresh** is a flag tip, not Connect. Intiface: `ws://127.0.0.1:12345`.

---

## 3. Tip menu

- [ ] **Whitelist** — tick coins you sell (native PLS and/or saved ERC/PRC-20s). Only listed coin rows are for sale
- [ ] eUSDC / eUSDT / eDAI ticked only if you accept USD-stable tips
- [ ] Search a toy (or **Import** linked Device toys). Empty toy → export warns
- [ ] **Scale menu** (Low/High USD) prices by duration; fresh installs ship with 10 starter patterns (add more from Catalog anytime)
- [ ] **Catalog** / **Create** if you need stock or a custom pattern
- [ ] Optional: Export CSV / Starter CSV / Import CSV for coin rewards
- [ ] **Share** → **Export HTML** (downloads `index.html` and opens `/tip-menu` while this app is running) and/or **Export JPG**
- [ ] Fan page stays scan-only (EIP-681 QRs). Scan from a **second** wallet
- [ ] Native PLS: `ethereum:<your wallet>@369?value=<beats>` (1 PLS = 10^18 beats, not “wei” in copy)
- [ ] Token: `ethereum:<token>@369/transfer?address=<your wallet>&uint256=<raw>` — `address=` is your receive wallet, not the token
- [ ] Under the cheapest on-menu price → Go live feed logs, no buzz

---

## 4. Stream alerts (OBS)

Keep Just The Tip running the whole stream. PulseChain tips only (not Chaturbate tokens). Two Browser Sources.

**Tip pop-up** (`/overlay`)

- [ ] **Copy OBS URL** — paste into OBS Browser Source, transparent, 1920×1080. Do **not** paste **Open dark preview** (`?preview=1`)
- [ ] **Send test tip** and **Send test pool swap** show on `/overlay`
- [ ] **Customize look** — Wallet tip alert minimum / Pool swap alert minimum / **Show pool swap alerts (same OBS tip card)** behave as set
- [ ] Optional: Template pack gallery; **Branding** for HEX / PulseChain / PulseX kits
- [ ] Live preview at the top shows tip pop-up + carousel in the selected look
- [ ] Close and reopen the Browser Source; pill **watching** recovers while the app stays up

**Tip QR · carousel** (`/overlay/qr`)

- [ ] **QR carousel on** plus at least one tick, or `/overlay/qr` is empty (no empty box)
- [ ] **Copy carousel URL** into a **second** Browser Source (not the tip-alert URL)
- [ ] During the show: **Tip menu (creator wallet · FEAT pattern)** — one QR per On pattern, featured first
- [ ] Pre/post: **How to participate**, **Tip QR (creator wallet)**, **Brand spotlight**, ecosystem, pack website links (Tip Wallet defaults on; others off until ticked)
- [ ] Creator-wallet slides encode Home receive address. Pack website slides are public URLs only (no 0x)
- [ ] Look tints from **Customize look** on the tip alert
- [ ] Full pattern names, blurbs, and pay QRs stay on **Tip menu → Share** (Export HTML / JPG)

---

## 5. Go live

- [ ] Header **Start watching** → becomes **Stop watching**; status on Go live shows listening / block / RPC count
- [ ] Watcher waits **2 confirmations**
- [ ] **Practice mode** on: a real PLS (or listed token) tip appears in **Wallet tips**; toy stays still. **Fake a tip** / Home **Test** still buzz
- [ ] Practice **off** (button or Settings): a real tip plans a pattern and buzzes
- [ ] **Stop watching** returns to idle; no leftover polls
- [ ] **Backup tip list** (details fold) — last 200 wallet+pool rows; Export JSON/CSV. Settings Export does not include this list
- [ ] Below-menu payments: log only, no buzz

---

## 6. Pools (optional)

No tip wallet needed for pools-only. Enable **Watch pools**, tick pairs **On**, then header **Start watching**.

- [ ] **Load PulseX presets** (start Off) → tick a liquid pair **On**
- [ ] Pairs verify against official PulseX factories before they can trigger
- [ ] **Alert** → **Suggest from recent** fills buy/sell rules (or a clear RPC error)
- [ ] After buy+sell suggestions, pool **Side** is **All swaps**
- [ ] **Scan min** is at or below the mildest rule (gates detection)
- [ ] Per-pool **Show on stream overlay** (untick = “OBS off”) matches what `/overlay` shows
- [ ] A qualifying swap appears under **Pool swaps**
- [ ] Rules aimed at an offline toy do **not** buzz every other toy
- [ ] If every enabled pool fails verification, the error stays visible (watch does not pretend to start)

---

## 7. Settings

- [ ] **Export** JSON backup (no keys). **Import** restores on this browser
- [ ] Practice mode toggle matches Go live
- [ ] RPC list empty → built-in PulseChain failover; **Load chain defaults** if you cleared it
- [ ] Chain field is PulseChain-only (not Ethereum)

---

## 8. Safety (do not ship if any fail)

- [ ] No seed, private key, or custodial wallet in settings, exports, or QR payloads
- [ ] Home receive address is the tip jar
- [ ] Lovense traffic is `POST /api/lovense` on this host, not the browser talking to Connect
- [ ] Practice is **off** before the real stream

---

## Known deferred (not blockers)

- Bound to `127.0.0.1` — not a public multi-tenant host
- No accounts / no custodial wallet
- Cursor Simple Browser cannot do Web Bluetooth
- Public RPC rate limits can delay pool suggest / first watch poll
- `verify:release` smokes Vite, not `npm start`
- Pack logo `/brand/plsx-mark.png` is referenced; file is not in `public/brand/` (HEX / PulseChain / PulseX SVGs are)

---

## After a green pass

1. Re-run `npm run verify:release`
2. `git status` / `git diff` — no secrets
3. Commit only when you explicitly approve the change set
