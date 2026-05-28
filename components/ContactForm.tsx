"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/antoni@simtwin.tech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Imię i nazwisko": form.name,
          Email: form.email,
          Firma: form.company,
          Wiadomość: form.message,
          _subject: `Nowa wiadomość od ${form.name} — SimTwin`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/4 border border-white/10 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-[#F2B800] transition-colors";

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-8 h-8 flex items-center justify-center border-2 border-[#F2B800]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="#F2B800" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight">Wiadomość wysłana</h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm">
          Dziękujemy za kontakt. Odpiszemy w ciągu 24 godzin na podany adres email.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs tracking-[0.15em] uppercase text-[#F2B800] hover:text-white transition-colors mt-2"
        >
          Wyślij kolejną wiadomość →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Imię i nazwisko *"
          required
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Adres email *"
          required
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        placeholder="Nazwa firmy"
        value={form.company}
        onChange={set("company")}
        className={inputClass}
      />
      <textarea
        placeholder="Wiadomość *"
        required
        rows={5}
        value={form.message}
        onChange={set("message")}
        className={`${inputClass} resize-none`}
      />
      {status === "error" && (
        <p className="text-red-400 text-xs tracking-wide">
          Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na antoni@simtwin.tech
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto px-10 py-3.5 bg-[#F2B800] text-black font-black text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>
    </form>
  );
}
