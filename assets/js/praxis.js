import { siteData } from './data.js';
import { paragraphGroup, photoCards, tagGroup } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('praxis');
renderShell('praxis.html');

document.getElementById('practice-paragraphs').innerHTML = paragraphGroup(siteData.practice.paragraphs);
document.getElementById('philosophy-paragraphs').innerHTML = paragraphGroup(siteData.practice.philosophy);
document.getElementById('room-cards').innerHTML = photoCards(siteData.practice.rooms, 'Foto');
document.getElementById('green-summary-tags').innerHTML = tagGroup(siteData.greenConsultation.therapies.slice(0, 8));

document.getElementById('quality-text').innerHTML = `<p>Die Praxis wurde nach dem QEP-Modell bereits mehrfach erfolgreich zertifiziert und erzielte zuletzt 100 von 100 möglichen Punkten. Auch wenn das offizielle Zertifizierungsmodell inzwischen eingestellt wurde, wird das interne Qualitätsmanagement weiterhin fortgeführt.</p><p>Dieses Qualitätsverständnis zeigt sich im Praxisalltag durch strukturierte Abläufe, moderne Diagnostik und einen hohen Anspruch an medizinische wie organisatorische Verlässlichkeit.</p>`;

renderPageNav('praxis-page-nav', [
  { title: 'Team kennenlernen', text: 'Ärztliche Leitung, Medizinische Fachangestellte und Foto-Platzhalter.', href: 'team.html' },
  { title: 'Leistungen ansehen', text: 'Hausärztliche Versorgung, Diagnostik und Grüne Sprechstunde.', href: 'leistungen.html' },
  { title: 'Kontakt & Zeiten', text: 'Adresse, Google Maps, Impressum und Praxiszeiten.', href: 'kontakt.html' }
]);

initMenu();
initPageTransitions();
