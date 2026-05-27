import ProductCards from "@/components/ProductCards";

const ACCENT = "#F2B800";

const STATS = [
  { value: "1",         label: "Facility Live"  },
  { value: "4+",        label: "Data Protocols" },
  { value: "Real-time", label: "Processing"     },
  { value: "AI-native", label: "Architecture"   },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white font-sans">

      {/* ─── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="relative max-w-[1600px] mx-auto px-8 h-14 flex items-center justify-between">

          <span className="text-sm font-black tracking-widest uppercase">
            <span style={{ color: ACCENT }}>Sim</span>Twin
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Products", href: "#products" },
              { label: "Pilot",    href: "#pilot"    },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-[0.1em] text-white/60 hover:text-white uppercase transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@simtwin.tech"
            className="text-xs tracking-[0.1em] text-white/60 hover:text-white uppercase transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">

        <video
          src="/videos/SimTwinWebsiteHero02.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-10 pb-14 max-w-[1600px] mx-auto">
          <div className="anim anim-d1 flex items-center gap-4 mb-6">
            <span className="w-1.5 h-1.5 animate-pulse" style={{ background: ACCENT }} />
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: ACCENT }}>
              Pilot Deployed
            </span>
            <span className="text-white/25">·</span>
            <span className="text-xs tracking-[0.15em] text-white/40 uppercase">
              Book Printing Facility
            </span>
          </div>

          <h1 className="anim anim-d2 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] mb-6 max-w-3xl">
            One Platform.
            <br />
            Every Machine.
            <br />
            <span style={{ color: ACCENT }}>Zero Silos.</span>
          </h1>

          <p className="anim anim-d3 text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
            SimTwin digitizes your factory floor in real time — sensor data,
            AI analysis, and 3D visualization in one operating layer.
          </p>

          <div className="anim anim-d4 flex gap-6 items-center">
            <a
              href="mailto:contact@simtwin.tech"
              style={{ background: ACCENT }}
              className="inline-block px-7 py-3 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Request Early Access
            </a>
            <a
              href="#products"
              className="text-xs tracking-[0.12em] text-white/50 hover:text-white uppercase transition-colors flex items-center gap-2"
            >
              See the Products <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats strip ─────────────────────────────────────────── */}
      <div className="border-y border-white/6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 px-8 first:pl-0">
              <div className="text-2xl md:text-3xl font-black font-mono mb-1.5" style={{ color: ACCENT }}>
                {s.value}
              </div>
              <div className="text-xs tracking-[0.14em] text-white/30 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Products grid ───────────────────────────────────────── */}
      <section id="products">

        {/* pull quote */}
        <div className="px-6 md:px-10 pt-24 pb-16">
          <p className="text-3xl md:text-4xl font-black tracking-tighter max-w-2xl" style={{ color: ACCENT }}>
            "Once data flows, AI can finally do its job."
          </p>
        </div>

        <ProductCards />
      </section>

      {/* ─── Cybersecurity strip ─────────────────────────────────── */}
      <div className="border-y border-white/6 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-px h-8 bg-white/15" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/35 font-bold">
              Security
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-3">
            {[
              "Cybersecurity-first architecture",
              "Air-gap compatible",
              "On-premise deployment",
              "No cloud dependency",
              "Encrypted data at rest",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
                <span className="text-xs tracking-[0.08em] text-white/40 uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Pilot ───────────────────────────────────────────────── */}
      <section id="pilot" className="relative py-40 px-6 border-t border-white/5 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/SchemdtPhoto.webp')", filter: "blur(4px)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-black/82" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 animate-pulse" style={{ background: ACCENT }} />
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: ACCENT }}>
              Live in Production
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.95] max-w-2xl">
            Already Running
            <br />
            in a Real Factory
          </h2>
          <p className="text-white/40 leading-relaxed mb-10 text-sm max-w-sm">
            Our first pilot is live at a book printing facility — sensors
            integrated, data flowing, AI analysis active. We&apos;re proving
            the product before scaling.
          </p>
          <a
            href="mailto:contact@simtwin.tech"
            style={{ background: ACCENT }}
            className="inline-block px-8 py-3.5 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Join the Next Pilot
          </a>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-white/25 text-xs tracking-[0.08em]">
          <span className="font-black text-sm">
            <span style={{ color: ACCENT }}>SIM</span>TWIN · simtwin.tech
          </span>
          <span>© 2025 SimTwin. All rights reserved.</span>
          <a href="mailto:contact@simtwin.tech" className="hover:text-white/60 transition-colors">
            contact@simtwin.tech
          </a>
        </div>
      </footer>

    </main>
  );
}
