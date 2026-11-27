import json
from pathlib import Path

root = Path(__file__).resolve().parent
sats = root.parent / "surveys" / "builder-network" / "satellites"
hub = (root / "questionnaires" / "index.html").read_text(encoding="utf-8")
index = (root / "index.html").read_text(encoding="utf-8")

rows = []
for p in ["forms.json", "specialty-forms.json"]:
    rows += json.loads((sats / p).read_text(encoding="utf-8"))

missing = [r["short"] for r in rows if r["published"] not in hub]
print("questionnaires missing urls:", missing or "none")
print("network unblock on questionnaires:", "1FAIpQLScKQrCYXa" in hub)
print("personal twitter unblock on questionnaires:", "1FAIpQLSdb80" in hub)
print("personal twitter unblock on hub Now:", "1FAIpQLSdb80" in index)
print("registry:", len(rows), "q tiles:", hub.count('class="tile"'))
