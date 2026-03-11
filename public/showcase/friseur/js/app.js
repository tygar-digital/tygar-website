/* ══════════════════════════════════════════════════════════════
   FRISEUR TEMPLATE — app.js · Rendering Engine
   Vanilla JS · Kein Build-Step

   WICHTIG: Diese Datei nicht editieren!
   Alle Inhalte über data/*.json anpassen.
   ══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   ICONS — Inline SVG Library
   ───────────────────────────────────────── */
const ICONS = {
  scissors: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.99 4.18 2 2 0 012.98 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  leaf: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.674 1.62-.7 3.37-1.326 5.1-1.326 3.2 0 5.47 1.992 9 2 2.03 0 3.72-.552 5-1.48"/><path d="M2 22C2 15 5 8 9 5c4-3 8-3 12 0 0 4-2 8-6 10-3.5 1.75-7 2-13 7z"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  zoom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.09 4.91L18 9l-4.91 1.09L12 15l-1.09-4.91L6 9l4.91-1.09L12 3z"/><path d="M19 15l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z"/><path d="M2 17l.5 1.5L4 19l-1.5.5L2 21l-.5-1.5L0 19l1.5-.5L2 17z"/></svg>`,
};

/* ─────────────────────────────────────────
   DATA — Global Store
   ───────────────────────────────────────── */
const DATA = {};

const JSON_FILES = [
  'config', 'content', 'services', 'team',
  'gallery', 'hours', 'booking', 'reviews',
  'news', 'faq', 'seo', 'legal', 'products'
];

async function loadAllData() {
  const results = await Promise.allSettled(
    JSON_FILES.map(name =>
      fetch(`data/${name}.json`)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    )
  );
  JSON_FILES.forEach((name, i) => {
    DATA[name] = results[i].status === 'fulfilled' ? results[i].value : {};
  });
}

/* ─────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────── */
const $ = id => document.getElementById(id);
const html = (id, content) => { const e = $(id); if (e) e.innerHTML = content; };

function stars(n, size = 16) {
  return Array(5).fill(0).map((_, i) =>
    `<span class="star ${i < n ? 'filled' : ''}">
      ${ICONS.star.replace('viewBox', `width="${size}" height="${size}" viewBox`)}
    </span>`
  ).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch { return dateStr; }
}

function formatPrice(price, type) {
  const labels = { ab: 'ab', fest: '', pauschal: 'Pauschal', 'auf Anfrage': 'auf Anfrage' };
  const prefix = (type && labels[type] !== undefined) ? labels[type] : (type || '');
  return `<span class="service-price-type">${prefix}</span><span class="service-price">${typeof price === 'number' ? price + ' €' : price}</span>`;
}

function iconFor(name) {
  const map = { scissors: 'scissors', user: 'user', sparkles: 'sparkles', star: 'star' };
  return ICONS[map[name] || 'sparkles'] || ICONS.sparkles;
}

/* ─────────────────────────────────────────
   META & SEO
   ───────────────────────────────────────── */
function renderMeta() {
  const s = DATA.seo?.global || {};
  const cfg = DATA.config;
  const siteUrl = cfg?.domain ? `https://${cfg.domain}` : '';

  document.title = s.site_title || `${cfg?.business_name || 'Salon'} | Friseur`;
  const desc = s.site_description || '';
  document.getElementById('page-description')?.setAttribute('content', desc);
  document.getElementById('og-title')?.setAttribute('content', s.site_title || '');
  document.getElementById('og-description')?.setAttribute('content', desc);
  document.getElementById('og-image')?.setAttribute('content', s.og_image || '');
  document.getElementById('og-url')?.setAttribute('content', siteUrl);
  document.getElementById('canonical-url')?.setAttribute('href', siteUrl);

  // JSON-LD HairSalon (erweitertes Schema)
  const k = cfg?.kontakt || {};
  const seoSchema = DATA.seo?.schema || {};
  const hours = DATA.hours?.regulaer || {};
  const rating = DATA.reviews?.google_rating || {};

  // Öffnungszeiten für Schema.org formatieren
  const dayMap = { montag: 'Mo', dienstag: 'Tu', mittwoch: 'We', donnerstag: 'Th', freitag: 'Fr', samstag: 'Sa', sonntag: 'Su' };
  const openingHours = [];
  Object.entries(dayMap).forEach(([de, en]) => {
    const time = hours[de];
    if (time && time !== 'geschlossen') {
      const [open, close] = time.replace(/\s/g, '').split('–');
      if (open && close) openingHours.push(`${en} ${open}-${close}`);
    }
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: cfg?.business_name,
    telephone: k.telefon,
    email: k.email,
    url: siteUrl || undefined,
    image: DATA.content?.hero?.background_image || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: k.adresse?.strasse,
      postalCode: k.adresse?.plz,
      addressLocality: k.adresse?.stadt,
      addressCountry: k.adresse?.land || 'DE'
    },
    geo: k.geo ? {
      '@type': 'GeoCoordinates',
      latitude: k.geo.lat,
      longitude: k.geo.lng
    } : undefined,
    openingHours: openingHours.length ? openingHours : undefined,
    priceRange: seoSchema.priceRange || '€€',
    paymentAccepted: seoSchema.paymentAccepted?.join(', ') || undefined,
    currenciesAccepted: seoSchema.currenciesAccepted || undefined
  };

  // Aggregate Rating hinzufügen wenn vorhanden
  if (rating.durchschnitt && rating.anzahl) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.durchschnitt,
      reviewCount: rating.anzahl,
      bestRating: 5
    };
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/* ─────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────── */
function renderNav() {
  const cfg = DATA.config || {};
  const nav = cfg.navigation || [];
  const cta = cfg.cta_button || {};
  const social = cfg.social || {};

  // Logo
  const logoImg = $('logo-img');
  if (logoImg && cfg.logo) logoImg.src = cfg.logo;
  html('logo-name', cfg.business_name || '');

  // Desktop Nav Links
  html('nav-links', nav.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join(''));

  // Mobile Nav Links
  html('mobile-nav-links', nav.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join(''));

  // Phone
  const phone = cfg.telefon || cfg.kontakt?.telefon || '';
  [$('nav-phone'), $('mobile-phone')].forEach(el => {
    if (el) {
      el.href = `tel:${phone.replace(/\s/g, '')}`;
      el.textContent = phone;
    }
  });

  // CTA
  [$('nav-cta'), $('mobile-cta')].forEach(el => {
    if (el) {
      el.href = cta.href || '#termin';
      el.textContent = cta.label || 'Termin buchen';
    }
  });

  // Instagram in nav-actions (optional)
  if (social.instagram) {
    const navActions = document.querySelector('.nav-actions');
    // Only add if plenty of space
  }
}

