import { siteData } from './data.js';
import { paragraphGroup, listItems } from './components.js';
import { initMenu, initPageTransitions, renderPageNav, renderShell, setPageState } from './shell.js';

setPageState('impfungen');
renderShell('impfungen.html');

document.getElementById('vaccination-intro').innerHTML = paragraphGroup(siteData.vaccinations.intro);
document.getElementById('vaccination-items').innerHTML = listItems(siteData.vaccinations.items);
document.getElementById('vaccination-notes').innerHTML = paragraphGroup(siteData.vaccinations.notes);
document.getElementById('vaccination-extra').innerHTML = `<p>Falls Sie zu COVID-19-Impfungen einen Termin erhalten haben, bittet die Praxis darum, diesen auch wahrzunehmen. Wenn Sie anderweitig einen Termin erhalten haben, sollte die Warteliste entsprechend aktualisiert werden.</p><p>Für Menschen ohne Smartphone oder ohne sichere digitale Nutzung können Rezepte und Informationen auch weiterhin als Ausdruck beziehungsweise QR-Code bereitgestellt werden.</p>`;

renderPageNav('impfungen-page-nav', [
  { title: 'Leistungen', text: 'Weitere medizinische Angebote, Vorsorge und Diagnostik im Überblick.', href: 'leistungen.html' },
  { title: 'Kontakt', text: 'Telefonnummer, Adresse und Hinweise zur Terminaufnahme.', href: 'kontakt.html' },
  { title: 'Zur Startseite', text: 'Direkter Überblick über Zeiten, Akuthinweise und Schnellzugriffe.', href: 'index.html' }
]);

initMenu();
initPageTransitions();
