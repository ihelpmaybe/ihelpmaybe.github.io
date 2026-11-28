# Lovense Connect testing (external emulator)

Just The Tip speaks real Lovense Connect over the LAN bridge (`POST /api/lovense`). It does **not** ship a fake Connect server.

For hardware-free protocol testing, use the separate product:

**[`lovense-connect-emulator`](../../lovense-connect-emulator)** — sibling repo

```bash
# Terminal A — standalone emulator
cd ../lovense-connect-emulator
npm install
npm start
# → http://127.0.0.1:20010/

# Terminal B — Just The Tip
cd ../pulsefans.3
npm run dev
# Settings → Lovense Connect → Local IP 127.0.0.1 → Connect
```

Emulator smoke lives in that repo: `npm run smoke`.

Just The Tip keeps:

| Layer | Path | Role |
|-------|------|------|
| Bridge | `server/lovense-node.ts` | Probe, normalize, Function 0–20 |
| Bridge HTTP | `server/api-common.ts` | `probe` \| `vibrate` \| `stop` |
| Browser | `src/device/lovense.ts` | `fetch('/api/lovense')` |
| Façade | `src/device/controller.ts` | `lovense` \| `intiface` \| `bluetooth` |

The external emulator exercises the real Connect protocol path.
