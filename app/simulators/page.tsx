const ACCENT = "#F2B800";

const FEATURES = [
  {
    label: "Quests & Certifications",
    desc: "Structured learning paths with progressive tasks. Operators earn certifications before ever touching real machinery. Every step logged, every competency verified.",
  },
  {
    label: "Pixel-Streamed Simulations",
    desc: "Full machine simulations rendered in Unreal Engine, streamed live into the browser. No downloads, no GPU on the trainee side. Works on any laptop.",
  },
  {
    label: "Failure Scenarios",
    desc: "Simulate breakdowns, safety incidents, and edge cases that you can never safely recreate on a live line. Train for the worst without risking anything real.",
  },
  {
    label: "Operator Analytics",
    desc: "Track performance, completion rates, and decision-making under simulated pressure. Know who is ready before they touch the machine.",
  },
  {
    label: "Multi-machine Support",
    desc: "One platform for every machine in your facility. Add new simulators as you expand — same interface, same certification framework.",
  },
  {
    label: "Custom Scenarios",
    desc: "We build scenarios from your actual machine models. Your Schmedt, your SFK, your process — not a generic training tool.",
  },
];

export default function SimulatorsPage() {
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
      <section
        className="relative pt-40 pb-28 px-6 border-b border-white/5 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/PanelOperatora.webp')", filter: "blur(4px)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-white/30 uppercase hover:text-white/60 transition-colors mb-12">
            ← Back
          </a>
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-6" style={{ color: ACCENT }}>
            Product 03 — Machine Simulators
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.92] mb-8 max-w-4xl">
            Level up
            <br />
            <span style={{ color: ACCENT }}>your operators.</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-12">
            Qualified operators are the bottleneck in every factory expansion. SimTwin Simulators turn certification into a quest — structured learning paths, live machine simulations streamed in the browser, and zero risk of breaking something real.
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="mailto:contact@simtwin.tech"
              style={{ background: ACCENT }}
              className="inline-block px-8 py-3.5 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Request a Demo
            </a>
            <a
              href="https://www.youtube.com/watch?v=JDEpELVLnqo&t=8s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}
            >
              Watch POC →
            </a>
          </div>
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
              Train like it&apos;s a game.
              <br />
              Deploy like it&apos;s real.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/6">
            {FEATURES.map((f) => (
              <div key={f.label} className="bg-[#0d0d0d] p-8 border-r border-b border-white/6">
                <div className="w-1 h-5 mb-5" style={{ background: ACCENT }} />
                <div className="text-sm font-bold text-white mb-2">{f.label}</div>
                <div className="text-white/35 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/6 bg-[#0d0d0d] p-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 animate-pulse" style={{ background: ACCENT }} />
              <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: ACCENT }}>
                Proof of concept
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Currently in active discussion with leading Japanese manufacturers. The SimTwin Simulator POC — built on Unreal Engine with pixel streaming — demonstrates full machine operation training in a browser-native environment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Your machines,
              <br />
              safe to break.
            </h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              We build the simulator from your actual machine models. Tell us what you operate.
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
