/* ─────────────────────────────────────────────────────────────────────────────
   Physiotherapie Nebel · js/app.js
   Rendering-Engine: fetcht data/content.json → baut DOM
   + alle interaktiven Funktionen (Nav, Hamburger, Animationen, Formular)

   REGEL: index.html wird nicht angefasst.
   Alle Inhalte → data/content.json ändern, dann neu deployen.
───────────────────────────────────────────────────────────────────────────── */

'use strict';

/* ── Daten laden & rendern ─────────────────────────────────────────────── */
fetch('data/content.json')
  .then(r => r.json())
  .then(data => {
    renderNav(data.brand, data.nav);
    renderMobileMenu(data.nav, data.brand);
    renderHero(data.hero, data.brand);
    renderValues(data.values);
    renderServices(data.services);
    renderAbout(data.about);
    renderWellness(data.wellness);
    if (data.gallery) renderGallery(data.gallery, data.gallery_header);
    renderHours(data.hours, data.brand);
    renderContact(data.contact, data.brand);
    renderFooter(data.footer, data.brand, data.nav);
    initInteractivity();
  })
  .catch(err => console.error('content.json konnte nicht geladen werden:', err));

/* ── Hilfsfunktionen ───────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

/* ── Nav ────────────────────────────────────────────────────────────────── */
function renderNav(brand, nav) {
  $('nav-logo-name').textContent = brand.name;
  $('nav-logo-sub').textContent  = brand.sub;

  const links = $('nav-links');
  nav.links.forEach(link => {
    const li = el('li');
    const a  = el('a', '', link.label);
    a.href = link.href;
    li.appendChild(a);
    links.appendChild(li);
  });

  $('nav-phone').href        = `tel:${brand.phone_href}`;
  $('nav-phone').textContent = `📞 ${brand.phone_display}`;
  $('nav-cta-btn').href      = nav.cta.href;
  $('nav-cta-btn').textContent = nav.cta.label;
}

