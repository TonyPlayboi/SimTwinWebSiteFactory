"use client";

import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const ACCENT = "#F2B800";

const ADDONS = [
  {
    id: "ai_ml",
    name: "AI / ML Integration",
    hook: "Your machines are talking. Are you listening?",
    withoutWith:
      "Without it — you find out the machine broke. With it — you fixed it 4 days before it did.",
    stat: { value: "23%", label: "avg. downtime reduction" },
    priceAnchor: "vs. hiring a data scientist: $200k+ / yr",
    urgency: "Most requested by pilot partners",
    features: [
      "Predictive maintenance",
      "Quality inspection",
      "Process optimization",
      "Custom model deployment",
    ],
    videoId: "7Pq-S557XQU",
  },
  {
    id: "machine_sim",
    name: "Machine Simulators",
    hook: "Train hard. Break things. On a digital twin.",
    withoutWith:
      "Without it — operators train on live machinery. With it — they train in a perfect replica. Break everything. Zero consequences.",
    stat: { value: "0", label: "injuries possible during simulation training" },
    priceAnchor: "vs. the cost of a single training incident",
    urgency: "Included in pilot package",
    features: [
      "Operator training environment",
      "Failure simulation",
      "Process validation",
      "Zero-risk onboarding",
    ],
    videoId: "JDEpELVLnqo",
  },
  {
    id: "synthetic",
    name: "Synthetic Data",
    hook: "Don't wait months for training data. Generate it.",
    withoutWith:
      "Without it — months of manual labeling, privacy headaches, incomplete datasets. With it — auto-generated, auto-labeled, ready in hours.",
    stat: { value: "10×", label: "faster than manual data collection" },
    priceAnchor: "vs. a data labeling team for 3 months",
    urgency: "Required for computer vision AI",
    features: [
      "Sensor data generation",
      "CV training datasets",
      "Robotics simulation",
      "Automatic labeling",
    ],
    videoId: "aircAruvnKk",
  },
];

// ─── Stack progress bar ───────────────────────────────────────────────────────

