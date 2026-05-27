const ACCENT = "#F2B800";

const PIPELINE = [
  { step: "01", label: "3D Scan",               desc: "We scan your machine and product geometry to build an accurate digital base." },
  { step: "02", label: "Procedural Variation",  desc: "Houdini generates thousands of defect variations automatically — position, size, severity." },
  { step: "03", label: "Photorealistic Render", desc: "Unreal Engine renders images matching your exact camera position, lens, and lighting." },
  { step: "04", label: "Fine-tuning",           desc: "We fine-tune a compact vision model on your synthetic dataset using LoRA." },
  { step: "05", label: "Edge Deployment",       desc: "Optimized model deployed on dedicated Jetson hardware — offline, permanent, yours." },
];

export default function VisionPage() {
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
            Product 02 — AI Vision Models
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.92] mb-8 max-w-4xl">
            They quoted you 500k.
            <br />
            <span style={{ color: ACCENT }}>We start with a 3D scan.</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-12">
            Traditional optical control systems are proprietary black boxes — expensive to install, expensive to maintain, impossible to modify. We build custom AI vision models from your own 3D geometry, deploy them on hardware you own, and hand you the keys.
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="mailto:contact@simtwin.tech"
              style={{ background: ACCENT }}
              className="inline-block px-8 py-3.5 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Get a Quote
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

      {/* ─── What is synthetic data ──────────────────────────────── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: ACCENT }}>
              The problem with traditional ML
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
              Real defects are rare.
              <br />
              Synthetic ones aren&apos;t.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Training a vision model on real defect images means waiting weeks to collect enough examples — and manually labeling every single one. For rare failures, you might never gather enough data. Synthetic data solves this entirely: generate unlimited, perfectly labeled training images from 3D models of your machines. No waiting. No labeling. No privacy concerns.
            </p>
          </div>
          <div className="border border-white/6 bg-[#0d0d0d] p-8 flex flex-col gap-6">
            {[
              { label: "−80%",  sub: "vs. traditional system cost"   },
              { label: "10×",   sub: "faster than manual labeling"   },
              { label: "100%",  sub: "offline — no cloud dependency" },
            ].map((s) => (
              <div key={s.label} className="border-b border-white/6 pb-6 last:border-0 last:pb-0">
                <div className="text-4xl font-black tracking-tighter mb-1" style={{ color: ACCENT }}>{s.label}</div>
                <div className="text-white/30 text-xs tracking-[0.12em] uppercase">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pipeline ────────────────────────────────────────────── */}
      <section className="py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: ACCENT }}>
              The pipeline
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
              From geometry to deployed model.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 border border-white/6">
            {PIPELINE.map((s) => (
              <div key={s.step} className="bg-[#0d0d0d] p-8 border-r border-white/6 last:border-r-0">
                <div className="text-3xl font-black tracking-tighter mb-4" style={{ color: ACCENT }}>{s.step}</div>
                <div className="text-sm font-bold text-white mb-2">{s.label}</div>
                <div className="text-white/35 text-sm leading-relaxed">{s.desc}</div>
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
              What does optical
              <br />
              control cost you now?
            </h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              Tell us the machine, the defect type, the camera count. We&apos;ll tell you what it takes.
            </p>
          </div>
          <a
            href="mailto:contact@simtwin.tech"
            style={{ background: ACCENT }}
            className="inline-block px-10 py-4 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity shrink-0"
          >
            Get a Quote →
          </a>
        </div>
      </section>

    </main>
  );
}