/* ── Mobile Menu ────────────────────────────────────────────────────────── */
function renderMobileMenu(nav, brand) {
  const menu = $('mobile-menu');
  nav.links.forEach(link => {
    const a = el('a', 'mobile-nav-link', link.label);
    a.href = link.href;
    menu.appendChild(a);
  });
  const ctaA = el('a', 'btn btn-primary', nav.cta.label);
  ctaA.href = nav.cta.href;
  const callA = el('a', 'btn btn-outline', `📞 Jetzt anrufen`);
  callA.href = `tel:${brand.phone_href}`;
  menu.appendChild(ctaA);
  menu.appendChild(callA);
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
function renderHero(hero, brand) {
  // Hintergrundbild mit Farbverlauf-Overlay
  if (hero.bg_image) {
    const heroEl = document.querySelector('.hero');
    heroEl.style.backgroundImage =
      `linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(15,15,15,0.90) 55%, rgba(10,10,10,0.85) 100%), url(${hero.bg_image})`;
    heroEl.style.backgroundSize     = 'cover';
    heroEl.style.backgroundPosition = 'center';
  }

  $('hero-badge').textContent   = hero.badge;
  $('hero-title').innerHTML     = hero.headline.join('<br />');
  $('hero-lead').textContent    = hero.subtext;
  $('hero-cta-primary').href    = hero.cta_primary.href;
  $('hero-cta-primary').textContent = hero.cta_primary.label;
  $('hero-cta-secondary').href  = hero.cta_secondary.href;
  $('hero-cta-secondary').textContent = hero.cta_secondary.label;

  // KPIs
  const kpiWrap = $('hero-stats');
  hero.kpis.forEach(kpi => {
    const div = el('div', 'hero-stat');
    div.innerHTML = `<span class="hero-stat-number">${kpi.value}</span><span class="hero-stat-label">${kpi.label}</span>`;
    kpiWrap.appendChild(div);
  });

  // Card
  $('hero-card-initial').textContent = brand.initial;
  $('hero-card-name').textContent    = hero.card.name;
  $('hero-card-role').textContent    = hero.card.role;
  const svcWrap = $('hero-card-services');
  hero.card.services.forEach(svc => {
    const div = el('div', 'hero-card-service');
    div.innerHTML = `<div class="hero-card-service-dot"></div>${svc}`;
    svcWrap.appendChild(div);
  });
  $('hero-card-city').textContent = brand.location.city.split(' ')[1];
  $('hero-card-address').textContent = `${brand.location.street}, ${brand.location.city.split(' ')[0]}`;
}

/* ── Values ─────────────────────────────────────────────────────────────── */
function renderValues(values) {
  const wrap = $('values-grid');
  values.forEach((v, i) => {
    if (i > 0) wrap.appendChild(el('span', 'value-divider', '·'));
    const div = el('div', 'value-item');
    div.innerHTML = `<span class="value-item-icon">${v.icon}</span>${v.label}`;
    wrap.appendChild(div);
  });
}

/* ── Services ───────────────────────────────────────────────────────────── */
function renderServices(services) {
  $('services-eyebrow').textContent = services.label;
  $('services-title').textContent   = services.heading;
  $('services-lead').textContent    = services.subtext;

  const grid = $('services-grid');
  const INITIAL_COUNT = 6;
  const items = services.items;

  items.forEach((item, i) => {
    const card = el('article', 'service-card fade-up');
    if (i >= INITIAL_COUNT) card.classList.add('service-card--hidden');
    card.innerHTML = `
      <div class="service-icon">${item.icon}</div>
      <h3 class="service-name">${item.name}</h3>
      <p class="service-desc">${item.desc}</p>`;
    grid.appendChild(card);
  });

  if (items.length > INITIAL_COUNT) {
    const wrapper = el('div', 'services-toggle-wrap');
    const btn = el('button', 'btn btn-outline services-toggle');
    btn.textContent = `Alle ${items.length} Leistungen anzeigen`;
    btn.addEventListener('click', () => {
      const hidden = grid.querySelectorAll('.service-card--hidden');
      hidden.forEach(c => {
        c.classList.remove('service-card--hidden');
        requestAnimationFrame(() => c.classList.add('visible'));
      });
      wrapper.remove();
    });
    wrapper.appendChild(btn);
    grid.parentNode.appendChild(wrapper);
  }
}

/* ── About ──────────────────────────────────────────────────────────────── */
function renderAbout(about) {
  $('about-eyebrow').textContent = about.label;
  $('about-title').textContent   = about.heading;
  $('about-lead').textContent    = about.lead;

  // Echtes Foto einsetzen
  if (about.image) {
    const box = document.querySelector('.about-image-box');
    box.innerHTML = `<img src="${about.image}" alt="${about.image_alt || ''}" loading="lazy" />`;
  }

  const wrap = $('about-features');
  about.features.forEach(f => {
    const div = el('div', 'about-feature');
    div.innerHTML = `
      <div class="about-feature-icon">${f.icon}</div>
      <div>
        <div class="about-feature-title">${f.title}</div>
        <div class="about-feature-desc">${f.desc}</div>
      </div>`;
    wrap.appendChild(div);
  });
}

/* ── Wellness ───────────────────────────────────────────────────────────── */
function renderWellness(wellness) {
  $('wellness-eyebrow').textContent = wellness.label;
  $('wellness-title').textContent   = wellness.heading;
  $('wellness-lead').textContent    = wellness.lead;
  $('wellness-text').textContent    = wellness.text;
  $('wellness-cta').href            = wellness.cta.href;
  $('wellness-cta').textContent     = wellness.cta.label;

  // Wellness-Bild in die rechte Spalte (oberhalb der Karten)
  if (wellness.image) {
    const box = $('wellness-img-box');
    if (box) {
      box.innerHTML = `<img src="${wellness.image}" alt="${wellness.image_alt || ''}" loading="lazy" class="wellness-img" />`;
    }
  }

  const grid = $('wellness-grid-items');
  wellness.items.forEach(item => {
    const div = el('div', 'wellness-card fade-up');
    div.innerHTML = `<div class="wellness-card-icon">${item.icon}</div><div class="wellness-card-name">${item.name}</div>`;
    grid.appendChild(div);
  });
}

/* ── Gallery ────────────────────────────────────────────────────────────── */
function renderGallery(gallery, header) {
  const section = $('gallery-strip');
  if (!section) return;
  if (header) {
    const eyebrow = $('gallery-eyebrow');
    const title   = $('gallery-title');
    if (eyebrow) eyebrow.textContent = header.label;
    if (title)   title.textContent   = header.heading;
  }
  const grid = $('gallery-grid');
  // Klasse je nach Bildanzahl setzen
  if (gallery.length >= 8)      grid.classList.add('gallery-grid--8');
  else if (gallery.length >= 6) grid.classList.add('gallery-grid--6');
  gallery.forEach((item, i) => {
    const div = el('div', 'gallery-item fade-up');
    const img = document.createElement('img');
    img.src     = item.url;
    img.alt     = item.alt;
    img.loading = 'lazy';
    // Fallback bei Ladefehler: Placeholder anzeigen
    img.onerror = function() {
      this.style.display = 'none';
      div.style.background = '#f0f0f0';
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.innerHTML += `<span style="font-size:2rem;opacity:.3">🏥</span>`;
    };
    const overlay = el('div', 'gallery-item-overlay',
      `<span class="gallery-item-label">${item.label}</span>`);
    div.appendChild(img);
    div.appendChild(overlay);
    grid.appendChild(div);
  });
}

/* ── Hours ──────────────────────────────────────────────────────────────── */
function renderHours(hours, brand) {
  if (hours.label)   { const ey = $('hours-eyebrow'); if (ey) ey.textContent = hours.label; }
  if (hours.heading) { const ti = $('hours-title');   if (ti) ti.textContent = hours.heading; }
  const banner = $('hours-banner');
  hours.groups.forEach((group, i) => {
    if (i > 0) banner.appendChild(el('div', 'hours-divider'));
    const div = el('div', 'hours-group');
    div.innerHTML = `<span class="hours-label">${group.label}</span><span class="hours-time">${group.time}</span>`;
    banner.appendChild(div);
  });
  const cta = el('div', '', `<a href="tel:${brand.phone_href}" class="btn btn-primary">📞 Jetzt anrufen</a>`);
  cta.style.marginLeft = 'auto';
  banner.appendChild(cta);
}

/* ── Contact ────────────────────────────────────────────────────────────── */
function renderContact(contact, brand) {
  $('contact-eyebrow').textContent = contact.label;
  $('contact-title').textContent   = contact.heading;
  $('contact-lead').textContent    = contact.subtext;

  // Info boxes
  const info = $('contact-info');
  const boxes = [
    { icon: '📍', label: 'Adresse',       html: `${brand.location.street}<br />${brand.location.city}` },
    { icon: '📞', label: 'Telefon',       html: `<a href="tel:${brand.phone_href}">${brand.phone_display}</a>${brand.phone_mobile_display ? `<br /><span style="font-size:.85rem;color:var(--color-text-sec)">Mobil: <a href="tel:${brand.phone_mobile_href}">${brand.phone_mobile_display}</a></span>` : ''}` },
    { icon: '✉️', label: 'E-Mail',        html: `<a href="mailto:${brand.email}">${brand.email}</a>` },
    { icon: '🗺️', label: 'Anfahrt',       html: `<a href="${brand.location.maps_url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-text)">In Google Maps öffnen ↗</a>` }
  ];
  boxes.forEach(b => {
    const div = el('div', 'contact-item');
    div.innerHTML = `
      <div class="contact-item-icon">${b.icon}</div>
      <div>
        <div class="contact-item-label">${b.label}</div>
        <div class="contact-item-value">${b.html}</div>
      </div>`;
    info.appendChild(div);
  });

  // Form
  $('form-title').textContent = contact.form.title;
  $('form-lead').textContent  = contact.form.lead;
  const sel = $('form-anliegen');
  contact.form.select_options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.value; o.textContent = opt.label;
    sel.appendChild(o);
  });
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
function renderFooter(footer, brand, nav) {
  $('footer-brand-name').textContent = brand.name;
  $('footer-brand-sub').textContent  = brand.sub;
  $('footer-brand-desc').textContent = footer.desc;

  const navList = $('footer-nav-links');
  nav.links.forEach(link => {
    const li = el('li'); const a = el('a', '', link.label); a.href = link.href;
    li.appendChild(a); navList.appendChild(li);
  });

  const kontakt = $('footer-contact-info');
  kontakt.innerHTML = `
    <li>${brand.location.street}</li>
    <li>${brand.location.city}</li>
    <li style="margin-top:.5rem"><a href="tel:${brand.phone_href}">${brand.phone_display}</a></li>
    <li style="margin-top:.5rem;font-size:.82rem;color:rgba(255,255,255,.7)">Tel. Mo–Fr: 08:00–12:30 Uhr</li>`;

  $('footer-copyright').textContent = footer.copyright;

  const legal = $('footer-legal');
  footer.legal_links.forEach(link => {
    const a = el('a', '', link.label); a.href = link.href;
    legal.appendChild(a);
  });
}