/* ─────────────────────────────────────────
   HERO
   ───────────────────────────────────────── */
function renderHero() {
  const hero = DATA.content?.hero || {};
  const cfg = DATA.config || {};

  // Background
  const bg = $('hero-bg');
  if (bg && hero.background_image) {
    bg.style.backgroundImage = `url('${hero.background_image}')`;
  }

  // Overlay opacity – warm peach light overlay
  const overlay = $('hero-overlay');
  if (overlay && hero.overlay_opacity !== undefined) {
    const op = hero.overlay_opacity;
    overlay.style.background = `linear-gradient(135deg,
      rgba(255,245,238,${Math.min(op + 0.4, 0.92)}) 0%,
      rgba(255,245,238,${Math.min(op + 0.25, 0.8)}) 50%,
      rgba(255,240,230,${Math.min(op + 0.1, 0.65)}) 100%)`;
  }

  // Badge
  html('hero-badge', hero.badge ? hero.badge : (cfg.business_name ? `✦ ${cfg.business_name}` : ''));

  // Headline
  html('hero-headline', hero.headline || 'Dein Salon. Dein Style.');

  // Subline
  html('hero-subline', hero.subline || hero.subtext || '');

  // CTAs
  const primary = hero.cta_primary || {};
  const secondary = hero.cta_secondary || {};
  html('hero-ctas', `
    ${primary.label ? `<a href="${primary.href || '#termin'}" class="btn btn-primary btn-lg">${primary.label}</a>` : ''}
    ${secondary.label ? `<a href="${secondary.href || '#leistungen'}" class="btn btn-outline-light btn-lg">${secondary.label}</a>` : ''}
  `);

  // Trust Badges
  const badges = hero.trust_badges || [];
  html('hero-trust', badges.map(b =>
    `<span class="trust-badge">${ICONS.star.replace('viewBox', 'width="12" height="12" viewBox')} ${b}</span>`
  ).join(''));
}

/* ─────────────────────────────────────────
   LEISTUNGEN
   ───────────────────────────────────────── */
let activeServiceTab = 0;

