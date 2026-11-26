# -*- coding: utf-8 -*-
"""Generate questionnaires hub pages from surveys/builder-network/suite/*.md"""
from __future__ import annotations

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SUITE = ROOT.parent / "surveys" / "builder-network" / "suite"
OUT = ROOT / "questionnaires"

# Live Google Forms where they exist (specialty drafts have no Form yet).
FORMS = {
    "01-unblock": "https://docs.google.com/forms/d/e/1FAIpQLSdb80FeUK0y7hf57AStv90bM5dNjHxkuiiYbeG0Iv_KrzD_og/viewform",
    "02-reach": "https://docs.google.com/forms/d/e/1FAIpQLSfyAcxAw7epJHnbt4WLCL-GvGkAfJDsjWXN0AaQkFoL6lKCow/viewform",
    "03-demand": "https://docs.google.com/forms/d/e/1FAIpQLSff-qybKWbKD43f5UrD3lo69XCHpebdV9qi_-3vcrO9mebssg/viewform",
    "04-talent": "https://docs.google.com/forms/d/e/1FAIpQLScYrXLa-fmQO6vULwF7I4q8hz3SvxgRrUND2L92Y8BtfuLu3w/viewform",
    "05-heartbeat": "https://docs.google.com/forms/d/e/1FAIpQLSc_OCaGaS-vVfR6CKtp4k_2VDgxV-d9DDgtVfpPVX2d7jNdLQ/viewform",
    "06-projects": "https://docs.google.com/forms/d/e/1FAIpQLSdK2a4TzXWuX5rDIFjuqWnHsN8fCrLmLWAJCVUlSc8-Z2nw4A/viewform",
}

META = [
    ("00-contact-stub", "Contact stub", "Reach + permission fields shared across forms", "core"),
    ("01-unblock", "Unblock", "Acute stuck — route help now", "core"),
    ("02-reach", "Reach", "How we contact you + permission", "core"),
    ("03-demand", "Demand", "What you wish existed — tools, pay, gaps", "core"),
    ("04-talent", "Talent", "What you can ship + proof", "core"),
    ("05-heartbeat", "Heartbeat", "What you’re working on now", "core"),
    ("06-projects", "Projects", "Project as entity — missing pieces", "core"),
    ("07-referral", "Referral", "Referral site / dashboard interest", "specialty"),
    ("08-creators-cam", "Creators / Cam", "Cam & tip rails · Just the Tip · SuperChat (18+)", "specialty"),
    ("09-education", "Education", "HEX literacy · take a class · teach", "specialty"),
    ("10-content-media", "Content / Media", "Video wants · favorite influencers", "specialty"),
    ("11-onboarding-rails", "Onboarding / Rails", "In/out of Pulse · classes · onboard ideas", "specialty"),
    ("12-nfts-art", "NFTs / Art", "Artists · collab · hire · what you’d mint", "specialty"),
    ("13-hardware", "Hardware", "Tablet pallet / bulk devices", "specialty"),
    ("14-defi-yield", "DeFi / Yield", "Where you get yield — what’s broken", "specialty"),
    ("15-safety-scams", "Safety / Scams", "Burns · check-before-you-click", "specialty"),
    ("16-pulse-products", "Pulse Products", "Existing products: used · like · missing", "specialty"),
    ("17-pump-tires", "Pump.tires", "Launchpad features + gaps", "specialty"),
    ("18-data", "Data", "Favorite / missing / unavailable data", "specialty"),
]


def inline(s: str) -> str:
    s = html.escape(s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    s = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", s)
    return s


def md_to_html(text: str) -> str:
    lines = text.replace("\r\n", "\n").split("\n")
    out: list[str] = []
    i = 0
    in_ul = False
    in_p = False

    def close_p():
        nonlocal in_p
        if in_p:
            out.append("</p>")
            in_p = False

    def close_ul():
        nonlocal in_ul
        if in_ul:
            out.append("</ul>")
            in_ul = False

    while i < len(lines):
        raw = lines[i]
        line = raw.rstrip()
        if not line.strip():
            close_p()
            close_ul()
            i += 1
            continue
        if line.startswith("# "):
            close_p()
            close_ul()
            out.append(f"<h1>{inline(line[2:].strip())}</h1>")
        elif line.startswith("## "):
            close_p()
            close_ul()
            out.append(f"<h2>{inline(line[3:].strip())}</h2>")
        elif line.startswith("### "):
            close_p()
            close_ul()
            out.append(f"<h3>{inline(line[4:].strip())}</h3>")
        elif line.startswith("---"):
            close_p()
            close_ul()
            out.append("<hr>")
        elif re.match(r"^[-*] ", line):
            close_p()
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(line[2:].strip())}</li>")
        elif re.match(r"^\d+\.\s", line):
            close_p()
            close_ul()
            # keep numbered items as paragraphs with strong lead for scanability
            m = re.match(r"^(\d+)\.\s+(.*)$", line)
            assert m
            out.append(f'<p class="q"><span class="qnum">{m.group(1)}.</span> {inline(m.group(2))}</p>')
            in_p = False
        else:
            close_ul()
            if in_p:
                out.append("<br>" + inline(line.strip()))
            else:
                out.append(f"<p>{inline(line.strip())}")
                in_p = True
        i += 1
    close_p()
    close_ul()
    return "\n".join(out)