/* ── Interaktivität ─────────────────────────────────────────────────────── */
function initInteractivity() {
  // Nav scroll-Klasse
  const nav     = document.querySelector('.nav');
  const scrollBtn = $('scroll-top');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Hamburger / Mobile Menu
  const hamburger  = $('hamburger');
  const mobileMenu = $('mobile-menu');
  const closeMobile = () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.addEventListener('click', e => {
    if (e.target.matches('a')) closeMobile();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });

  // Scroll to top
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Fade-up Animationen
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

  // Scroll Spy (aktiver Nav-Link)
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');
  const spyObs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: 0.4 });
  sections.forEach(s => spyObs.observe(s));

  // Kontaktformular
  const form        = $('contact-form');
  const formContent = $('form-content');
  const formSuccess = $('form-success');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const vorname  = form.vorname.value.trim();
      const nachname = form.nachname.value.trim();
      const email    = form.email.value.trim();
      if (!vorname || !nachname || !email) { showError(form, 'Bitte füllen Sie alle Pflichtfelder (*) aus.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(form, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'); return; }

      // Netlify Forms: Daten per fetch senden
      const formData = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(res => {
        if (res.ok) {
          formContent.style.display = 'none';
          formSuccess.classList.add('show');
        } else {
          showError(form, 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
        }
      })
      .catch(() => {
        showError(form, 'Verbindungsfehler. Bitte versuchen Sie es später erneut.');
      });
    });
  }
}

function showError(form, msg) {
  const existing = form.querySelector('.form-error');
  if (existing) existing.remove();
  const p = el('p', 'form-error', msg);
  form.appendChild(p);
  setTimeout(() => p.remove(), 4000);
}
