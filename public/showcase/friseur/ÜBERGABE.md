# Salon Website — Übergabedokumentation

---

## Was ist fertig

Deine Website ist live-ready und enthält:
- Vollständige One-Page-Website mit allen Sektionen
- Responsive Design für alle Geräte (Handy, Tablet, Desktop)
- Schnelles Laden durch statisches HTML (kein Server nötig)
- Alle Inhalte über einfache JSON-Dateien änderbar
- DSGVO-konform: Fonts lokal gehostet, Google Maps mit 2-Klick-Lösung
- SEO-optimiert: Schema.org Markup, Meta-Tags, Sitemap

---

## Dateistruktur

```
salon-website/
├── index.html          ← Deine Website (nicht ändern)
├── impressum.html      ← Impressum (Daten aus legal.json)
├── datenschutz.html    ← Datenschutzerklärung (Text ersetzen!)
├── robots.txt          ← Suchmaschinen-Steuerung
├── sitemap.xml         ← Sitemap für Google (Domain anpassen!)
├── netlify.toml        ← Hosting-Konfiguration (nicht ändern)
│
├── assets/
│   ├── logo.svg        ← Dein Logo hier austauschen
│   ├── fonts/          ← Lokal gehostete Schriftarten (DSGVO!)
│   └── styles.css      ← Design (nicht ändern)
│
├── data/               ← HIER alle Änderungen machen!
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

## Häufige Änderungen

### Preis ändern
`data/services.json` öffnen → gewünschte Leistung suchen → `"preis"` Zahl ändern

### Öffnungszeiten ändern
`data/hours.json` öffnen → Tag anpassen (z.B. `"dienstag": "10:00–19:00"`)

### Neue Bewertung hinzufügen
`data/reviews.json` öffnen → neues Objekt in `"testimonials"` Liste einfügen

### Buchungssystem-Link ändern
`data/booking.json` öffnen → `"embed_url"` auf deinen Treatwell/Shore-Link setzen

### Logo tauschen
`assets/logo.svg` mit deinem Logo ersetzen (gleicher Dateiname!)

### SEO-Texte anpassen
`data/seo.json` öffnen → `site_title` und `site_description` ändern

---

## Website aktualisieren (Netlify)

1. Gewünschte JSON-Datei mit einem Texteditor bearbeiten
2. Auf [app.netlify.com/drop](https://app.netlify.com/drop) gehen
3. Den gesamten Ordner hineinziehen
4. Fertig — in 30 Sekunden live!

---

## Pflicht vor Übergabe an Kunden

### Inhalte
- [ ] Echte E-Mail-Adresse in `config.json` eingetragen
- [ ] Echte Telefonnummer in `config.json` eingetragen
- [ ] Echte Adresse + GPS-Koordinaten in `config.json` eingetragen
- [ ] Booking-URL (Treatwell/Shore) in `booking.json` eingetragen
- [ ] Echtes Logo in `assets/logo.svg` hinterlegt
- [ ] Eigene Bilder für Hero, Team, Galerie eingebunden
- [ ] Alle Platzhaltertexte durch echte Inhalte ersetzt

### Rechtliches
- [ ] Impressum-Daten in `legal.json` vervollständigt (echte Daten!)
- [ ] Datenschutzerklärung von eRecht24.de generieren und in `datenschutz.html` einsetzen
- [ ] Google Maps Koordinaten (`geo.lat` + `geo.lng`) in `config.json` gesetzt

### SEO & Domain
- [ ] Domain in `seo.json` und `config.json` (`domain`-Feld) eingetragen
- [ ] `sitemap.xml` Domain-URLs aktualisiert
- [ ] `robots.txt` Sitemap-URL aktualisiert
- [ ] Google Search Console eingerichtet und Sitemap eingereicht

### Qualität
- [ ] Website auf Mobile getestet (Hamburger-Menü, Touch-Targets)
- [ ] Website auf Tablet und Desktop getestet
- [ ] Alle Links funktionieren (Impressum, Datenschutz, Buchung)
- [ ] Lighthouse Performance Score > 90