function renderServices() {
  const s = DATA.services || {};
  const cats = s.kategorien || [];

  // Header
  html('services-header', `
    <span class="section-label">${s.label || 'Leistungen'}</span>
    <h2 class="section-title">${s.headline || 'Unsere Leistungen'}</h2>
    <p class="section-subtitle">${s.subline || ''}</p>
  `);

  // Tabs
  html('services-tabs', cats.map((cat, i) =>
    `<button class="services-tab ${i === 0 ? 'active' : ''}" data-tab="${i}" aria-selected="${i === 0}">
      <span class="tab-icon">${iconFor(cat.icon)}</span>
      ${cat.name}
    </button>`
  ).join(''));

  // Note
  if (s.hinweis) {
    const noteEl = $('services-note');
    if (noteEl) noteEl.textContent = '* ' + s.hinweis;
  }

  // Initial render
  renderServiceGrid(cats, 0);
}

function renderServiceGrid(cats, tabIndex) {
  const cat = cats[tabIndex];
  if (!cat) return;

  const items = cat.leistungen || [];
  html('services-grid', items.map(item => `
    <article class="service-card anim-up">
      <div class="service-card-top">
        <h3 class="service-name">${item.name}</h3>
        <div class="service-price-wrap">
          ${formatPrice(item.preis, item.preis_typ)}
        </div>
      </div>
      ${item.beschreibung ? `<p class="service-desc">${item.beschreibung}</p>` : ''}
      <div class="service-meta">
        ${item.dauer_min ? `<span class="service-meta-item">${ICONS.clock.replace('viewBox', 'width="13" height="13" viewBox')} ${item.dauer_min} Min.</span>` : ''}
      </div>
      ${item.buchbar ? `<a href="${DATA.booking?.embed_url || '#termin'}" class="btn btn-primary service-book-btn" target="_blank" rel="noopener noreferrer">Buchen</a>` : ''}
    </article>
  `).join(''));

  triggerAnimations();
}

/* ─────────────────────────────────────────
   TEAM
   ───────────────────────────────────────── */
function renderTeam() {
  const t = DATA.team || {};
  const members = t.mitglieder || [];

  html('team-header', `
    <span class="section-label">${t.label || 'Team'}</span>
    <h2 class="section-title">${t.headline || 'Unser Team'}</h2>
    <p class="section-subtitle">${t.subline || ''}</p>
  `);

  html('team-grid', members.map(m => {
    const initials = m.name ? m.name.split(' ').map(w => w[0]).join('').slice(0, 2) : '?';
    const photoHtml = m.bild
      ? `<img src="${m.bild}" alt="${m.name}" loading="lazy">`
      : `<div class="team-photo-placeholder"><span class="team-initials">${initials}</span></div>`;

    return `
      <article class="team-card anim-up">
        <div class="team-photo">${photoHtml}</div>
        <div class="team-info">
          <h3 class="team-name">${m.name}</h3>
          <p class="team-role">${m.rolle}</p>
          ${m.bio ? `<p class="team-bio">${m.bio}</p>` : ''}
          ${m.spezialgebiete?.length ? `
            <div class="team-tags">
              ${m.spezialgebiete.map(tag => `<span class="team-tag">${tag}</span>`).join('')}
            </div>` : ''}
          ${m.instagram ? `
            <a href="https://instagram.com/${m.instagram.replace('@','')}" class="team-instagram" target="_blank" rel="noopener noreferrer">
              ${ICONS.instagram.replace('viewBox', 'width="14" height="14" viewBox')}
              ${m.instagram}
            </a>` : ''}
        </div>
      </article>
    `;
  }).join(''));
}

/* ─────────────────────────────────────────
   GALERIE
   ───────────────────────────────────────── */
let galleryImages = [];
let lightboxIndex = 0;

function renderGallery() {
  const g = DATA.gallery || {};
  const bilder = g.bilder || [];
  const filter = g.kategorien_filter || ['Alle'];
  galleryImages = bilder;

  html('gallery-header', `
    <span class="section-label">${g.label || 'Portfolio'}</span>
    <h2 class="section-title">${g.headline || 'Unsere Arbeiten'}</h2>
    <p class="section-subtitle">${g.subline || ''}</p>
  `);

  // Filter buttons
  html('gallery-filter', filter.map((f, i) =>
    `<button class="gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${f}">${f}</button>`
  ).join(''));

  // Gallery grid (show first 9 on homepage)
  renderGalleryGrid(bilder.slice(0, 9), 'Alle');
}

