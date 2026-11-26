# ihelpmaybe.github.io

Root GitHub Pages hub → **https://ihelpmaybe.github.io/**

Static index linking project sites (Garden, Heart’s Archive, SellHEX) plus **Questionnaires** (`/questionnaires/`). No custom domain.

## Questionnaires

Source drafts: `../surveys/builder-network/suite/`. Regenerate pages:

```bash
python _gen_questionnaires.py
```

Core Unblock / Reach / Demand / Talent / Heartbeat / Projects link to live Google Forms. Specialty doors publish as draft text until Forms ship.

## Ship

1. Create a **public** GitHub repo named exactly `ihelpmaybe.github.io` (under `ihelpmaybe`).
2. Push this folder as the repo root (`main`).
3. Settings → Pages → Deploy from branch → `main` / `/ (root)`.
4. Wait a minute, open https://ihelpmaybe.github.io/

## Local preview

```bash
npx --yes serve .
```
