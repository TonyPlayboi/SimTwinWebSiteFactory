"use client";

import { useState, useRef } from "react";

const ACCENT = "#F2B800";

const CARDS = [
  {
    id: "digital_twin",
    name: "Digital Twin",
    stat: "4+",
    statLabel: "Industrial protocols",
    description:
      "The operating layer of your facility. Connects every machine, sensor, and system into a unified real-time data stream — with AI analysis and live 3D visualization.",
    cta: "Request demo",
  },
  {
    id: "machine_sim",
    name: "Machine Simulators",
    stat: "0",
    statLabel: "Risk in training",
    description:
      "A perfect digital replica of your factory floor. Train operators, simulate failures, validate new processes — break everything freely without stopping production.",
    cta: "Request demo",
  },
  {
    id: "ai_vision",
    name: "AI Vision Models",
    stat: "−80%",
    statLabel: "vs. traditional systems",
    description:
      "Custom vision models built on synthetic 3D data from your machines. Fine-tuned for your exact defects, deployed on compact edge hardware — permanently offline.",
    cta: "Get a quote",
  },
];

function Card({ card }: { card: (typeof CARDS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [gloss, setGloss] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;   // 0–1
    const y = (e.clientY - r.top)  / r.height;  // 0–1
    setTilt({ x: -(y - 0.5) * 18, y: (x - 0.5) * 18 });
    setGloss({ x: x * 100, y: y * 100 });
  }

  function onLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        width: 270,
        height: 390,
        position: "relative",
        flexShrink: 0,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
        transition: hovered ? "transform 0.12s ease" : "transform 0.55s ease",
        cursor: "pointer",
      }}
    >
      {/* card shell */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0e0e0e",
          border: hovered
            ? `1px solid ${ACCENT}55`
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? `0 32px 80px rgba(0,0,0,0.7), 0 0 50px ${ACCENT}12`
            : "0 16px 48px rgba(0,0,0,0.5)",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >

        {/* gloss sheen — follows cursor */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.055), transparent 55%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
            pointerEvents: "none",
            zIndex: 20,
          }}
        />

        {/* ── Face (default) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "28px 26px",
            display: "flex",
            flexDirection: "column",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.2s ease",
            pointerEvents: hovered ? "none" : "auto",
          }}
        >
          {/* top label */}
          <span
            style={{
              fontSize: 8,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "rgba(255,255,255,0.22)",
            }}
          >
            Product
          </span>

          {/* big stat — center */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                fontSize: 80,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: ACCENT,
              }}
            >
              {card.stat}
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {card.statLabel}
            </div>
          </div>

          {/* name — bottom */}
          <div
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            {card.name}
          </div>
        </div>

        {/* ── Reveal panel — slides up on hover ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#0e0e0e",
            padding: "26px 26px 24px",
            display: "flex",
            flexDirection: "column",
            borderTop: `2px solid ${ACCENT}`,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: 8,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ACCENT,
              marginBottom: 14,
            }}
          >
            Product
          </span>

          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            {card.name}
          </div>

          <div
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.48)",
              lineHeight: 1.75,
              flex: 1,
            }}
          >
            {card.description}
          </div>

          <a
            href="mailto:contact@simtwin.tech"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "block",
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              color: ACCENT,
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "auto",
            }}
          >
            {card.cta} →
          </a>
        </div>

      </div>
    </div>
  );
}

export default function AddonCards() {
  return (
    <div>
      {/* section label */}
      <div className="mb-16">
        <p
          className="text-xs tracking-[0.2em] uppercase font-bold mb-4"
          style={{ color: ACCENT }}
        >
          Products
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          What we build.
        </h2>
      </div>

      {/* floating cards */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 py-8"
      >
        {CARDS.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* quiet CTA below */}
      <div className="mt-16 text-center">
        <p className="text-white/28 text-sm mb-6">
          Not sure which product fits your facility?
        </p>
        <a
          href="mailto:contact@simtwin.tech"
          style={{ color: ACCENT }}
          className="text-xs font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
        >
          Talk to us →
        </a>
      </div>
    </div>
  );
}
