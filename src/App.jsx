import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { label: "Start", href: "#top" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Praxis", href: "#praxis" },
  { label: "Kontakt", href: "#kontakt" },
];

const heroHighlights = [
  "Hausärztliche Gemeinschaftspraxis in Bremen-Oberneuland",
  "Allgemeinmedizin, Innere Medizin, Naturheilverfahren, Akupunktur und Chirotherapie",
  "Klare Informationen zu Sprechzeiten, Akutsprechstunde und Erreichbarkeit",
];

const doctors = [
  {
    name: "Dr. med. Gerald Kuboschek",
    role: "Facharzt für Allgemeinmedizin und Innere Medizin (hausärztliche Versorgung)",
    specialties: ["Chirotherapie", "Akupunktur (A-/B-Diplom)", "Naturheilverfahren", "Psychosomatische Grundversorgung"],
    hours: [
      "Mo–Fr: 08:00–12:00 Uhr (Annahmeschluss 10:30)",
      "Mo & Do: 15:00–18:00 Uhr",
      "Di: 15:00–17:00 Uhr (Annahmeschluss 17:00)",
      "Fr: 14:00–15:00 Uhr (Annahmeschluss 14:30) und nach Vereinbarung",
    ],
  },
  {
    name: "Dr. med. Kirsten Kensy",
    role: "Fachärztin für Allgemeinmedizin und Chirurgie",
    specialties: ["Naturheilverfahren", "Akupunktur (A-Diplom)", "Psychosomatische Grundversorgung"],
    hours: [
      "Mo–Fr: 08:00–12:00 Uhr (Annahmeschluss 10:30)",
      "Do: 15:00–18:00 Uhr (Annahmeschluss 17:00)",
      "Fr: 14:00–15:00 Uhr (Annahmeschluss 14:30) und nach Vereinbarung",
    ],
  },
];

const teamMembers = [
  "Maren Bundels – leitende Medizinische Fachangestellte",
  "Aysel Altay – leitende Medizinische Fachangestellte",
  "Klaudia Thiericke – Medizinische Fachangestellte",
  "Monika Lütje – Medizinische Fachangestellte",
  "Iris Birkhan – Medizinische Fachangestellte",
  "Vanessa Rebbin – Medizinische Fachangestellte",
  "Saghar Akhoundzadeh – Auszubildende zur Medizinischen Fachangestellten",
];

const serviceGroups = [
  {
    title: "Vorsorge & Prävention",
    icon: ShieldCheck,
    items: [
      "Check-up und Hautkrebsscreening",
      "Krebsvorsorge für Männer ab 45",
      "Jugendarbeitsschutzuntersuchung",
      "Impfungen und Reiseimpfberatung",
      "Elektronische Patientenakte (ePA)",
    ],
  },
  {
    title: "Diagnostik & hausärztliche Versorgung",
    icon: Stethoscope,
    items: [
      "Laboruntersuchungen, Abstriche und Schnelltests",
      "EKG, Belastungs-EKG und Langzeitblutdruckmessung",
      "Lungenfunktion und Durchblutungsmessungen",
      "Sonographie von Bauchorganen, Becken und Schilddrüse",
      "DMP für Diabetes, KHK, Asthma und COPD",
      "Prä- und postoperative Betreuung sowie Wundversorgung",
    ],
  },
  {
    title: "Naturheilkunde & Grüne Sprechstunde",
    icon: Leaf,
    items: [
      "Akupunktur",
      "Naturheilkundliche Beratung",
      "Raucherentwöhnung",
      "Ernährungsberatung und Gewichtsreduktion",
      "Schröpfen und Schröpfmassage",
      "Sauerstoffmehrschritt-Therapie und Aufbautherapien",
    ],
  },
  {
    title: "Bescheinigungen & Tauglichkeit",
    icon: BadgeCheck,
    items: [
      "Sporttauglichkeits-Untersuchungen",
      "Sportboot- und Führerschein-Untersuchungen",
      "LKW- und Reisebus-Führerschein-Untersuchungen",
      "Tauchtauglichkeits- und Fallschirmsprung-Untersuchungen",
      "Berufs- und Arbeits-Tauglichkeitsuntersuchungen",
    ],
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Telefonsprechstunde",
    text: "Dienstag bis Freitag jeweils 12:00–12:20 Uhr",
  },
  {
    icon: HeartPulse,
    title: "Akute Beschwerden",
    text: "Ohne Termin vormittags bis 10:30 Uhr, nachmittags bis 17:00 Uhr, freitags 14:00–14:30 Uhr",
  },
  {
    icon: Users,
    title: "Familiäre Betreuung",
    text: "Langjährige hausärztliche Begleitung für Kinder, Erwachsene und ältere Menschen",
  },
];

