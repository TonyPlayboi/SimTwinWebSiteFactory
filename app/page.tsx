import TrybySection from "@/components/TrybySection";
import ContactForm from "@/components/ContactForm";
import RaportSlider from "@/components/RaportSlider";

const A = "#F2B800";

const HARDWARE = [
  {
    tag: "Czujniki indukcyjne",
    title: "Sensory\ni PLC",
    desc: "Czujniki indukcyjne, enkodery i sterowniki PLC tworzą cyfrowy obraz pracy każdej maszyny — w czasie rzeczywistym.",
    imgs: ["/Materials/Hardware/Omron01.webp", "/Materials/Hardware/Induction02.webp"],
  },
  {
    tag: "Computer Vision",
    title: "Kamery\nAI",
    desc: "Przemysłowe kamery ze zintegrowaną analizą obrazu — detekcja produktów, kontrola jakości, analiza ruchu.",
    imgs: ["/Materials/Hardware/Camera.webp"],
  },
  {
    tag: "HMI",
    title: "Tablety\ni Interfejsy",
    desc: "Dotykowe panele operatora i tablety z dostępem do danych produkcyjnych i raportów AI — gdziekolwiek jesteś.",
    imgs: ["/Materials/Hardware/Tablet.webp"],
  },
];

const RAPORT_BULLETS = [
  {
    head: "Historia produkcji",
    body: "Analiza danych dla dowolnego okresu — zmiany, tygodnie, miesiące.",
  },
  {
    head: "Analiza zespołu",
    body: "Wydajność, czas pracy i kluczowe wskaźniki każdego operatora.",
  },
  {
    head: "AI generuje raporty",
    body: "System analizuje dane i wskazuje zależności, trendy i anomalie.",
  },
  {
    head: "Wczesne wykrywanie odchyleń",
    body: "Identyfikacja ryzyka przestojów zanim staną się awarią.",
  },
];

