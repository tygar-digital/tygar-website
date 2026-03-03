# Salon Website — Übergabedokumentation
**Erstellt von volt Digitalagentur**

---

## ✅ Was ist fertig

Deine Website ist live-ready und enthält:
- Vollständige One-Page-Website mit allen Sektionen
- Responsive Design für alle Geräte (Handy, Tablet, Desktop)
- Schnelles Laden durch statisches HTML (kein Server nötig)
- Alle Inhalte über einfache JSON-Dateien änderbar

---

## 🗂️ Dateistruktur

```
salon-website/
├── index.html          ← Deine Website (nicht ändern)
├── netlify.toml        ← Hosting-Konfiguration (nicht ändern)
│
├── assets/
│   ├── logo.svg        ← Dein Logo hier austauschen
│   └── styles.css      ← Design (nicht ändern)
│
├── data/               ← ✏️ HIER alle Änderungen machen!
│   ├── config.json     ← Name, Kontakt, Navigation, Social Media
│   ├── content.json    ← Hero-Text, Über-Uns
│   ├── services.json   ← Leistungen & Preise
│   ├── team.json       ← Teammitglieder
│   ├── gallery.json    ← Galerie-Bilder
│   ├── hours.json      ← Öffnungszeiten
│   ├── booking.json    ← Buchungssystem-Link
│   ├── reviews.json    ← Kundenbewertungen
│   ├── news.json       ← Blog-Posts & Angebote
│   ├── faq.json        ← Häufige Fragen
│   ├── seo.json        ← Google-Titel & Beschreibung
│   ├── legal.json      ← Impressum-Daten
│   └── products.json   ← Produktempfehlungen (optional)
│
└── js/
    └── app.js          ← Rendering-Engine (nicht ändern)
```

---

## ✏️ Häufige Änderungen

### Preis ändern
→ `data/services.json` öffnen → gewünschte Leistung suchen → `"preis"` Zahl ändern

### Öffnungszeiten ändern
→ `data/hours.json` öffnen → Tag anpassen (z.B. `"dienstag": "10:00–19:00"`)

### Neue Bewertung hinzufügen
→ `data/reviews.json` öffnen → neues Objekt in `"testimonials"` Liste einfügen

### Buchungssystem-Link ändern
→ `data/booking.json` öffnen → `"embed_url"` auf deinen Treatwell/Shore-Link setzen

### Logo tauschen
→ `assets/logo.svg` mit deinem Logo ersetzen (gleicher Dateiname!)

---

## 🚀 Website aktualisieren (Netlify)

1. Gewünschte JSON-Datei mit einem Texteditor bearbeiten
2. Auf [app.netlify.com/drop](https://app.netlify.com/drop) gehen
3. Den gesamten Ordner hineinziehen
4. Fertig — in 30 Sekunden live!

---

## ⚠️ Pflicht vor Übergabe an Kunden

- [ ] Echte E-Mail-Adresse in `config.json` eingetragen
- [ ] Echte Telefonnummer in `config.json` eingetragen
- [ ] Echte Adresse + GPS-Koordinaten in `config.json` eingetragen
- [ ] Booking-URL (Treatwell/Shore) in `booking.json` eingetragen
- [ ] Echtes Logo in `assets/logo.svg` hinterlegt
- [ ] Impressum-Daten in `legal.json` vervollständigt
- [ ] Google Maps Koordinaten (`geo.lat` + `geo.lng`) gesetzt
- [ ] Eigene Bilder für Hero, Team, Galerie eingebunden
- [ ] Datenschutzerklärung von eRecht24.de generieren lassen

---

*Bei Fragen: [volt Digitalagentur](mailto:hello@volt-agentur.de)*