function StackProgress({ activeId }: { activeId: string | null }) {
  const steps = [
    { id: "core", label: "SimTwinCore", active: true },
    { id: "ai_ml", label: "AI / ML", active: activeId === "ai_ml" },
    { id: "machine_sim", label: "Simulators", active: activeId === "machine_sim" },
    { id: "synthetic", label: "Synthetic Data", active: activeId === "synthetic" },
  ];

  return (
    <div className="mb-10 p-6 border border-white/6 bg-[#0d0d0d]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs tracking-[0.16em] text-white/28 uppercase font-bold">
          Your Intelligence Stack
        </span>
        <span className="text-xs text-white/20">
          {activeId ? "2 of 4 active" : "1 of 4 active"} —{" "}
          <span style={{ color: ACCENT }}>
            {activeId ? "upgrade ready" : "3 modules available"}
          </span>
        </span>
      </div>

      <div className="relative flex items-center">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            {/* dot */}
            <div
              className="relative flex-shrink-0 transition-all duration-300"
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: step.active ? ACCENT : "transparent",
                border: step.active ? "none" : "1px solid rgba(255,255,255,0.18)",
                boxShadow: step.active ? `0 0 12px ${ACCENT}80` : "none",
              }}
            />
            {/* line to next */}
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-px transition-all duration-500"
                style={{
                  background: step.active
                    ? `linear-gradient(90deg, ${ACCENT}, ${steps[i + 1].active ? ACCENT : "rgba(255,255,255,0.1)"})`
                    : "rgba(255,255,255,0.08)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-3">
        {steps.map((step) => (
          <span
            key={step.id}
            className="text-xs transition-colors duration-300"
            style={{
              color: step.active ? ACCENT : "rgba(255,255,255,0.22)",
              fontWeight: step.active ? 700 : 400,
            }}
          >
            {step.label}
            {step.id === "core" && (
              <span className="ml-1 opacity-60">✓</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Single add-on card ───────────────────────────────────────────────────────

function AddonCard({
  mod,
  hovered,
  onEnter,
  onLeave,
}: {
  mod: (typeof ADDONS)[0];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="flex flex-col transition-all duration-300 cursor-pointer"
      style={{
        background: hovered ? "#111" : "#0d0d0d",
        border: hovered
          ? `1px solid ${ACCENT}50`
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 60px ${ACCENT}08` : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* video */}
      <YoutubeEmbed id={mod.videoId} className="aspect-video" />

      {/* urgency badge */}
      <div className="px-6 pt-5 flex items-center justify-between">
        <span
          className="text-xs tracking-[0.14em] uppercase font-bold"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Add-on
        </span>
        <span
          className="text-xs px-2.5 py-1 font-semibold tracking-wide transition-colors duration-300"
          style={{
            color: hovered ? "#000" : ACCENT,
            background: hovered ? ACCENT : `${ACCENT}15`,
            border: `1px solid ${ACCENT}40`,
          }}
        >
          {mod.urgency}
        </span>
      </div>

      {/* big stat */}
      <div className="px-6 pt-4 pb-4">
        <div
          className="text-5xl font-black tracking-tighter leading-none transition-all duration-300"
          style={{ color: hovered ? "#fff" : ACCENT }}
        >
          {mod.stat.value}
        </div>
        <div className="text-xs text-white/35 uppercase tracking-[0.12em] mt-1.5">
          {mod.stat.label}
        </div>
      </div>

      <div className="mx-6 h-px bg-white/6" />

      {/* name + hook */}
      <div className="px-6 pt-5">
        <h3 className="text-xl font-black tracking-tight mb-2">{mod.name}</h3>
        <p
          className="text-sm font-medium mb-3 transition-colors duration-300"
          style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.38)" }}
        >
          {mod.hook}
        </p>
      </div>

      {/* without / with — reveals stronger on hover */}
      <div
        className="mx-6 px-4 py-3 mb-5 border-l-2 transition-all duration-300"
        style={{
          borderColor: hovered ? ACCENT : "rgba(255,255,255,0.1)",
          background: hovered ? `${ACCENT}08` : "rgba(255,255,255,0.02)",
        }}
      >
        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          {mod.withoutWith}
        </p>
      </div>

      {/* features */}
      <ul className="px-6 grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
        {mod.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-white/40">
            <span
              className="w-1 h-1 flex-shrink-0 transition-colors duration-300"
              style={{ background: hovered ? ACCENT : "rgba(255,255,255,0.2)" }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* footer */}
      <div
        className="mt-auto px-6 pb-6 pt-5 border-t flex items-center justify-between gap-4 transition-colors duration-300"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="text-xs text-white/20 leading-tight">{mod.priceAnchor}</span>
        <a
          href="mailto:contact@simtwin.tech"
          className="flex-shrink-0 text-xs font-bold tracking-[0.12em] uppercase flex items-center gap-1.5 transition-all duration-200"
          style={{ color: ACCENT }}
          onClick={(e) => e.stopPropagation()}
        >
          Add to platform
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function AddonModules() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div>
      {/* section label */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p
            className="text-xs tracking-[0.18em] uppercase font-bold mb-1"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Add-on Modules
          </p>
          <p className="text-white/40 text-sm">
            Activate only what your operation needs.
          </p>
        </div>
        <span className="text-xs text-white/18 tracking-widest uppercase hidden md:block">
          All modules require SimTwinCore
        </span>
      </div>

      {/* stack progress */}
      <StackProgress activeId={hoveredId} />

      {/* pilot pricing banner */}
      <div
        className="mb-6 px-5 py-3 flex items-center justify-between border"
        style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}06` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: ACCENT }}
          />
          <span className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: ACCENT }}>
            Pilot pricing active
          </span>
          <span className="text-xs text-white/30">
            — early customers get locked-in rates before general availability
          </span>
        </div>
        <span className="text-xs text-white/25 hidden md:block">Limited slots</span>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-px bg-transparent gap-4">
        {ADDONS.map((mod) => (
          <AddonCard
            key={mod.id}
            mod={mod}
            hovered={hoveredId === mod.id}
            onEnter={() => setHoveredId(mod.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

      {/* bottom close */}
      <div className="mt-10 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/30 text-sm max-w-md leading-relaxed">
          Not sure which modules fit your operation?{" "}
          <a
            href="mailto:contact@simtwin.tech"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Talk to us
          </a>{" "}
          — we scope the right stack before you commit to anything.
        </p>
        <a
          href="mailto:contact@simtwin.tech"
          className="flex-shrink-0 inline-block px-7 py-3 text-black font-bold text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          style={{ background: ACCENT }}
        >
          Book a scoping call
        </a>
      </div>
    </div>
  );
}