function renderGalleryGrid(images, activeFilter) {
  html('gallery-grid', images.map((img, i) => `
    <div class="gallery-item anim-up" data-category="${img.kategorie || 'Alle'}" data-index="${i}"
         ${activeFilter !== 'Alle' && img.kategorie !== activeFilter ? 'style="display:none"' : ''}>
      <img src="${img.src}" alt="${img.alt || ''}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-zoom-icon">${ICONS.zoom.replace('viewBox', 'width="18" height="18" viewBox')}</div>
        <span>${img.kategorie || ''}</span>
      </div>
    </div>
  `).join(''));
  triggerAnimations();
}

/* ─────────────────────────────────────────
   BEWERTUNGEN
   ───────────────────────────────────────── */
function renderReviews() {
  const r = DATA.reviews || {};
  const rating = r.google_rating || {};
  const testimonials = r.testimonials || [];

  html('reviews-header', `
    <span class="section-label">${r.label || 'Bewertungen'}</span>
    <h2 class="section-title">${r.headline || 'Das sagen unsere Kunden'}</h2>
  `);

  // Google Rating
  if (rating.durchschnitt) {
    html('google-rating', `
      <div class="google-logo">Google</div>
      <div class="google-score">${rating.durchschnitt}</div>
      <div class="google-stars">${stars(Math.round(rating.durchschnitt), 18)}</div>
      <div class="google-count">${rating.anzahl || ''} Bewertungen</div>
      ${rating.link ? `<a href="${rating.link}" class="google-link" target="_blank" rel="noopener noreferrer">Alle lesen →</a>` : ''}
    `);
  }

  // Testimonials
  html('reviews-grid', testimonials.map(t => `
    <article class="review-card anim-up">
      <div class="review-stars">${stars(t.sterne || 5, 16)}</div>
      <p class="review-text">${t.text}</p>
      <div class="review-author">
        <span class="review-name">${t.name}</span>
        <div class="review-meta">
          ${t.quelle ? `<span class="review-source">${t.quelle}</span>` : ''}
          ${t.datum ? `<span class="review-date">${formatDate(t.datum)}</span>` : ''}
        </div>
      </div>
    </article>
  `).join(''));

  // Presse
  const presse = r.presse || [];
  if (presse.length) {
    html('presse-logos', presse.map(p => `
      <div class="presse-logo-item">
        <strong class="brand-logo-name">${p.name}</strong>
        ${p.zitat ? `<p class="presse-quote">"${p.zitat}"</p>` : ''}
      </div>
    `).join(''));
  }
}

/* ─────────────────────────────────────────
   ÜBER UNS
   ───────────────────────────────────────── */
function renderAbout() {
  const about = DATA.content?.about || {};
  const cfg = DATA.config || {};

  // Content
  const besonderheiten = about.besonderheiten || [];
  const marken = about.marken || [];
  const auszeichnungen = about.auszeichnungen || [];

  html('about-content', `
    <span class="section-label">${about.label || 'Über Uns'}</span>
    <h2 class="about-title">${about.headline || `Über ${cfg.business_name || 'uns'}`}</h2>
    <p class="about-text">${about.text || ''}</p>
    ${about.philosophie ? `<blockquote class="about-philosophy">${about.philosophie}</blockquote>` : ''}
    ${besonderheiten.length ? `
      <div class="about-badges">
        ${besonderheiten.map(b => `
          <span class="about-badge">
            ${ICONS.check.replace('viewBox', 'width="14" height="14" viewBox')} ${b}
          </span>`).join('')}
      </div>` : ''}
    ${auszeichnungen.length ? `
      <div class="about-badges">
        ${auszeichnungen.map(a => `
          <span class="about-badge">
            ${ICONS.award.replace('viewBox', 'width="14" height="14" viewBox')} ${a.titel} ${a.jahr}
          </span>`).join('')}
      </div>` : ''}
    ${marken.length ? `
      <div class="brand-logos">
        ${marken.map(m => `<span class="brand-logo-name">${m.name}</span>`).join('')}
      </div>` : ''}
  `);
}

/* ─────────────────────────────────────────
   ÖFFNUNGSZEITEN + KONTAKT
   ───────────────────────────────────────── */
