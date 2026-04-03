import { siteData } from './data.js';
import { pageNavCards } from './components.js';

const nav = [
  { href: 'index.html', label: 'Start', short: 'Start' },
  { href: 'leistungen.html', label: 'Leistungen', short: 'Leistungen' },
  { href: 'praxis.html', label: 'Praxis', short: 'Praxis' },
  { href: 'team.html', label: 'Team', short: 'Team' },
  { href: 'impfungen.html', label: 'Impfungen', short: 'Impfungen' },
  { href: 'kontakt.html', label: 'Kontakt', short: 'Kontakt' }
];

export function setPageState(page) {
  document.documentElement.lang = 'de';
  document.body.dataset.page = page;
  document.body.dataset.pageLoaded = 'false';
}

export function renderShell(currentPage) {
  const headerTarget = document.querySelector('[data-site-header]');
  const footerTarget = document.querySelector('[data-site-footer]');
  const quickBarTarget = document.querySelector('[data-mobile-quickbar]');
  const year = new Date().getFullYear();

  const navLinks = nav
    .map((item) => {
      const current = item.href === currentPage ? 'is-current' : '';
      return `<a class="${current}" href="${item.href}">${item.label}</a>`;
    })
    .join('');

  if (headerTarget) {
    headerTarget.innerHTML = `
      <div class="utility-bar">
        <div class="container utility-bar__inner">
          <p>Praxis Kuboschek · Kensy · Bremen-Oberneuland</p>
          <div class="utility-bar__links">
            <a href="tel:${siteData.site.phoneHref}">${siteData.site.phoneDisplay}</a>
            <a href="kontakt.html">Kontakt</a>
          </div>
        </div>
      </div>
      <div class="container header-main">
        <a class="brand" href="index.html" aria-label="${siteData.site.name} Startseite">
          <span class="brand__mark">FM</span>
          <span class="brand__text">
            <strong>${siteData.site.name}</strong>
            <small>${siteData.site.subtitle}</small>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="Hauptnavigation">
          ${navLinks}
          <a class="button button--primary button--small" href="tel:${siteData.site.phoneHref}">Anrufen</a>
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Menü öffnen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Mobile Navigation" hidden>
        <div class="container mobile-nav__inner">
          ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
          <a class="button button--primary" href="tel:${siteData.site.phoneHref}">Jetzt anrufen</a>
        </div>
      </nav>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <div class="container footer__grid">
        <div class="footer__box">
          <h3>${siteData.site.name}</h3>
          <p>Hausärztliche Gemeinschaftspraxis für Allgemeinmedizin, Innere Medizin, Naturheilkunde, Akupunktur und Chirotherapie in Bremen-Oberneuland.</p>
        </div>
        <div class="footer__box">
          <h3>Kontakt</h3>
          <ul>
            <li><a href="tel:${siteData.site.phoneHref}">${siteData.site.phoneDisplay}</a></li>
            <li><a href="mailto:${siteData.site.email}">${siteData.site.email}</a></li>
            <li><a href="${siteData.site.mapsUrl}" target="_blank" rel="noreferrer">${siteData.site.address}</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer__meta">
        <p>© ${year} ${siteData.site.name}</p>
        <nav aria-label="Footer Navigation">
          ${nav.map((item) => `<a href="${item.href}">${item.short}</a>`).join('')}
        </nav>
      </div>
    `;
  }

  if (quickBarTarget) {
    quickBarTarget.innerHTML = `
      <div class="mobile-quickbar__inner">
        <a href="tel:${siteData.site.phoneHref}"><span>☎</span><span>Anrufen</span></a>
        <a href="kontakt.html"><span>📍</span><span>Kontakt</span></a>
        <a href="leistungen.html"><span>＋</span><span>Leistungen</span></a>
      </div>
    `;
  }
}

export function renderPageNav(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = pageNavCards(items);
}

export function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.classList.remove('nav-open');
  };

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    document.body.classList.add('nav-open');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (target) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (menu.hidden) return;
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });
}

export function initPageTransitions() {
  const overlay = document.querySelector('.page-overlay');
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('is-transitioning');
    document.body.dataset.pageLoaded = 'true';
  });

  requestAnimationFrame(() => {
    document.body.dataset.pageLoaded = 'true';
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;

    event.preventDefault();
    document.body.classList.add('is-transitioning');
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 220);
  });
}
