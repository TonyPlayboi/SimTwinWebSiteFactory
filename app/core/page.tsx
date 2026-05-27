import CoreFlowLoader from "@/components/CoreFlowLoader";

const ACCENT = "#F2B800";

export default function CorePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white font-sans">

      {/* ─── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="relative max-w-[1600px] mx-auto px-8 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-black tracking-widest uppercase">
            <span style={{ color: ACCENT }}>Sim</span>Twin
          </a>
          <a href="mailto:contact@simtwin.tech" className="text-xs tracking-[0.1em] text-white/60 hover:text-white uppercase transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-white/30 uppercase hover:text-white/60 transition-colors mb-12">
            ← Back
          </a>
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: ACCENT }}>
            Product 01 — SimTwin Core
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.92] mb-8 max-w-4xl">
            Your factory is talking.
            <br />
            <span style={{ color: ACCENT }}>Are you listening?</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-12">
            Most factories generate enormous amounts of data — and lose almost all of it. Trapped in PLCs, siloed per machine, invisible to the people making decisions. SimTwin Core is the integration layer that changes that.
          </p>
          <a
            href="mailto:contact@simtwin.tech"
            style={{ background: ACCENT }}
            className="inline-block px-8 py-3.5 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Request a Demo
          </a>
        </div>
      </section>

      {/* ─── Flow diagram ────────────────────────────────────────── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: ACCENT }}>
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
              From factory floor to intelligence.
            </h2>
          </div>
          <CoreFlowLoader />
          <p className="text-white/22 text-xs tracking-[0.15em] uppercase mt-5">
            White — factory data in &nbsp;·&nbsp; Amber — intelligence out
          </p>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: ACCENT }}>
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
              Everything in one layer.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/6">
            {[
              { title: "OPC-UA & MQTT",        desc: "Native support for industrial protocols. Connect PLCs, SCADA systems, and sensors without custom drivers." },
              { title: "Real-time Pipeline",    desc: "Sub-second data ingestion from every machine on the floor, unified into a single live stream." },
              { title: "AI Anomaly Detection",  desc: "Trained on your factory's baseline. Flags deviations before they become failures." },
              { title: "3D Visualization",      desc: "Every data point mapped to a live 3D model of your facility. See the factory, not just the numbers." },
              { title: "Live Dashboards",        desc: "Role-specific views for operators, line managers, and directors — updated in real time." },
              { title: "AI Reports",             desc: "Automated shift and production reports with AI-generated insights. No analyst required." },
            ].map((f) => (
              <div key={f.title} className="bg-[#0d0d0d] p-8 border-r border-b border-white/6">
                <div className="w-1 h-5 mb-5" style={{ background: ACCENT }} />
                <div className="text-sm font-bold text-white mb-2">{f.title}</div>
                <div className="text-white/35 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Ready to connect
              <br />
              your factory?
            </h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              We deploy alongside your existing hardware. No rip-and-replace. No downtime.
            </p>
          </div>
          <a
            href="mailto:contact@simtwin.tech"
            style={{ background: ACCENT }}
            className="inline-block px-10 py-4 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity shrink-0"
          >
            Get in Touch →
          </a>
        </div>
      </section>

    </main>
  );
}