const faqItems = [
  {
    question: "Kann ich per E-Mail einen Termin vereinbaren?",
    answer:
      "Nein. Über die E-Mail-Adresse werden keine Terminanfragen, Rezeptwünsche oder medizinischen Beratungen bearbeitet. Nutzen Sie dafür bitte das Telefon.",
  },
  {
    question: "Was gilt bei Infektsymptomen?",
    answer:
      "Bei Atemwegs- oder Magen-Darm-Infekten ist eine FFP2-Maske erforderlich. Bei akutem COVID-Infekt soll die Praxis nicht betreten werden; die weitere Behandlung erfolgt zunächst telefonisch.",
  },
  {
    question: "Was passiert, wenn sehr viel Andrang ist?",
    answer:
      "Die Praxis behält sich vor, den Annahmeschluss bei unerwartet hohem Patientenaufkommen vorzuziehen. Notfälle und Patienten mit Termin werden priorisiert.",
  },
];

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export default function FamilienmedizinOberneulandRedesign() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50 text-slate-900">
      <div className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Familienmedizin Oberneuland</p>
              <p className="text-sm text-slate-500">Praxis Dr. Kuboschek & Dr. Kensy</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
            <a
              href="tel:+49421253949"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white md:hidden"
            aria-label="Navigation umschalten"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-100 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+49421253949"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        ) : null}
      </div>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),_transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
                  <BadgeCheck className="h-4 w-4" />
                  MFA für unsere Praxis ab sofort gesucht
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Moderne, vertrauensvolle Familienmedizin mit klarer Orientierung für Ihre Patientinnen und Patienten.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Dieses Redesign bringt die Praxis-Website auf ein zeitgemäßes Niveau: strukturierter, vertrauenswürdiger, mobil optimiert und deutlich leichter nutzbar – besonders für Öffnungszeiten, Kontakt, Akutfälle und Leistungen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {heroHighlights.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-0.5"
                  >
                    Kontakt & Anfahrt
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#sprechzeiten"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Öffnungszeiten ansehen
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-200 backdrop-blur sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Praxis kompakt</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">Schnell finden, was zählt</h2>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div key={fact.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-xl bg-white p-2 text-emerald-700 shadow-sm">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{fact.title}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{fact.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Wichtiger Hinweis</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Bei Atemwegs- oder Magen-Darm-Infekten ist das Betreten der Praxis nur mit FFP2-Maske gestattet. Bei akutem COVID-Infekt erfolgt die Behandlung zunächst telefonisch.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="sprechzeiten" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <SectionTitle
              eyebrow="Sprechzeiten"
              title="Öffnungszeiten klar und übersichtlich dargestellt"
              description="Statt langer Fließtexte werden Praxis- und Annahmezeiten in einer Struktur dargestellt, die auf dem Smartphone ebenso gut funktioniert wie auf dem Desktop."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {doctors.map((doctor, index) => (
              <FadeIn key={doctor.name} delay={index * 0.1}>
                <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Ärztin / Arzt</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">{doctor.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.role}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                      <Clock3 className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {doctor.hours.map((line) => (
                      <div key={line} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {doctor.specialties.map((item) => (
                      <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-50 shadow-2xl shadow-slate-200 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Akutsprechstunde</p>
                  <p className="mt-3 text-lg font-medium">Ohne Termin nur bis zu festen Annahmeschlusszeiten</p>
                </div>
                <div className="text-sm leading-7 text-slate-300">
                  Vormittags bis spätestens <strong className="text-white">10:30 Uhr</strong>, nachmittags bis spätestens <strong className="text-white">17:00 Uhr</strong>, freitags nachmittags <strong className="text-white">14:00–14:30 Uhr</strong>.
                </div>
                <div className="text-sm leading-7 text-slate-300">
                  Notfälle und Patientinnen und Patienten mit Termin werden priorisiert. Bei hohem Andrang kann der Annahmeschluss vorgezogen werden.
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="leistungen" className="bg-slate-950 py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionTitle
                eyebrow="Leistungen"
                title="Alle wichtigen Angebote auf einen Blick"
                description="Die Leistungen werden thematisch gebündelt, damit Patientinnen und Patienten schneller erkennen, ob die Praxis für ihr Anliegen die richtige Anlaufstelle ist."
              />
            </FadeIn>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <FadeIn key={group.title} delay={index * 0.08}>
                    <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="praxis" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                <SectionTitle
                  eyebrow="Die Grüne Sprechstunde"
                  title="Ganzheitlich denken, medizinisch fundiert handeln"
                  description="Die naturheilkundliche Privatsprechstunde erhält einen eigenen, seriösen Auftritt – ohne den hausärztlichen Kern der Website zu verdrängen."
                />

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Ernährungstherapie",
                    "Bewegungstherapie",
                    "Phytotherapie",
                    "Entspannungstechniken",
                    "Akupunktur",
                    "Lichttherapie",
                    "Schröpfen",
                    "Begleitung bei vegetarischer oder veganer Ernährung",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-medium text-emerald-950">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
                  Die „Grüne Sprechstunde“ ist als Privatsprechstunde ausgewiesen; Selbstzahlerleistungen werden nach GOÄ abgerechnet.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                  <SectionTitle
                    eyebrow="Unsere Praxis"
                    title="Vertrauen durch Klarheit, Nähe und Qualität"
                    description="Die bestehende Praxisbeschreibung wird in eine moderne Erzählstruktur übersetzt: langjährige Erfahrung, familiäre Begleitung und ein gut eingespieltes Team."
                  />

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { value: "seit 1998", label: "Praxisgeschichte" },
                      { value: "2 Ärzt:innen", label: "medizinische Leitung" },
                      { value: "7+ Teammitglieder", label: "MFA & Ausbildung" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                        <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                        <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Die Praxis positioniert sich als moderne Familienmedizin für verschiedene Lebensphasen – von Kindern über Erwachsene bis zu älteren Patientinnen und Patienten.
                    </p>
                    <p>
                      Diagnostik, Labor, Vorsorge, DMP, Ultraschall und naturheilkundliche Angebote sind logisch unter einer klaren Informationsarchitektur gebündelt.
                    </p>
                    <p>
                      Für Vertrauen sorgen eine reduzierte Gestaltung, deutlich sichtbare Kontaktwege, gut strukturierte Hinweise für Akutfälle und eine barrierearme mobile Nutzung.
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-emerald-950 p-8 text-white shadow-2xl shadow-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">Redesign-Ziele</p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                    {[
                      "Mehr Vertrauen durch ruhige, hochwertige Visual Language",
                      "Bessere mobile Bedienbarkeit für ältere Zielgruppen und Angehörige",
                      "Schneller Zugriff auf Öffnungszeiten, Kontakt und Hinweise bei Infekten",
                      "Klare Trennung zwischen hausärztlichen Leistungen und Privatsprechstunde",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="team" className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionTitle
                eyebrow="Team"
                title="Das Praxisteam persönlich und professionell präsentiert"
                description="Die Teamseite wird von einer Textwüste zu einer klaren, freundlichen Übersicht mit Rollen, Erfahrung und spürbarer Menschlichkeit."
              />
            </FadeIn>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <FadeIn>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Medizinische Leitung</p>
                  <div className="mt-6 space-y-6">
                    {doctors.map((doctor) => (
                      <div key={doctor.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                        <h3 className="text-lg font-semibold text-slate-950">{doctor.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{doctor.role}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {doctor.specialties.map((item) => (
                            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Praxis-Team</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {teamMembers.map((member) => (
                      <div key={member} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                            <Users className="h-4 w-4" />
                          </div>
                          <p className="text-sm leading-6 text-slate-700">{member}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
                <SectionTitle
                  eyebrow="Häufige Fragen"
                  title="Wichtige Hinweise verständlich statt versteckt"
                  description="Praxisregeln, Kontaktwege und Verhalten bei Infekten sollten nicht in Fließtexten untergehen, sondern unmittelbar beantwortet werden."
                />

                <div className="mt-8 space-y-3">
                  {faqItems.map((item, index) => {
                    const active = activeFaq === index;
                    return (
                      <button
                        key={item.question}
                        type="button"
                        onClick={() => setActiveFaq(index)}
                        className={`w-full rounded-2xl border p-5 text-left transition ${
                          active
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span className="font-semibold text-slate-900">{item.question}</span>
                          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500">0{index + 1}</span>
                        </div>
                        {active ? <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div id="kontakt" className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Kontakt & Anfahrt</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ein zentraler Kontaktbereich mit allen wichtigen Informationen</h2>
                <div className="mt-8 space-y-4">
                  <a href="tel:+49421253949" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                    <div className="rounded-2xl bg-white/10 p-3 text-emerald-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Telefon</p>
                      <p className="mt-1 text-lg font-semibold">0421 25 39 49</p>
                    </div>
                  </a>

                  <a href="mailto:kuketeam98@gmail.com" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                    <div className="rounded-2xl bg-white/10 p-3 text-emerald-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">E-Mail</p>
                      <p className="mt-1 text-lg font-semibold break-all">kuketeam98@gmail.com</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">Keine medizinische Beratung, Terminanfragen oder Rezeptwünsche per E-Mail.</p>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Wilhelm-R%C3%B6ntgen-Stra%C3%9Fe+6a,+28357+Bremen"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <div className="rounded-2xl bg-white/10 p-3 text-emerald-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Adresse</p>
                      <p className="mt-1 text-lg font-semibold">Wilhelm-Röntgen-Straße 6a, 28357 Bremen</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">Karte in Google Maps öffnen</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-sm leading-7 text-emerald-50">
                  Außerhalb der Praxiszeiten informiert der Anrufbeantworter über die zuständigen Rufnummern. In lebensbedrohlichen Notfällen gilt immer: <strong>112</strong>.
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Familienmedizin Oberneuland</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Praxiswebsite mit deutlich stärkerer digitaler Vertrauenswirkung</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Diese Umsetzung fokussiert auf bessere Lesbarkeit, mobile Nutzbarkeit, klarere Calls-to-Action, eine seriösere visuelle Sprache und eine saubere Inhaltsarchitektur für Patientinnen und Patienten.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Technischer Hinweis</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Die Seite ist als moderne React-/Next.js-Basis umsetzbar und kann in WordPress, Headless CMS oder statisch integriert werden.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Empfohlene nächste Schritte</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Echte Praxisfotos, Teamfotos, DSGVO-/Impressumsseiten, Cookie-Konzept und ein barrierearmes CMS-Setup ergänzen.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© {year} Familienmedizin Oberneuland – Redesign-Konzept & Frontend-Implementierung</p>
            <div className="flex flex-wrap gap-4">
              <a href="#sprechzeiten" className="hover:text-slate-900">Sprechzeiten</a>
              <a href="#leistungen" className="hover:text-slate-900">Leistungen</a>
              <a href="#kontakt" className="hover:text-slate-900">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
