import { siteData } from './data.js';
import { paragraphGroup, doctorCards, faqCards } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('kontakt');
renderShell('kontakt.html');

document.getElementById('contact-phone').textContent = siteData.site.phoneDisplay;
document.getElementById('contact-phone').href = `tel:${siteData.site.phoneHref}`;
document.getElementById('contact-email').textContent = siteData.site.email;
document.getElementById('contact-email').href = `mailto:${siteData.site.email}`;
document.getElementById('contact-address').textContent = siteData.site.address;
document.getElementById('contact-address').href = siteData.site.mapsUrl;
document.getElementById('contact-fax').textContent = siteData.site.fax;
document.getElementById('hours-doctors').innerHTML = doctorCards(siteData.doctors);
document.getElementById('faq-grid').innerHTML = faqCards(siteData.faqs);
document.getElementById('imprint-text').innerHTML = paragraphGroup(siteData.imprint);

document.getElementById('orga-list').innerHTML = `<li>Montag bis Freitag 08:00–12:00 Uhr</li><li>Telefonsprechstunde Dienstag bis Freitag 12:00–12:20 Uhr</li><li>Akut ohne Termin vormittags bis 10:30 Uhr, nachmittags bis 17:00 Uhr, freitags 14:00–14:30 Uhr</li><li>Außerhalb der Praxiszeiten informiert der Anrufbeantworter über die zuständigen Rufnummern</li>`;

document.getElementById('about-text').innerHTML = `<p>Die Praxis versteht Familienmedizin im wörtlichen Sinn: Menschen über viele Jahre zu begleiten, familiäre und biografische Zusammenhänge mitzudenken und Medizin nicht nur auf einzelne Symptome zu reduzieren.</p><p>Gerade diese Verbindung aus Menschlichkeit, Kontinuität und medizinischer Breite prägt die Praxisarbeit und den Anspruch an einen vertrauensvollen Umgang mit Patientinnen und Patienten.</p>`;

renderPageNav('kontakt-page-nav', [
  { title: 'Praxiszeiten', text: 'Alle Öffnungszeiten und Annahmeschlusszeiten gesammelt ansehen.', href: 'kontakt.html#zeiten' },
  { title: 'Team', text: 'Ärztliche Leitung, MFA-Team und aktuelle Stellenanzeige.', href: 'team.html' },
  { title: 'Leistungen', text: 'Vorsorge, Diagnostik, Impfungen und Grüne Sprechstunde.', href: 'leistungen.html' }
]);

initMenu();
initPageTransitions();
