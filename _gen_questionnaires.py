# -*- coding: utf-8 -*-
"""Generate /questionnaires/ index — ranked do-first order."""
from __future__ import annotations

import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SATS = ROOT.parent / "surveys" / "builder-network" / "satellites"
OUT = ROOT / "questionnaires"

DESC = {
    "Unblock": "Acutely stuck — jump here before anything else",
    "Reach": "Cohort / contact (feeds Demand — unfeatured)",
    "Demand": "Spine — pay · ONE tool · revealed want",
    "Talent": "Proof · hours · deal shapes · intro filters",
    "Heartbeat": "Motion (feeds Demand — unfeatured)",
    "Projects": "Last user · pay · ONE unblock · triage",
    "Balance sheet": "Heavy satellite — thin-merged; unfeatured",
    "Collaboration": "Feeds Talent — unfeatured",
    "Incentives": "Feeds Talent — unfeatured",
    "Problems": "Feeds Demand — unfeatured",
    "Skills detail": "Feeds Talent — unfeatured",
    "Pulse color": "Lore — archived",
    "Open dump": "Noise door — archived",
    "Referral": "Last share · ONE offer · ready to push",
    "Creators / Cam": "18+ tip rails · last tip · ONE rail change",
    "Education": "ONE class outcome · show-up · take or teach",
    "Content / Media": "ONE explainer · finish / rage-quit · film slate",
    "Onboarding / Rails": "First 24h · broken step · pay for guided fix",
    "NFTs / Art": "Last Pulse NFT action · ONE drop · intros",
    "Hardware": "Devices — deposit vs pallet fantasy (demoted)",
    "DeFi / Yield": "Last capital action · ONE pain · pay",
    "Safety / Scams": "Near-miss · ONE tool · pay · inverse",
    "Pulse Products": "Weekly open · abandon · pay for gap",
    "Pump.tires": "Last open · ONE pain · pay for fix",
    "Data": "Last open · ONE gap · pay for the view",
}

# Numbered do-first path (Unblock is interrupt, not in this list)
RANKED_ORDER = [
    "Demand",
    "Talent",
    "Projects",
    "Content / Media",
    "Education",
    "Onboarding / Rails",
    "Safety / Scams",
    "DeFi / Yield",
    "Pulse Products",
    "Pump.tires",
    "NFTs / Art",
]

MORE_ORDER = [
    "Referral",
    "Data",
    "Creators / Cam",
    "Reach",
    "Heartbeat",
    "Collaboration",
    "Incentives",
    "Problems",
    "Skills detail",
    "Balance sheet",
    "Hardware",
    "Pulse color",
    "Open dump",
]


def main() -> None:
    by_short: dict[str, dict] = {
        "Unblock": {
            "name": "Unblock",
            "desc": DESC["Unblock"],
            "url": "https://docs.google.com/forms/d/e/1FAIpQLScKQrCYXa-xvdrAy-peRWNbLbNRr33jBTqN8xzbs7KdSUF3Nw/viewform",
        }
    }
    for path in (SATS / "forms.json", SATS / "specialty-forms.json"):
        rows = json.loads(path.read_text(encoding="utf-8"))
        for row in rows:
            short = row["short"]
            by_short[short] = {
                "name": short,
                "desc": DESC.get(short, short),
                "url": row["published"],
            }

    def tile(item: dict, rank: str | None = None) -> str:
        rank_html = (
            f'\n          <span class="tile-rank">{html.escape(rank)}</span>' if rank else ""
        )
        return f"""        <a class="tile" href="{html.escape(item['url'])}" rel="noopener">{rank_html}
          <span class="tile-name">{html.escape(item['name'])}</span>
          <span class="tile-desc">{html.escape(item['desc'])}</span>
          <span class="tile-url">Google Form</span>
        </a>"""

    ranked_bits = []
    for i, name in enumerate(RANKED_ORDER, start=1):
        item = by_short.get(name)
        if not item:
            continue
        ranked_bits.append(tile(item, f"{i}"))
    ranked_html = "\n".join(ranked_bits)

    unblock = by_short.get("Unblock")
    stuck_html = tile(unblock, "!") if unblock else ""

    more_names = [n for n in MORE_ORDER if n in by_short]
    known = set(RANKED_ORDER) | set(MORE_ORDER) | {"Unblock"}
    for short in sorted(by_short):
        if short not in known:
            more_names.append(short)
    more_html = "\n".join(tile(by_short[n]) for n in more_names if n in by_short)

    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>Questionnaires · ihelpmaybe</title>
  <meta name="description" content="Ranked PulseChain Network Google Forms — start at 1, jump to Unblock if stuck.">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop stop-color='%23ff0000'/%3E%3Cstop offset='.5' stop-color='%238000ff'/%3E%3Cstop offset='1' stop-color='%2300eaff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='16' height='16' fill='url(%23g)'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <div class="noise" aria-hidden="true"></div>
  <header class="hero">
    <p class="eyebrow"><a href="../" style="color:inherit;text-decoration:none">ihelpmaybe</a> · pulsechain network</p>
    <h1 class="brand">Questionnaires</h1>
    <p class="lede">Do them in order. <strong>1 → 2</strong> first. If you’re acutely stuck, hit <strong>Unblock</strong>. One form beats none.</p>
  </header>
  <main>
    <section class="block" aria-labelledby="stuck-h">
      <h2 id="stuck-h" class="section-label">If stuck</h2>
      <p class="section-note">Skip the queue — only when something is blocking you right now.</p>
      <div class="grid grid-stuck">
{stuck_html}
      </div>
    </section>
    <section class="block" aria-labelledby="rank-h">
      <h2 id="rank-h" class="section-label">Do in order</h2>
      <p class="section-note">1 Demand · 2 Talent · then Projects → Content → Education → Onboarding → lane doors. Stop when you’ve said the useful part.</p>
      <div class="grid">
{ranked_html}
      </div>
    </section>
    <section class="block" aria-labelledby="more-h">
      <h2 id="more-h" class="section-label">Optional</h2>
      <p class="section-note">Only if that lane is you. After 1–2 (or Unblock).</p>
      <div class="grid">
{more_html}
      </div>
    </section>
  </main>
  <footer class="foot">
    <a href="../">← ihelpmaybe hub</a>
    <a href="https://github.com/ihelpmaybe" rel="noopener">github.com/ihelpmaybe</a>
  </footer>
</body>
</html>
"""
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "index.html").write_text(page, encoding="utf-8")
    print(f"wrote ranked={len(ranked_bits)} more={len(more_names)}")


if __name__ == "__main__":
    main()
