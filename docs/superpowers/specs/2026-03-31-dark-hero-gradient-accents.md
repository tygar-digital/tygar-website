# Dark Hero + Gradient-Akzente

## Context

Die Tygar-Website wirkt aktuell sauber und professionell, aber visuell zu zurückhaltend. Der Hero-Bereich hat einen weißen Hintergrund ohne visuelle Dramatik. Es fehlt an Boldness. Ziel: Durch einen dunklen Hero mit subtilem Navy-Gradient und Gradient-Akzente auf der gesamten Seite mehr visuelle Tiefe und Modernität schaffen — ohne die bestehende Emerald-Markenfarbe zu verändern.

## Design-Entscheidungen

### Farbpalette (Erweiterung)

Emerald (#059669) bleibt die Primärfarbe. Neu dazu kommt Navy als Hintergrund-Ton:

| Token | Hex | Verwendung |
|-------|-----|------------|
| `brand-navy` | `#0F172A` | Hero-Gradient-Start (Slate 900) |
| `brand-navy-light` | `#1E293B` | Optionaler Zwischenton (Slate 800) |
| `brand-dark` | `#111827` | Hero-Gradient-Ende (bereits vorhanden) |

Text auf dunklem Grund:
| Token | Hex | Verwendung |
|-------|-----|------------|
| Heading auf Dunkel | `#FFFFFF` | Hero-Headline |
| Body auf Dunkel | `#94A3B8` | Hero-Subtext (Slate 400) |
| Muted auf Dunkel | `#64748B` | Sekundärtext (Slate 500) |

### 1. Hero-Hintergrund

**Aktuell:** Weiß mit kaum sichtbarem `radial-gradient(rgba(5,150,105,0.04))`
**Neu:** Subtiler diagonaler Gradient

```css
background: linear-gradient(135deg, #0F172A 0%, #111827 100%);
```

Optional ein leichter radialer Emerald-Glow als Overlay im oberen Bereich:
```css
background:
  radial-gradient(ellipse 60% 40% at 50% 20%, rgba(5,150,105,0.08), transparent),
  linear-gradient(135deg, #0F172A 0%, #111827 100%);
```

### 2. Hero-Textfarben anpassen

| Element | Aktuell | Neu |
|---------|---------|-----|
| Badge-Text | `#059669` | `#059669` (bleibt, leuchtet auf dunkel) |
| Badge-BG | `#ECFDF5` | `rgba(5,150,105,0.15)` (transparent Emerald) |
| Headline | `#111827` | `#FFFFFF` |
| Highlight-Text (Zeile 3) | `#059669` | `#059669` (bleibt) |
| Subtext | `#374151` | `#94A3B8` |
| CTA Primary BG | `#059669` | `#059669` (bleibt) |
| CTA Secondary | Border `#E5E7EB` | Border `rgba(255,255,255,0.2)`, Text `#FFFFFF` |

### 3. Hero-Mockups

Die Device-Mockups (Browser-Frame, Phone, Review-Card) behalten ihre hellen Inhalte. Der Kontrast hell-auf-dunkel macht sie zum natürlichen Blickfang. Ggf. leichte Glow-Schatten anpassen:

```css
box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(5,150,105,0.1);
```

### 4. Übergang Hero → Rest der Seite

Sanfter Fade am unteren Rand des Hero-Bereichs:

```css
/* Pseudo-Element oder zusätzliches div am Hero-Ende */
background: linear-gradient(to bottom, #111827, #FFFFFF);
height: 120px;
```

### 5. Gradient-Akzente (gesamte Seite)

**Buttons (Hover-State):**
```css
/* Ruhezustand: solides Emerald wie bisher */
/* Hover: subtiler Gradient */
background: linear-gradient(135deg, #059669, #0F172A);
```

**Card-Borders (Hover):**
```css
/* Ruhezustand: normale Border */
/* Hover: Gradient-Border via border-image oder Pseudo-Element */
border-image: linear-gradient(135deg, #059669, #0F172A) 1;
```

**Section-Divider:**
Aktuell: Einfarbige Emerald-Linie (18px breit, 2px hoch)
Neu: Gradient-Linie
```css
background: linear-gradient(90deg, #059669, #0F172A);
width: 48px; /* etwas breiter */
height: 2px;
```

**Marquee-Band:**
Bleibt dunkel (#111827) — passt jetzt visuell zum Hero. Keine Änderung nötig.

## Dateien die geändert werden

| Datei | Änderung |
|-------|----------|
| `tailwind.config.mjs` | Neue Farb-Tokens (`brand-navy`, `brand-navy-light`) |
| `src/components/Hero.astro` | Dunkler Hintergrund, Textfarben, Mockup-Schatten, Übergangs-Fade |
| `src/styles/globals.css` | Ggf. neue CSS-Variable für Navy |
| Diverse Komponenten | Gradient-Akzente auf Buttons, Cards, Divider |

## Was sich NICHT ändert

- Emerald (#059669) bleibt Primärfarbe
- Fonts (DM Sans + Permanent Marker) bleiben
- Layout und Seitenstruktur bleiben
- Animationen bleiben (funktionieren auf dunkel sogar besser)
- Alle Sektionen außer Hero bleiben hell
- Mobile-Verhalten bleibt gleich

## Verifikation

1. Dev-Server starten (`npm run dev`)
2. Hero visuell prüfen: Dunkler Gradient sichtbar, Text lesbar, Mockups kontrastreich
3. Übergang Hero → nächste Sektion: Kein harter Bruch
4. Gradient-Akzente auf Buttons/Cards bei Hover prüfen
5. Mobile (375px) testen: Alles lesbar, Touch-Targets intakt
6. Lighthouse: Score muss > 90 bleiben
7. Kontrast WCAG: Weiß auf Navy = 15.4:1 (weit über 4.5:1 Minimum)
