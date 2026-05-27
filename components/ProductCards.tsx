"use client";

import { useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const PRODUCTS = [
  {
    id:      "core",
    name:    "SimTwin Core",
    tagline: "Your factory is talking.",
    href:    "/core",
    img:     "/images/Awaria.webp",
    grad:    ["#F2B800", "#FF6B00"] as [string, string],
  },
  {
    id:      "vision",
    name:    "AI Vision Models",
    tagline: "They quoted you 500k.",
    href:    "/vision",
    img:     "/images/SchemdtPhoto.webp",
    grad:    ["#8B5CF6", "#EC4899"] as [string, string],
  },
  {
    id:      "simulators",
    name:    "Machine Simulators",
    tagline: "Level up your operators.",
    href:    "/simulators",
    img:     "/images/PanelOperatora.webp",
    grad:    ["#3B82F6", "#06B6D4"] as [string, string],
  },
];

function ProductCard({ p }: { p: (typeof PRODUCTS)[0] }) {
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [displayName, setDisplayName] = useState(p.name);
  const [hovered, setHovered]         = useState(false);

  const scramble = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
    let step = 0;
    interval.current = setInterval(() => {
      setDisplayName(
        p.name.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < Math.floor(step)) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      step += 0.7;
      if (step >= p.name.length) {
        clearInterval(interval.current!);
        setDisplayName(p.name);
      }
    }, 18);
  }, [p.name]);

  const onEnter = () => { setHovered(true);  scramble(); };
  const onLeave = () => {
    setHovered(false);
    if (interval.current) clearInterval(interval.current);
    setDisplayName(p.name);
  };

  const [c1, c2] = p.grad;
  const gradLine = `linear-gradient(90deg, ${c1}, ${c2}, transparent)`;

  return (
    <a
      href={p.href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "clamp(440px, 64vh, 700px)",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        border: hovered
          ? `1px solid ${c1}50`
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? `0 28px 72px rgba(0,0,0,0.85), 0 0 40px ${c1}18`
          : "0 8px 32px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "border-color 0.35s ease, box-shadow 0.4s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* ── image ── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${p.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
        }} />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)",
        }} />

        {/* logo pill */}
        <div style={{
          position: "absolute",
          top: 20,
          left: 20,
          background: "rgba(0,0,0,0.52)",
          backdropFilter: "blur(8px)",
          padding: "6px 10px",
        }}>
          <img
            src="/images/LogoSimTwin (2).jpg"
            alt="SimTwin"
            style={{ height: 20, width: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── gradient separator line ── */}
      <div style={{
        height: 1,
        flexShrink: 0,
        background: hovered ? gradLine : "rgba(255,255,255,0.07)",
        transition: "background 0.4s ease",
      }} />

      {/* ── info panel ── */}
      <div style={{
        background: "#0d0d0d",
        padding: "22px 26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexShrink: 0,
      }}>
        <div>
          <div style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: hovered ? c1 : "rgba(255,255,255,0.2)",
            marginBottom: 8,
            transition: "color 0.35s ease",
          }}>
            Product
          </div>
          <h2 style={{
            fontSize: "clamp(16px, 1.7vw, 22px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 5,
            fontFamily: "var(--font-sans)",
          }}>
            {displayName}
          </h2>
          <p style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.32)",
            letterSpacing: "0.02em",
          }}>
            {p.tagline}
          </p>
        </div>

        <span style={{
          fontSize: 20,
          color: c1,
          flexShrink: 0,
          opacity: hovered ? 1 : 0.25,
          transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          ↗
        </span>
      </div>
    </a>
  );
}

export default function ProductCards() {
  return (
    <div className="px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-3 gap-5">
      {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
