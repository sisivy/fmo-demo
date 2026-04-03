window.components = {
  pill(text) {
    return `<span class="pill">${text}</span>`;
  },

  quickFact(item) {
    return `
      <article class="fact-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `;
  },

  shortcut(item) {
    return `
      <a class="shortcut-card" href="${item.href}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span>Direkt öffnen</span>
      </a>
    `;
  },

  doctorCard(doctor) {
    return `
      <article class="card card--padded doctor-card">
        <p class="eyebrow">Ärztliche Sprechzeit</p>
        <h3>${doctor.name}</h3>
        <p class="muted">${doctor.role}</p>
        <p class="doctor-card__meta">${doctor.experience}</p>
        <ul class="check-list">
          ${doctor.hours.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${doctor.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `;
  },

  infoCard(item) {
    return `
      <article class="card card--padded info-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `;
  },

  serviceCard(group) {
    return `
      <article class="service-card">
        <h3>${group.title}</h3>
        <ul class="check-list check-list--light">
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `;
  },

  photoPlaceholder(label, compact = false) {
    return `
      <div class="photo-placeholder ${compact ? "photo-placeholder--compact" : ""}">
        <div class="photo-placeholder__frame">
          <span>Foto-Platzhalter</span>
          <small>${label}</small>
        </div>
      </div>
    `;
  },

  doctorTeamCard(item) {
    return `
      <article class="card card--padded team-lead-card">
        <div class="team-lead-layout">
          ${window.components.photoPlaceholder(`Teamfoto ${item.name}`, true)}
          <div>
            <p class="eyebrow">Ärztliche Leitung</p>
            <h3>${item.name}</h3>
            <p class="muted">${item.role}</p>
            <p class="doctor-card__meta">${item.meta}</p>
          </div>
        </div>
      </article>
    `;
  },

  teamMemberCard(item) {
    return `
      <article class="team-member-card">
        ${window.components.photoPlaceholder(`Foto ${item.name}`, true)}
        <div>
          <h3>${item.name}</h3>
          <p>${item.role}</p>
          <small>${item.since}</small>
        </div>
      </article>
    `;
  },

  faq(item, index) {
    return `
      <details class="faq-item" ${index === 0 ? "open" : ""}>
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>
    `;
  },

  paragraph(text) {
    return `<p>${text}</p>`;
  },

  list(items, light = false) {
    return `<ul class="check-list ${light ? "check-list--light" : ""}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
};
