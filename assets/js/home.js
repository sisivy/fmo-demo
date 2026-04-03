import { siteData } from './data.js';
import { featureCards, flowCards, paragraphGroup, serviceCards, pillRow, doctorTeamCards, faqCards } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('home');
renderShell('index.html');

document.getElementById('hero-pills').innerHTML = pillRow(siteData.heroPills);
document.getElementById('shortcut-cards').innerHTML = featureCards(siteData.shortcuts);
document.getElementById('practice-overview').innerHTML = siteData.overview.map((item) => `<li>${item}</li>`).join('');
document.getElementById('flow-grid').innerHTML = flowCards(siteData.flow.slice(0, 4));
document.getElementById('home-services').innerHTML = serviceCards(siteData.services.slice(0, 3));
document.getElementById('home-practice').innerHTML = paragraphGroup(siteData.practice.paragraphs.slice(0, 2));
document.getElementById('home-team').innerHTML = doctorTeamCards(siteData.team.doctors);
document.getElementById('home-faq').innerHTML = faqCards(siteData.faqs.slice(0, 3));

document.getElementById('mfa-text').innerHTML = paragraphGroup(siteData.mfa);
document.getElementById('home-map-link').href = siteData.site.mapsUrl;
document.getElementById('home-map-link').textContent = siteData.site.address;

renderPageNav('home-page-nav', [
  { title: 'Leistungen im Überblick', text: 'Vorsorge, Diagnostik, Naturheilkunde, Tauglichkeit und Selbstzahlerleistungen.', href: 'leistungen.html' },
  { title: 'Unsere Praxis', text: 'Praxisphilosophie, Räume, Qualitätsmanagement und Grüne Sprechstunde.', href: 'praxis.html' },
  { title: 'Team & Kontakt', text: 'Ärztliche Leitung, Team, Anfahrt, Impressum und organisatorische Hinweise.', href: 'kontakt.html' }
]);

initMenu();
initPageTransitions();
