"use client";

import { useState } from "react";

const MODES = [
  {
    id: "praca",
    name: "PRACA",
    label: "Produkcja w toku",
    file: "Praca.webm",
    color: "#22c55e",
    desc: "Maszyna pracuje w normalnym trybie. Dane produkcyjne zbierane w czasie rzeczywistym — prędkość, wydajność, OEE.",
  },
  {
    id: "awaria",
    name: "AWARIA",
    label: "Wykryto awarię",
    file: "Awaria.webm",
    color: "#ef4444",
    desc: "System wykrył odchylenie parametrów. Automatyczne powiadomienie i rejestracja zdarzenia w historii maszyny.",
  },
  {
    id: "konserwacja",
    name: "KONSERWACJA",
    label: "Serwis planowy",
    file: "Konserwacja.webm",
    color: "#3b82f6",
    desc: "Planowane przeglądy i serwis z pełną historią interwencji. AI przewiduje następny termin.",
  },
  {
    id: "przyrzad",
    name: "PRZYRZĄD",
    label: "Zmiana narzędzi",
    file: encodeURIComponent("Przyrząd.webm"),
    color: "#F2B800",
    desc: "Przezbrajanie maszyny z kontrolą czasu i dokumentacją każdej zmiany oprzyrządowania.",
  },
];

function VideoStack({ active }: { active: number }) {
  return (
    <>
      {MODES.map((m, i) => (
        <video
          key={m.id}
          src={`/Materials/Tryby/${m.file}`}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
    </>
  );
}

export default function TrybySection() {
  const [active, setActive] = useState(0);
  const mode = MODES[active];

  return (
    <section id="tryby" className="py-20 md:py-32 px-5 md:px-10 bg-[#090909]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-[#F2B800]">
              Moduł 01
            </span>
            <span className="text-white/20">·</span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/40">
              Live Monitoring
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
            Stany
            <br />
            <span className="text-[#F2B800]">Maszyn</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            SimTwin rozpoznaje każdy stan operacyjny maszyny i rejestruje go w czasie rzeczywistym.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex gap-8 items-stretch min-h-[480px]">
          {/* Mode tabs */}
          <div className="flex flex-col gap-2 w-64 flex-shrink-0">
            {MODES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 border transition-all duration-300 ${
                  i === active
                    ? "border-[#F2B800] bg-[#F2B800]/5"
                    : "border-white/8 bg-white/2 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                      i === active ? "animate-pulse" : "opacity-30"
                    }`}
                    style={{ background: m.color }}
                  />
                  <span
                    className={`text-xs tracking-[0.18em] font-black uppercase transition-colors duration-200 ${
                      i === active ? "text-white" : "text-white/40"
                    }`}
                  >
                    {m.name}
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed transition-colors duration-200 ${
                    i === active ? "text-white/60" : "text-white/25"
                  }`}
                >
                  {m.label}
                </p>
              </button>
            ))}
          </div>

          {/* Video + description */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative flex-1 bg-black overflow-hidden">
              <VideoStack active={active} />
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: mode.color }}
                />
                <span
                  className="text-xs tracking-[0.15em] uppercase font-bold px-2 py-0.5"
                  style={{ color: mode.color, background: `${mode.color}18` }}
                >
                  {mode.name}
                </span>
              </div>
            </div>
            <div className="border-l-2 pl-5 transition-colors duration-300" style={{ borderColor: mode.color }}>
              <p className="text-white/60 text-sm leading-relaxed">{mode.desc}</p>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-5 px-5">
            {MODES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 px-4 py-2 border text-xs tracking-[0.15em] font-black uppercase transition-all ${
                  i === active
                    ? "border-[#F2B800] text-white bg-[#F2B800]/10"
                    : "border-white/15 text-white/40"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block mr-2"
                  style={{ background: i === active ? m.color : "rgba(255,255,255,0.2)" }}
                />
                {m.name}
              </button>
            ))}
          </div>

          <div className="relative aspect-video bg-black overflow-hidden mb-4">
            <VideoStack active={active} />
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: mode.color }}
              />
              <span className="text-xs tracking-widest uppercase font-bold" style={{ color: mode.color }}>
                {mode.name}
              </span>
            </div>
          </div>

          <div className="border-l-2 pl-4 transition-colors duration-300" style={{ borderColor: mode.color }}>
            <p className="text-white/50 text-sm leading-relaxed">{mode.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
