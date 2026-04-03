export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function paragraphGroup(items = []) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join('');
}

export function listItems(items = [], className = 'check-list') {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

export function pillRow(items = []) {
  return items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join('');
}

export function featureCards(items = []) {
  return items
    .map(
      (item) => `
        <a class="feature-card" href="${escapeHtml(item.href)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <span class="inline-link">Mehr erfahren →</span>
        </a>
      `
    )
    .join('');
}

export function flowCards(items = []) {
  return items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join('');
}

export function doctorCards(items = []) {
  return items
    .map(
      (doctor) => `
        <article class="doctor-card">
          <h3>${escapeHtml(doctor.name)}</h3>
          <p>${escapeHtml(doctor.role)}</p>
          <p class="meta">${escapeHtml(doctor.meta)}</p>
          ${listItems(doctor.hours)}
          <div class="tag-grid">
            ${doctor.specialties.map((entry) => `<span class="tag">${escapeHtml(entry)}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
}

export function serviceCards(items = []) {
  return items
    .map(
      (service) => `
        <article class="info-card">
          <h3>${escapeHtml(service.title)}</h3>
          ${listItems(service.items)}
        </article>
      `
    )
    .join('');
}

export function tagGroup(items = []) {
  return items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('');
}

export function photoCards(items = [], prefix = 'Foto') {
  return items
    .map(
      (item) => `
        <article class="photo-card">
          <div class="photo-placeholder">
            <div>
              <strong>${escapeHtml(prefix)}</strong>
              <span>${escapeHtml(item)}</span>
            </div>
          </div>
          <h3>${escapeHtml(item)}</h3>
        </article>
      `
    )
    .join('');
}

export function doctorTeamCards(items = []) {
  return items
    .map(
      (doctor) => `
        <article class="doctor-card doctor-team-card">
          <div class="photo-placeholder">
            <div>
              <strong>Foto</strong>
              <span>${escapeHtml(doctor.name)}</span>
            </div>
          </div>
          <div>
            <h3>${escapeHtml(doctor.name)}</h3>
            <p>${escapeHtml(doctor.role)}</p>
            <p class="meta">${escapeHtml(doctor.meta)}</p>
          </div>
        </article>
      `
    )
    .join('');
}

export function memberCards(items = []) {
  return items
    .map(
      (member) => `
        <article class="member-card">
          <div class="photo-placeholder">
            <div>
              <strong>Foto</strong>
              <span>${escapeHtml(member.name)}</span>
            </div>
          </div>
          <div>
            <h3>${escapeHtml(member.name)}</h3>
            <p>${escapeHtml(member.role)}</p>
            <p class="meta">${escapeHtml(member.since)}</p>
          </div>
        </article>
      `
    )
    .join('');
}

export function faqCards(items = []) {
  return items
    .map(
      (item) => `
        <details class="info-card">
          <summary><strong>${escapeHtml(item.question)}</strong></summary>
          <div class="rich-text" style="margin-top: 12px;">
            <p>${escapeHtml(item.answer)}</p>
          </div>
        </details>
      `
    )
    .join('');
}

export function pageNavCards(items = []) {
  return items
    .map(
      (item) => `
        <a class="page-nav-card" href="${escapeHtml(item.href)}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </a>
      `
    )
    .join('');
}