const TEAM = [
  { name: "Antoni Padalak", role: "CEO / Founder", img: "/Materials/Teamwork/Antek.webp" },
  { name: "Patryk", role: "Head of Onsite Operations", img: "/Materials/Teamwork/Patryk.webp" },
  { name: "Czarek", role: "Head of Software", img: "/Materials/Teamwork/Czarek.webp" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-sans), Arial, sans-serif" }}>

      {/* ──────────────────── NAV ──────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
          <a href="#hero" className="text-sm font-black tracking-widest uppercase">
            <span style={{ color: A }}>Sim</span>Twin
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Hardware", "#hardware"],
              ["Stany", "#tryby"],
              ["Raporty", "#raport"],
              ["Zespół", "#zespol"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-[0.12em] text-white/50 hover:text-white uppercase transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            className="text-xs tracking-[0.15em] text-black font-black uppercase px-5 py-2 transition-opacity hover:opacity-90"
            style={{ background: A }}
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* ──────────────────── HERO ──────────────────── */}
      <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
        {/* BG image */}
        <img
          src="/Materials/Hero/AbedikDT.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end px-5 md:px-10 pb-16 max-w-7xl mx-auto">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 animate-pulse rounded-full" style={{ background: A }} />
            <span className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: A }}>
              Platforma Digital Twin dla Przemysłu
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.88] mb-6">
            Jedna
            <br />
            Platforma
            <br />
            <span style={{ color: A }}>Cała Fabryka</span>
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-sm max-w-md leading-relaxed mb-10">
            Cyfrowy obraz Twojej produkcji. Tworzymy cyfrowe odwzorowanie maszyn
            w oparciu o dane z czujników i systemów sterowania.
            <br />
            <span className="text-white/30">
              On-premise · Bezpieczna architektura · Dane pod pełną kontrolą
            </span>
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              ["LIVE", "Aktualny stan maszyn"],
              ["INTEGRACJA", "Wszystko w jednym miejscu"],
              ["AI", "Analiza i raporty"],
              ["SECURITY", "Dane pod kontrolą"],
            ].map(([title, sub]) => (
              <div key={title} className="flex flex-col gap-0.5">
                <span className="text-xs font-black tracking-[0.18em] uppercase" style={{ color: A }}>
                  {title}
                </span>
                <span className="text-[10px] tracking-[0.1em] text-white/30 uppercase">{sub}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <a
              href="#kontakt"
              className="px-8 py-3.5 text-black font-black text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              style={{ background: A }}
            >
              Skontaktuj się z nami
            </a>
            <a
              href="#hardware"
              className="text-xs tracking-[0.12em] text-white/40 hover:text-white uppercase transition-colors flex items-center gap-2"
            >
              Zobacz platformę <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────── HARDWARE ──────────────────── */}
      <section id="hardware" className="py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: A }}>
                Moduł 00
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                Infrastruktura
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
              Platforma
              <br />
              <span style={{ color: A }}>Sprzętowa</span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg leading-relaxed">
              Fizyczna warstwa SimTwin — od czujników przez kamery AI po
              interfejsy operatora. Integrujemy to, co już masz, i dokładamy to, czego brakuje.
            </p>
          </div>

          {/* Context photo */}
          <div className="relative w-full h-48 md:h-64 overflow-hidden mb-12 md:mb-16">
            <img
              src="/Materials/Hardware/Induction02.webp"
              alt="Maszyna z czujnikami SimTwin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 via-transparent to-[#090909]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 to-transparent" />
            <div className="absolute bottom-4 left-5 md:left-8">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                Fizyczna instalacja · Abedik Drukarnia
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6">
            {HARDWARE.map((h) => (
              <div key={h.tag} className="bg-[#090909] p-6 md:p-8 flex flex-col gap-5">
                <div>
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase font-bold px-2 py-0.5"
                    style={{ color: A, background: `${A}18` }}
                  >
                    {h.tag}
                  </span>
                </div>
                {/* Images */}
                <div className="flex gap-1.5 h-52">
                  {h.imgs.map((src, i) => (
                    <div
                      key={i}
                      className="flex-1 overflow-hidden bg-white/3"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-tight whitespace-pre-line">
                  {h.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── TRYBY ──────────────────── */}
      <TrybySection />

      {/* ──────────────────── RAPORT + AI ──────────────────── */}
      <section id="raport" className="py-20 md:py-32 px-5 md:px-10 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: A }}>
                Moduł 02
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                Analiza AI
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
              Raporty
              <br />
              <span style={{ color: A }}>i Analiza AI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: bullets */}
            <div>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-md">
                Zbieramy dane, prowadzimy live monitoring, a następnie AI
                generuje raporty — wskazując zależności i ryzyka zanim staną
                się problemem.
              </p>
              <ul className="space-y-6">
                {RAPORT_BULLETS.map((b) => (
                  <li key={b.head} className="flex gap-4">
                    <span
                      className="w-1 flex-shrink-0 mt-1 self-stretch"
                      style={{ background: A }}
                    />
                    <div>
                      <div className="text-sm font-black uppercase tracking-tight mb-1">
                        {b.head}
                      </div>
                      <div className="text-white/40 text-sm leading-relaxed">{b.body}</div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* Right: sliding report screenshots */}
            <div className="relative">
              <RaportSlider />
              <div className="absolute -bottom-px left-0 right-0 h-20 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── TEAM ──────────────────── */}
      <section id="zespol" className="py-20 md:py-32 px-5 md:px-10 relative overflow-hidden">
        {/* BG office photo */}
        <img
          src="/Materials/Teamwork/Office02.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#090909]/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: A }}>
                Zespół
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                Made in Poland · 2020
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Ludzie za
              <br />
              <span style={{ color: A }}>SimTwin</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative overflow-hidden aspect-[3/4]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                {/* name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-sm font-black uppercase tracking-tight mb-0.5">
                    {member.name}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.18em] uppercase font-bold"
                    style={{ color: A }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CONTACT ──────────────────── */}
      <section id="kontakt" className="py-20 md:py-32 px-5 md:px-10 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs tracking-[0.25em] uppercase font-bold" style={{ color: A }}>
                  Kontakt
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">
                Skontaktuj
                <br />
                <span style={{ color: A }}>się z nami</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
                Odkryj potencjał swojej produkcji. Pokażemy Ci co możemy zrobić
                z danymi Twoich maszyn — bezpłatna konsultacja.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center border"
                    style={{ borderColor: `${A}40` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 2h10v10H2V2zm0 3h10M7 2v10"
                        stroke={A}
                        strokeWidth="1.2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-0.5">
                      Telefon
                    </div>
                    <a
                      href="tel:+48603518848"
                      className="text-sm font-bold text-white/80 hover:text-white transition-colors"
                    >
                      +48 603 518 848
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center border"
                    style={{ borderColor: `${A}40` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="3" width="12" height="8" stroke={A} strokeWidth="1.2" strokeLinecap="square" />
                      <path d="M1 3l6 5 6-5" stroke={A} strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:antoni@simtwin.tech"
                      className="text-sm font-bold text-white/80 hover:text-white transition-colors"
                    >
                      antoni@simtwin.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center border"
                    style={{ borderColor: `${A}40` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5" stroke={A} strokeWidth="1.2" />
                      <path d="M7 2v5l3 2" stroke={A} strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-0.5">
                      Web
                    </div>
                    <span className="text-sm font-bold text-white/80">simtwin.tech</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── FOOTER ──────────────────── */}
      <footer className="py-8 px-5 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 text-xs tracking-[0.08em]">
          <span className="font-black text-base">
            <span style={{ color: A }}>SIM</span>TWIN
          </span>
          <span>© 2025 SimTwin. Wszelkie prawa zastrzeżone.</span>
          <div className="flex items-center gap-5">
            <a href="tel:+48603518848" className="hover:text-white/60 transition-colors">
              +48 603 518 848
            </a>
            <a
              href="mailto:antoni@simtwin.tech"
              className="hover:text-white/60 transition-colors"
            >
              antoni@simtwin.tech
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
