# Design System — Tygar Website

## Farbpalette

| Token | Hex | Verwendung |
|-------|-----|------------|
| `brand-primary` | `#059669` | CTA-Buttons, Akzente, Links, Icons |
| `brand-primary-light` | `#ECFDF5` | Icon-Hintergründe, Badge-BG |
| `brand-emerald-light` | `#34D399` | Hero-Headline Akzent, Gradient-Endpunkt |
| `brand-heading` | `#111827` | Überschriften |
| `brand-text` | `#374151` | Fließtext |
| `brand-muted` | `#6B7280` | Sekundärtext, Labels |
| `brand-bg` | `#FFFFFF` | Seitenhintergrund |
| `brand-surface` | `#F9FAFB` | Karten-/Sektionshintergrund (alternierend) |
| `brand-border` | `#E5E7EB` | Rahmen, Trennlinien |
| `brand-navy` | `#0F172A` | Hero-Hintergrund |
| `brand-dark` | `#111827` | Footer, Marquee, dunkle Sektionen |

## Typografie

| Rolle | Font | Stil | Quelle |
|-------|------|------|--------|
| Heading | Cormorant | 400 italic | @fontsource (lokal, DSGVO) |
| Body | DM Sans | 400/600/700 | @fontsource (lokal, DSGVO) |

### Größenhierarchie

| Element | Mobile | Desktop | CSS |
|---------|--------|---------|-----|
| H1 (Hero) | 2.2rem | 3.6rem | `clamp(2.2rem, 5vw, 3.6rem)` |
| H2 (Sektionen) | 2rem | 3.25rem | `clamp(2rem, 4.5vw, 3.25rem)` |
| H3 (Cards) | 1.125rem | 1.125rem | `text-lg` |
| Body | 1rem | 1rem | `text-base` |
| Small/Labels | 0.72rem | 0.72rem | Uppercase, `tracking-[0.12em]` |

### Headline-Muster

Überschriften nutzen Mixed-Typography: Cormorant Italic für die erste Zeile, DM Sans Bold (not-italic) in Emerald für die zweite Zeile.

## Spacing & Layout

| Element | Wert |
|---------|------|
| Max Content Width | 1160px |
| Section Padding (Mobile) | `py-20` (80px) |
| Section Padding (Desktop) | `py-28` (112px) oder `py-[108px]` |
| Horizontal Padding | `px-8` (32px) |
| Card Padding | `p-7` bis `p-8` |
| Card Gap | `gap-6` (24px) |
| Card Border-Radius | 12px |
| Button Border-Radius | `rounded-xl` (12px) oder `rounded-lg` |

## Ästhetische Richtung

Sauber, modern, professionell — mit Wärme. Die Website vermittelt Vertrauen durch klare Strukturen und angenehme Grüntöne. Kein überladenes Design, kein Tech-Startup-Look. Stattdessen: ruhig, aufgeräumt, zugänglich — passend für lokale Unternehmer, die sich auf ihr Kerngeschäft konzentrieren wollen.

## Texturen & Materialien

- Glasmorphismus: Navigation (`backdrop-blur`, semi-transparenter Hintergrund)
- Gradient-Divider: Emerald→Light-Emerald Linie als Sektions-Label-Akzent
- Subtle Shadows: `shadow-sm` für Karten, `shadow-md` bei Hover
- Gradient-Border auf Hover: Emerald-Gradient als Border-Overlay

## Motion & Animation

Zurückhaltend und funktional. Animationen dienen der Orientierung, nicht der Show.

- **Scroll Reveal:** Fade-in-up mit Stagger für Karten-Grids (IntersectionObserver)
- **Hero:** Badge slide-in, Device-Mockups fade-in mit Delay-Staffelung
- **Marquee:** Endlos-Scroll, pausiert bei Hover
- **Hover:** Cards heben sich leicht an (`-translate-y-1.5`), Buttons subtiler Gradient-Shift
- **FAQ:** Smooth expand/collapse via max-height Transition
- **Reduced Motion:** Alle Animationen respektieren `prefers-reduced-motion`

## Fotografie / Bildstil

Authentisch, warm, lokal. Keine generischen Stock-Fotos — echte Menschen bei der Arbeit. Leichte Gradient-Overlays (transparent→schwarz) für Tiefe bei Bildkarten.
