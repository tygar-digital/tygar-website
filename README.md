# Tygar Website – Astro + Tailwind

## Setup (einmalig)

```bash
npm install
npm run dev        # → http://localhost:4321
```

## Deploy

```bash
git init
git add .
git commit -m "feat: initial setup"
git remote add origin git@github.com:tygar-digital/tygar-website.git
git push -u origin main
# → Vercel deployt automatisch
```

## Was wo bearbeiten

| Was                        | Datei                          |
|----------------------------|-------------------------------|
| Texte, Preise, Links       | `src/data/content.json`        |
| Farben, Fonts              | `tailwind.config.mjs`          |
| Seitenstruktur             | `src/pages/index.astro`        |
| Einzelne Sektionen         | `src/components/*.astro`       |
| Meta-Tags, Schema.org      | `src/layouts/Base.astro`       |
| Redirects (Showcase-Sites) | `vercel.json`                  |

## Noch zu tun nach erstem Deploy

1. **Formspree-ID** in `src/components/Contact.astro` eintragen (`YOUR_FORMSPREE_ID`)
2. **Fonts lokal hosten**: Outfit + Inter als `.woff2` unter `public/fonts/` ablegen
   → Download: https://fonts.google.com/specimen/Outfit und /specimen/Inter
3. **Showcase-URLs** in `vercel.json` eintragen (wenn Demo-Sites live sind)
4. **Google Search Console**: Domain verifizieren, Sitemap einreichen
   → `https://tygar-digital.de/sitemap-index.xml`
5. **Cal.com-Link** in `src/data/content.json` → `booking.cal_link` prüfen
6. **Domain** bei Cloudflare: CNAME → `cname.vercel-dns.com`
