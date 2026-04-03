import { siteData } from './data.js';
import { paragraphGroup, serviceCards, tagGroup, listItems } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('leistungen');
renderShell('leistungen.html');

document.getElementById('services-grid').innerHTML = serviceCards(siteData.services);
document.getElementById('epa-text').innerHTML = `<p>Die Krankenversicherungen stellen ihren Patientinnen und Patienten kostenlos eine App für Smartphone oder Tablet zur Verfügung. In dieser App lassen sich frei wählbar wichtige medizinische und persönliche Daten abspeichern, die im Notfall durch autorisierte Fachkräfte ausgelesen werden können.</p><p>Da den Krankenkassen nicht alle medizinischen Daten vorliegen, kann die Praxis seit 11/2021 die App technisch mit den von Ihnen gewünschten Informationen befüllen. Dieser Prozess ist für Sie kostenlos. Bei Fragen sprechen Sie das Praxisteam gern an.</p>`;
document.getElementById('green-paragraphs').innerHTML = paragraphGroup(siteData.greenConsultation.paragraphs);
document.getElementById('green-tags').innerHTML = tagGroup(siteData.greenConsultation.therapies);
document.getElementById('green-indications').innerHTML = listItems(siteData.greenConsultation.indications);

renderPageNav('leistungen-page-nav', [
  { title: 'Impfungen', text: 'Impfangebote, Reiseimpfberatung und organisatorische Hinweise.', href: 'impfungen.html' },
  { title: 'Praxis & Philosophie', text: 'Mehr zur Praxis, zu Räumen, Qualitätsmanagement und Haltung.', href: 'praxis.html' },
  { title: 'Kontakt aufnehmen', text: 'Praxiszeiten, Anfahrt und direkte Kontaktmöglichkeiten.', href: 'kontakt.html' }
]);

initMenu();
initPageTransitions();
