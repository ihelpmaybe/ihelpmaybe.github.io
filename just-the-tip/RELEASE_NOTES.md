# Release notes — local operator hardening

## Validated (automated)

- Shared + app typecheck
- Tip ladder / wallet / EIP-681 / pool side-rule / overlay style migration verifies
- Production build
- Playwright UI smoke (Go live pools Alert/Suggest UI, Practice dry-run markers, OBS style/QR endpoints)
- Watch start failures no longer clear the error banner (failed pool verification stays visible)
- Dev + production host both serve `POST /api/open-chrome` / `open-external-browser`
- Legacy `showPoolLabel: false` migrates to `showPoolAlerts: false`
- Per-pool OBS minimum replaces the stream default when set
- Quote token decimals are read on watch/suggest (manual pairs no longer stuck at 18)

## Manual (operator)

Follow [`docs/RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md) (automated gate + real toy + real tip) before treating a build as stream-ready.

## Intentionally deferred

- Public hosting / accounts / custodial wallets
- Cursor Simple Browser Web Bluetooth
- Guaranteeing third-party public RPC uptime