function renderHoursContact() {
  const hours = DATA.hours || {};
  const cfg = DATA.config || {};
  const kontakt = cfg.kontakt || {};
  const regular = hours.regulaer || {};

  html('hours-contact-header', `
    <span class="section-label">Infos & Kontakt</span>
    <h2 class="section-title">So erreichst du uns</h2>
  `);

  // Tage in der richtigen Reihenfolge
  const dayMap = {
    montag: 'Montag', dienstag: 'Dienstag', mittwoch: 'Mittwoch',
    donnerstag: 'Donnerstag', freitag: 'Freitag', samstag: 'Samstag', sonntag: 'Sonntag'
  };

  const hoursRows = Object.entries(dayMap).map(([key, label]) => {
    const time = regular[key] || 'geschlossen';
    const closed = time === 'geschlossen';
    return `
      <div class="hours-row">
        <span class="hours-day">${label}</span>
        <span class="hours-time ${closed ? 'closed' : ''}">${closed ? 'Geschlossen' : time}</span>
      </div>`;
  }).join('');

  html('hours-block', `
    <h3 class="block-title">${ICONS.clock.replace('viewBox', 'width="22" height="22" viewBox')} Öffnungszeiten</h3>
    <div class="hours-list">${hoursRows}</div>
    ${hours.hinweis ? `<div class="hours-note">ℹ️ ${hours.hinweis}</div>` : ''}
  `);

  // Kontakt
  const addr = kontakt.adresse || {};
  const addrStr = [addr.strasse, `${addr.plz || ''} ${addr.stadt || ''}`.trim(), addr.land].filter(Boolean).join(', ');

  html('contact-block', `
    <h3 class="block-title">${ICONS.phone.replace('viewBox', 'width="22" height="22" viewBox')} Kontakt</h3>
    <div class="contact-items">
      ${kontakt.telefon ? `
        <div class="contact-item">
          <div class="contact-item-icon">${ICONS.phone.replace('viewBox', 'width="18" height="18" viewBox')}</div>
          <div>
            <div class="contact-item-label">Telefon</div>
            <div class="contact-item-value"><a href="tel:${kontakt.telefon.replace(/\s/g,'')}">
              ${kontakt.telefon}</a></div>
          </div>
        </div>` : ''}
      ${kontakt.email ? `
        <div class="contact-item">
          <div class="contact-item-icon">${ICONS.mail.replace('viewBox', 'width="18" height="18" viewBox')}</div>
          <div>
            <div class="contact-item-label">E-Mail</div>
            <div class="contact-item-value"><a href="mailto:${kontakt.email}">${kontakt.email}</a></div>
          </div>
        </div>` : ''}
      ${addrStr ? `
        <div class="contact-item">
          <div class="contact-item-icon">${ICONS.mapPin.replace('viewBox', 'width="18" height="18" viewBox')}</div>
          <div>
            <div class="contact-item-label">Adresse</div>
            <div class="contact-item-value">${addrStr}</div>
          </div>
        </div>` : ''}
      ${kontakt.anfahrt ? `
        <div class="contact-item">
          <div class="contact-item-icon">${ICONS.mapPin.replace('viewBox', 'width="18" height="18" viewBox')}</div>
          <div>
            <div class="contact-item-label">Anfahrt</div>
            <div class="contact-item-value">${kontakt.anfahrt}</div>
          </div>
        </div>` : ''}
    </div>
    ${kontakt.whatsapp ? `
      <a href="https://wa.me/${kontakt.whatsapp.replace(/[^0-9]/g,'')}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        ${ICONS.whatsapp.replace('viewBox', 'width="16" height="16" viewBox')}
        WhatsApp schreiben
      </a>` : ''}
  `);

  // Map (2-Klick-Lösung für DSGVO-Konformität)
  const geo = kontakt.geo;
  if (geo && geo.lat && geo.lng) {
    html('map-block', `
      <div class="map-consent" id="map-consent">
        <div class="map-consent-inner">
          ${ICONS.mapPin.replace('viewBox', 'width="32" height="32" viewBox')}
          <p class="map-consent-text">Beim Laden der Karte werden Daten an Google übermittelt.</p>
          <button class="btn btn-primary btn-sm map-consent-btn" id="map-load-btn">Karte laden</button>
          <a href="https://maps.google.com/maps?q=${geo.lat},${geo.lng}" class="map-external-link" target="_blank" rel="noopener noreferrer">
            In Google Maps öffnen
          </a>
        </div>
      </div>
    `);
    $('map-load-btn')?.addEventListener('click', () => {
      html('map-block', `
        <iframe
          src="https://maps.google.com/maps?q=${geo.lat},${geo.lng}&hl=de&z=15&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Salon Standort">
        </iframe>
      `);
    });
  } else {
    html('map-block', `
      <div class="map-placeholder">
        ${ICONS.mapPin.replace('viewBox', 'width="40" height="40" viewBox')}
        <span>Google Maps hier eintragen<br>
          <small>geo.lat + geo.lng in config.json setzen</small>
        </span>
      </div>
    `);
  }
}

