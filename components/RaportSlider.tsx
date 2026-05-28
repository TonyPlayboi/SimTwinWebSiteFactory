"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  "/Materials/Raport+Ai/Raport.webp",
  "/Materials/Raport+Ai/First%20(1).webp",
];

export default function RaportSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="border border-white/10 overflow-hidden">
        {/* fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/8 bg-white/3">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
            Raport Produkcji · SimTwin AI
          </span>
          {/* dot indicators */}
          <div className="ml-auto flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ background: i === active ? "#F2B800" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
        </div>

        {/* image stack */}
        <div className="relative aspect-[16/10] bg-black">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
