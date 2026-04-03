import { siteData } from './data.js';
import { doctorTeamCards, memberCards, paragraphGroup } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('team');
renderShell('team.html');

document.getElementById('team-intro').innerHTML = paragraphGroup(siteData.team.intro);
document.getElementById('doctor-team-grid').innerHTML = doctorTeamCards(siteData.team.doctors);
document.getElementById('team-members-grid').innerHTML = memberCards(siteData.team.members);
document.getElementById('mfa-job').innerHTML = paragraphGroup(siteData.mfa);

renderPageNav('team-page-nav', [
  { title: 'Zur Startseite', text: 'Die wichtigsten Hinweise und Schnellzugriffe direkt auf der Startseite.', href: 'index.html' },
  { title: 'Unsere Praxis', text: 'Praxisphilosophie, Räume und Qualitätsmanagement ansehen.', href: 'praxis.html' },
  { title: 'Kontakt', text: 'Adresse, Anruf, Google Maps und Impressum.', href: 'kontakt.html' }
]);

initMenu();
initPageTransitions();
