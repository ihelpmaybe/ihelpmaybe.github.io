import json
from pathlib import Path

sats = Path(__file__).resolve().parent.parent / "surveys" / "builder-network" / "satellites"
hub = (Path(__file__).resolve().parent / "questionnaires" / "index.html").read_text(encoding="utf-8")
rows = []
for p in ["forms.json", "specialty-forms.json"]:
    rows += json.loads((sats / p).read_text(encoding="utf-8"))
rows.append(
    {
        "short": "Unblock",
        "published": "https://docs.google.com/forms/d/e/1FAIpQLScKQrCYXa-xvdrAy-peRWNbLbNRr33jBTqN8xzbs7KdSUF3Nw/viewform",
    }
)
missing = [r["short"] for r in rows if r["published"] not in hub]
print("missing urls:", missing or "none")
print("old personal unblock:", "1FAIpQLSdb80" in hub)
print("registry:", len(rows), "tiles:", hub.count('class="tile"'))
