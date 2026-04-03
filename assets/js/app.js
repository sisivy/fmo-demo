(function () {
  const { siteData, components } = window;

  function renderInto(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  }

  function renderTextBlock(selector, paragraphs, light = false) {
    renderInto(selector, paragraphs.map((text) => components.paragraph(text)).join(""));
    if (light) {
      const element = document.querySelector(selector);
      if (element) element.classList.add("rich-text--light");
    }
  }

  renderInto("#hero-pills", siteData.heroPills.map(components.pill).join(""));
  renderInto("#quick-facts", siteData.quickFacts.map(components.quickFact).join(""));
  renderInto("#shortcut-cards", siteData.shortcuts.map(components.shortcut).join(""));
  renderInto("#practice-overview", siteData.practiceOverview.map((item) => `<li>${item}</li>`).join(""));
  renderInto("#doctors-grid", siteData.doctors.map(components.doctorCard).join(""));
  renderInto("#flow-grid", siteData.practiceFlows.map(components.infoCard).join(""));
  renderInto("#services-grid", siteData.services.map(components.serviceCard).join(""));
  renderTextBlock("#green-consultation-text", siteData.greenConsultation.paragraphs);
  renderInto("#green-tags", siteData.greenConsultation.tags.map((tag) => `<span class="tag tag--soft">${tag}</span>`).join(""));
  renderTextBlock("#practice-text", siteData.practiceText);
  renderInto("#rooms-grid", siteData.rooms.map((item) => components.photoPlaceholder(item)).join(""));
  renderTextBlock("#vaccination-intro", siteData.vaccinationIntro);
  renderInto("#vaccinations-list", siteData.vaccinations.map((item) => `<li>${item}</li>`).join(""));
  renderTextBlock("#vaccination-notes", siteData.vaccinationNotes);
  renderInto("#doctor-team-grid", siteData.teamDoctors.map(components.doctorTeamCard).join(""));
  renderInto("#team-grid", siteData.teamMembers.map(components.teamMemberCard).join(""));
  renderInto("#faq-list", siteData.faqs.map(components.faq).join(""));
  renderTextBlock("#mfa-text", siteData.mfaText);
  renderTextBlock("#about-text", siteData.aboutText, true);
  renderTextBlock("#imprint-text", siteData.imprintText, true);

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  function closeMenu() {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
    document.body.classList.add("menu-open");
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) closeMenu();
    });
  }
})();
