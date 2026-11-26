# -*- coding: utf-8 -*-
"""Generate /questionnaires/ index — live Google Form links only."""
from __future__ import annotations

import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SATS = ROOT.parent / "surveys" / "builder-network" / "satellites"
OUT = ROOT / "questionnaires"

DESC = {
    "Unblock": "Acute stuck — route help now",
    "Reach": "How we contact you + permission",
    "Demand": "What you wish existed — pay / commit",
    "Talent": "What you can ship + proof",
    "Heartbeat": "What you’re working on now",
    "Projects": "Project as entity — missing pieces",
    "Balance sheet": "Resources / gaps (satellite)",
    "Collaboration": "Who you’re looking to work with",
    "Incentives": "What would move you to act",
    "Problems": "Problems / stuck points",
    "Skills detail": "Skills depth",
    "Pulse color": "Pulse / HEX familiarity color",
    "Open dump": "Open notes dump",
    "Referral": "Referral site / dashboard interest",
    "Creators / Cam": "Cam & tip rails · Just the Tip · SuperChat (18+)",
    "Education": "HEX literacy · take a class · teach",
    "Content / Media": "Video wants · favorite influencers",
    "Onboarding / Rails": "In/out of Pulse · onboard classes · ideas",
    "NFTs / Art": "Artists · collab · hire · mint wants",
    "Hardware": "Tablet pallet / bulk devices",
    "DeFi / Yield": "Where you get yield — what’s broken",
    "Safety / Scams": "Burns · check before you click",
    "Pulse Products": "Existing products: used · like · missing",
    "Pump.tires": "Launchpad features + gaps",
    "Data": "Favorite / missing / unavailable data",
}

CORE_SHORTS = {"Unblock", "Reach", "Demand", "Talent", "Heartbeat", "Projects"}
SPECIALTY_SHORTS = {
    "Referral",
    "Creators / Cam",
    "Education",
    "Content / Media",
    "Onboarding / Rails",
    "NFTs / Art",
    "Hardware",
    "DeFi / Yield",
    "Safety / Scams",
    "Pulse Products",
    "Pump.tires",
    "Data",
}


def group_for(short: str) -> str:
    if short in CORE_SHORTS:
        return "core"
    if short in SPECIALTY_SHORTS:
        return "specialty"
    return "more"


def main() -> None:
    live = [
        {
            "name": "Unblock",
            "desc": DESC["Unblock"],
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSdb80FeUK0y7hf57AStv90bM5dNjHxkuiiYbeG0Iv_KrzD_og/viewform",
            "group": "core",
        }
    ]
    for path in (SATS / "forms.json", SATS / "specialty-forms.json"):
        rows = json.loads(path.read_text(encoding="utf-8"))
        for row in rows:
            short = row["short"]
            live.append(
                {
                    "name": short,
                    "desc": DESC.get(short, short),
                    "url": row["published"],
                    "group": group_for(short),
                }
            )

    def tiles(group: str) -> str:
        bits = []
        for item in live:
            if item["group"] != group:
                continue
            bits.append(
                f"""        <a class="tile" href="{html.escape(item['url'])}" rel="noopener">
          <span class="tile-name">{html.escape(item['name'])}</span>
          <span class="tile-desc">{html.escape(item['desc'])}</span>
          <span class="tile-url">Google Form</span>
        </a>"""
            )
        return "\n".join(bits)

    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>Questionnaires · ihelpmaybe</title>
  <meta name="description" content="Live PulseChain Network Google Forms.">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop stop-color='%23ff0000'/%3E%3Cstop offset='.5' stop-color='%238000ff'/%3E%3Cstop offset='1' stop-color='%2300eaff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='16' height='16' fill='url(%23g)'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <div class="noise" aria-hidden="true"></div>
  <header class="hero">
    <p class="eyebrow"><a href="../" style="color:inherit;text-decoration:none">ihelpmaybe</a> · pulsechain network</p>
    <h1 class="brand">Questionnaires</h1>
    <p class="lede">Live Google Forms. Click a tile to fill it out.</p>
  </header>
  <main>
    <section class="block" aria-labelledby="core-h">
      <h2 id="core-h" class="section-label">Core</h2>
      <div class="grid">
{tiles("core")}
      </div>
    </section>
    <section class="block" aria-labelledby="spec-h">
      <h2 id="spec-h" class="section-label">Specialty</h2>
      <p class="section-note">Creators / Cam is 18+ business intake.</p>
      <div class="grid">
{tiles("specialty")}
      </div>
    </section>
    <section class="block" aria-labelledby="more-h">
      <h2 id="more-h" class="section-label">More satellites</h2>
      <div class="grid">
{tiles("more")}
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
    print(f"wrote live-forms index ({len(live)} forms)")


if __name__ == "__main__":
    main()