SHELL_HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>{title} · ihelpmaybe questionnaires</title>
  <meta name="description" content="{desc}">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop stop-color='%23ff0000'/%3E%3Cstop offset='.5' stop-color='%238000ff'/%3E%3Cstop offset='1' stop-color='%2300eaff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='16' height='16' fill='url(%23g)'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="questionnaires.css">
</head>
<body>
  <div class="noise" aria-hidden="true"></div>
"""

SHELL_FOOT = """
  <footer class="foot">
    <a href="../">← ihelpmaybe hub</a>
    <a href="./">All questionnaires</a>
    <a href="https://github.com/ihelpmaybe" rel="noopener">github.com/ihelpmaybe</a>
  </footer>
</body>
</html>
"""


def write_detail(slug: str, name: str, desc: str, body_md: str) -> None:
    form = FORMS.get(slug)
    cta = ""
    if form:
        cta = f'<p class="cta-row"><a class="cta" href="{html.escape(form)}" rel="noopener">Take Google Form</a></p>'
    else:
        cta = '<p class="cta-row"><span class="badge">Draft text</span> <span class="muted">Google Form link lands when we ship the live Form from this draft.</span></p>'

    page = (
        SHELL_HEAD.format(title=html.escape(name), desc=html.escape(desc))
        + f"""
  <header class="hero q-hero">
    <p class="eyebrow"><a href="./">questionnaires</a> · pulsechain network</p>
    <h1 class="brand brand-sm">{html.escape(name)}</h1>
    <p class="lede">{html.escape(desc)}</p>
    {cta}
  </header>
  <main class="q-doc">
{md_to_html(body_md)}
  </main>
"""
        + SHELL_FOOT
    )
    (OUT / f"{slug}.html").write_text(page, encoding="utf-8")


def write_index() -> None:
    def tiles(kind: str) -> str:
        bits = []
        for slug, name, desc, k in META:
            if k != kind:
                continue
            live = " · live form" if slug in FORMS else " · draft"
            bits.append(
                f"""        <a class="tile" href="{slug}.html">
          <span class="tile-name">{html.escape(name)}</span>
          <span class="tile-desc">{html.escape(desc)}</span>
          <span class="tile-url">{html.escape(slug)}{live}</span>
        </a>"""
            )
        return "\n".join(bits)

    page = (
        SHELL_HEAD.format(
            title="Questionnaires",
            desc="PulseChain Network questionnaire suite — core match + specialty doors.",
        )
        + f"""
  <header class="hero">
    <p class="eyebrow"><a href="../">ihelpmaybe</a> · pulsechain network</p>
    <h1 class="brand">Questionnaires</h1>
    <p class="lede">Pick a door. Core forms match people and projects. Specialty forms cover referral, cam/tips, HEX class, data, Pump.tires, safety, and more.</p>
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
      <p class="section-note">Everybody gets a door. Creators / Cam is 18+ business intake.</p>
      <div class="grid">
{tiles("specialty")}
      </div>
    </section>
  </main>
"""
        + SHELL_FOOT
    )
    (OUT / "index.html").write_text(page, encoding="utf-8")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, name, desc, _kind in META:
        path = SUITE / f"{slug}.md"
        if not path.exists():
            raise SystemExit(f"missing {path}")
        write_detail(slug, name, desc, path.read_text(encoding="utf-8"))
    write_index()
    print(f"wrote {len(META)} detail pages + index → {OUT}")


if __name__ == "__main__":
    main()