/* ─────────────────────────────────────────
   FAQ
   ───────────────────────────────────────── */
function renderFaq() {
  const faq = DATA.faq || {};
  const items = faq.fragen || [];

  html('faq-header', `
    <span class="section-label">${faq.label || 'FAQ'}</span>
    <h2 class="section-title">${faq.headline || 'Häufige Fragen'}</h2>
    ${faq.subline ? `<p class="section-subtitle">${faq.subline}</p>` : ''}
  `);

  html('faq-list', items.map((item, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" aria-expanded="false">
        ${item.frage}
        <span class="faq-icon">${ICONS.plus.replace('viewBox', 'width="12" height="12" viewBox')}</span>
      </button>
      <div class="faq-answer" role="region">
        <div class="faq-answer-inner">${item.antwort}</div>
      </div>
    </div>
  `).join(''));

  // JSON-LD FAQ Schema
  if (faq.schema_markup && items.length) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(item => ({
        '@type': 'Question',
        name: item.frage,
        acceptedAnswer: { '@type': 'Answer', text: item.antwort }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

/* ─────────────────────────────────────────
   BOOKING CTA BANNER
   ───────────────────────────────────────── */
function renderBookingCta() {
  const b = DATA.booking || {};
  const cfg = DATA.config || {};
  const cta = cfg.cta_button || {};

  html('booking-cta-inner', `
    <span class="booking-cta-label">Online buchen · Rund um die Uhr</span>
    <h2 class="booking-cta-title">${b.headline || 'Jetzt Termin vereinbaren'}</h2>
    <p class="booking-cta-sub">${b.subline || 'Einfach, schnell und bequem online buchen.'}</p>
    <div class="booking-cta-actions">
      ${b.embed_url
        ? `<a href="${b.embed_url}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            ${cta.label || 'Termin buchen'}
          </a>`
        : `<a href="mailto:${cfg.kontakt?.email || '#'}" class="btn btn-primary btn-lg">
            ${cta.label || 'Termin anfragen'}
          </a>`
      }
      ${b.fallback_telefon
        ? `<a href="tel:${b.fallback_telefon.replace(/\s/g,'')}" class="btn btn-outline-light btn-lg">
            ${ICONS.phone.replace('viewBox', 'width="18" height="18" viewBox')} Anrufen
          </a>`
        : ''}
    </div>
    ${b.stornierung?.text
      ? `<p class="booking-fallback">ℹ️ ${b.stornierung.text}</p>`
      : ''}
  `);
}

/* ─────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────── */
function renderFooter() {
  const cfg = DATA.config || {};
  const footer = cfg.footer || {};
  const kontakt = cfg.kontakt || {};
  const social = cfg.social || {};
  const hours = DATA.hours?.regulaer || {};
  const legal = DATA.legal?.impressum || {};

  const quickLinks = (footer.quick_links || []).map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');

  const legalLinks = (footer.legal_links || []).map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');

  const socialIcons = Object.entries(social)
    .filter(([,url]) => url)
    .map(([platform, url]) => {
      const icon = ICONS[platform] || ICONS.instagram;
      return `<a href="${url}" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="${platform}">
        ${icon.replace('viewBox', 'width="18" height="18" viewBox')}
      </a>`;
    }).join('');

  // Short hours for footer (only 3 key days)
  const shortDays = ['dienstag', 'donnerstag', 'samstag'];
  const shortHoursHtml = shortDays.map(day => {
    const time = hours[day];
    if (!time) return '';
    const label = { dienstag: 'Di–Mi', donnerstag: 'Do', samstag: 'Sa' }[day];
    return `<div class="footer-hours-row"><span class="day">${label}</span><span>${time}</span></div>`;
  }).join('');

  const addr = kontakt.adresse || {};
  const addrStr = [addr.strasse, `${addr.plz || ''} ${addr.stadt || ''}`.trim()].filter(Boolean).join(', ');

  html('footer-grid', `
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="${cfg.logo || 'assets/logo.svg'}" alt="Logo" width="36" height="36">
        <span class="footer-logo-name">${cfg.business_name || ''}</span>
      </div>
      <p class="footer-tagline">${footer.tagline || ''}</p>
      <div class="footer-social">${socialIcons}</div>
    </div>

    <div>
      <p class="footer-col-title">Navigation</p>
      <ul class="footer-links">${quickLinks}</ul>
    </div>

    <div>
      <p class="footer-col-title">Kontakt</p>
      <div class="footer-contact-items">
        ${kontakt.telefon ? `<div class="footer-contact-item">
          ${ICONS.phone.replace('viewBox', 'width="15" height="15" viewBox')}
          <a href="tel:${kontakt.telefon.replace(/\s/g,'')}">${kontakt.telefon}</a>
        </div>` : ''}
        ${kontakt.email ? `<div class="footer-contact-item">
          ${ICONS.mail.replace('viewBox', 'width="15" height="15" viewBox')}
          <a href="mailto:${kontakt.email}">${kontakt.email}</a>
        </div>` : ''}
        ${addrStr ? `<div class="footer-contact-item">
          ${ICONS.mapPin.replace('viewBox', 'width="15" height="15" viewBox')}
          <span>${addrStr}</span>
        </div>` : ''}
      </div>
    </div>

    <div>
      <p class="footer-col-title">Öffnungszeiten</p>
      <div class="footer-hours-mini">${shortHoursHtml}</div>
      ${hours.montag === 'geschlossen' ? '<p style="font-size:.82rem;color:rgba(255,255,255,.4);margin-top:8px">Montag: Ruhetag</p>' : ''}
    </div>
  `);

  const year = new Date().getFullYear();
  const copyright = (footer.copyright || `© ${year} ${cfg.business_name || ''}. Alle Rechte vorbehalten.`)
    .replace('{year}', year);

  html('footer-bottom', `
    <span class="footer-copyright">${copyright}</span>
    <ul class="footer-legal-links">${legalLinks}</ul>
  `);
}

/* ─────────────────────────────────────────
   INTERACTIVITY — Navigation
   ───────────────────────────────────────── */
function setupNav() {
  const header = $('site-header');
  const hamburger = $('hamburger');
  const mobileMenu = $('mobile-menu');

  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Close mobile menu on link click
  document.querySelectorAll('#mobile-nav-links a, #mobile-cta').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileMenu?.classList.remove('active');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────
   INTERACTIVITY — Service Tabs
   ───────────────────────────────────────── */
function setupServiceTabs() {
  const cats = DATA.services?.kategorien || [];
  document.addEventListener('click', e => {
    const tab = e.target.closest('.services-tab');
    if (!tab) return;
    const idx = parseInt(tab.dataset.tab);
    document.querySelectorAll('.services-tab').forEach(t => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', t === tab);
    });
    renderServiceGrid(cats, idx);
  });
}

/* ─────────────────────────────────────────
   INTERACTIVITY — Gallery Filter + Lightbox
   ───────────────────────────────────────── */
function setupGallery() {
  // Filter
  document.addEventListener('click', e => {
    const btn = e.target.closest('.gallery-filter-btn');
    if (!btn) return;
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-filter-btn').forEach(b =>
      b.classList.toggle('active', b === btn)
    );
    document.querySelectorAll('.gallery-item').forEach(item => {
      const cat = item.dataset.category;
      item.style.display = (filter === 'Alle' || cat === filter) ? '' : 'none';
    });
  });

  // Lightbox open
  document.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const idx = parseInt(item.dataset.index);
    if (!isNaN(idx)) openLightbox(idx);
  });

  // Lightbox controls
  $('lightbox-close')?.addEventListener('click', closeLightbox);
  $('lightbox-overlay')?.addEventListener('click', closeLightbox);
  $('lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
  $('lightbox-next')?.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    if (!$('lightbox')?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(idx) {
  const images = galleryImages;
  if (!images.length) return;
  lightboxIndex = Math.max(0, Math.min(idx, images.length - 1));
  const img = images[lightboxIndex];
  const lightboxImg = $('lightbox-img');
  if (lightboxImg) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
  }
  html('lightbox-caption', img.alt || img.kategorie || '');
  $('lightbox')?.classList.add('active');
  $('lightbox-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('lightbox')?.classList.remove('active');
  $('lightbox-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const images = galleryImages;
  lightboxIndex = (lightboxIndex + dir + images.length) % images.length;
  openLightbox(lightboxIndex);
}

/* ─────────────────────────────────────────
   INTERACTIVITY — FAQ Accordion
   ───────────────────────────────────────── */
function setupFaq() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item.active').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer')?.classList.remove('open');
      i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if was closed)
    if (!isOpen) {
      item.classList.add('active');
      answer?.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ─────────────────────────────────────────
   SCROLL ANIMATIONS (Enhanced)
   ───────────────────────────────────────── */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe all animation types
  const animClasses = ['.anim-up', '.anim-blur', '.anim-scale', '.anim-left', '.anim-right', '.anim-clip'];
  animClasses.forEach(cls => {
    document.querySelectorAll(cls).forEach(el => observer.observe(el));
  });

  // Add stagger delays to grid children
  document.querySelectorAll('.services-grid, .team-grid, .reviews-grid, .gallery-grid').forEach(grid => {
    const items = grid.children;
    Array.from(items).forEach((item, i) => {
      item.classList.add(`anim-stagger-${Math.min(i + 1, 8)}`);
    });
  });
}

function triggerAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const selectors = '.anim-up:not(.visible), .anim-blur:not(.visible), .anim-scale:not(.visible), .anim-left:not(.visible), .anim-right:not(.visible), .anim-clip:not(.visible)';
  document.querySelectorAll(selectors).forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   HERO PARALLAX
   ───────────────────────────────────────── */
function setupHeroParallax() {
  const heroBg = $('hero-bg');
  const heroSection = document.querySelector('.hero');
  if (!heroBg || !heroSection) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        if (scrollY < heroHeight) {
          heroBg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   HERO DECORATIVE ELEMENTS
   ───────────────────────────────────────── */
function setupHeroDecor() {
  const hero = document.querySelector('.hero');
  if (!hero || window.innerWidth < 768) return;

  const decor1 = document.createElement('div');
  decor1.className = 'hero-decor hero-decor-circle';
  decor1.style.cssText = 'top: 10%; right: -5%;';
  hero.appendChild(decor1);

  const decor2 = document.createElement('div');
  decor2.className = 'hero-decor hero-decor-circle-2';
  decor2.style.cssText = 'bottom: 15%; right: 20%;';
  hero.appendChild(decor2);

  const decor3 = document.createElement('div');
  decor3.className = 'hero-decor hero-decor-dots';
  decor3.style.cssText = 'top: 25%; right: 10%;';
  hero.appendChild(decor3);
}

/* ─────────────────────────────────────────
   CUSTOM CURSOR FOLLOWER
   ───────────────────────────────────────── */
function setupCursorFollower() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursor.classList.contains('visible')) {
      cursor.classList.add('visible');
    }
  });

  // Smooth follow with lerp
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  const hoverTargets = 'a, button, .gallery-item, .service-card, .team-card, .review-card, .faq-question';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) cursor.classList.add('hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) cursor.classList.remove('hover');
  });
}

/* ─────────────────────────────────────────
   SCROLL PROGRESS BAR
   ───────────────────────────────────────── */
function setupScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
}

/* ─────────────────────────────────────────
   ENHANCED SECTION LABEL ANIMATIONS
   ───────────────────────────────────────── */
function enhanceSectionLabels() {
  // Add blur animation to section headers
  document.querySelectorAll('.section-label-group').forEach(group => {
    const label = group.querySelector('.section-label');
    const title = group.querySelector('.section-title, h2');
    const subtitle = group.querySelector('.section-subtitle');

    if (label) label.classList.add('anim-blur');
    if (title) title.classList.add('anim-blur');
    if (subtitle) { subtitle.classList.add('anim-blur'); subtitle.style.transitionDelay = '0.15s'; }
  });

  // Add blur animation to about content children
  const aboutContent = $('about-content');
  if (aboutContent) {
    const children = aboutContent.querySelectorAll('.section-label, .about-title, .about-text, .about-philosophy, .about-badges, .brand-logos');
    children.forEach((child, i) => {
      child.classList.add('anim-blur');
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  }
}

/* ─────────────────────────────────────────
   INIT
   ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadAllData();

    // Render all sections
    renderMeta();
    renderNav();
    renderHero();
    renderServices();
    renderTeam();
    renderGallery();
    renderReviews();
    renderAbout();
    renderHoursContact();
    renderFaq();
    renderBookingCta();
    renderFooter();

    // Setup interactions
    setupNav();
    setupServiceTabs();
    setupGallery();
    setupFaq();

    // Enhanced polish
    enhanceSectionLabels();
    setupScrollAnimations();
    setupHeroParallax();
    setupHeroDecor();
    setupCursorFollower();
    setupScrollProgress();

  } catch (err) {
    console.error('[Friseur Template] Fehler beim Laden:', err);
  }
});
