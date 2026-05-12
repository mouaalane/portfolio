import { useState } from "react";
import svgPaths from "../../imports/Contacts/svg-7j2ps28lg2";

const mono = "'Fira Code', monospace";

// ─── Dot grid ────────────────────────────────────────────────────────────────
function DotGrid({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 4px)`, gap: "16px" }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="size-[4px] rounded-full bg-[#ABB2BF]" />
      ))}
    </div>
  );
}

// ─── Section heading ─────────────────────────────────────────────────────────
function SectionLabel({ label }: { label: string }) {
  return (
    <h2 style={{ fontFamily: mono, fontWeight: 500, fontSize: 32, color: "#fff" }}>
      <span style={{ color: "#c778dd" }}>#</span>{label}
    </h2>
  );
}

// ─── Twitter icon ─────────────────────────────────────────────────────────────
function TwitterIcon() {
  return (
    <svg viewBox="0 0 23 19" fill="none" className="w-5 h-4">
      <path d={svgPaths.pa2e7700} fill="#ABB2BF" />
    </svg>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", title: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFields({ name: "", email: "", title: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border border-[#ABB2BF] px-2 py-2 outline-none focus:border-[#c778dd] transition-colors placeholder-[#ABB2BF]";
  const inputStyle = { fontFamily: mono, fontSize: 16, color: "#ABB2BF" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[505px]">
      {/* Name + Email row */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          className={inputClass}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={fields.title}
        onChange={(e) => setFields({ ...fields, title: e.target.value })}
        className={inputClass}
        style={inputStyle}
      />

      {/* Message */}
      <textarea
        placeholder="Message"
        value={fields.message}
        onChange={(e) => setFields({ ...fields, message: e.target.value })}
        rows={5}
        className={`${inputClass} resize-none`}
        style={inputStyle}
      />

      {/* Send button */}
      <div>
        <button
          type="submit"
          className="border border-[#c778dd] px-4 py-2 text-white hover:bg-[#c778dd]/10 transition-colors"
          style={{ fontFamily: mono, fontWeight: 500, fontSize: 16 }}
        >
          {sent ? "Sent!" : "Send"}
        </button>
      </div>
    </form>
  );
}

// ─── Contacts Page ────────────────────────────────────────────────────────────
export default function ContactsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">

      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="mb-10">
        <h1 style={{ fontFamily: mono, fontWeight: 500, fontSize: 32, color: "#fff" }}>
          <span style={{ color: "#c778dd" }}>/</span>contacts
        </h1>
        <p className="mt-1" style={{ fontFamily: mono, fontSize: 16, color: "#fff" }}>
          Who am i?
        </p>
      </div>

      {/* ── Contact section ───────────────────────────────────────── */}
      <section className="relative mb-20">
        {/* Decorative border box top-right */}
        <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />

        {/* Dot grid left */}
        <div className="hidden lg:block absolute -left-6 top-24 opacity-50">
          <DotGrid rows={4} cols={4} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: description + form */}
          <div className="flex flex-col gap-8 flex-1">
            <p
              className="max-w-[505px]"
              style={{ fontFamily: mono, fontWeight: 500, fontSize: 16, color: "#ABB2BF", lineHeight: "1.7" }}
            >
              I'm interested in freelance opportunities. However, if you have other request or question,
              don't hesitate to contact me
            </p>
            <ContactForm />
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-0">
            {/* Support me here */}
            <div className="border border-[#ABB2BF] p-4 flex flex-col gap-2 min-w-[190px]">
              <p style={{ fontFamily: mono, fontWeight: 500, fontSize: 16, color: "#fff" }}>
                Support me here
              </p>
              <p style={{ fontFamily: mono, fontSize: 14, color: "#ABB2BF" }}>
                4149500120690030
              </p>
            </div>

            {/* Message me here */}
            <div className="border border-[#ABB2BF] border-t-0 sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l p-4 flex flex-col gap-4 min-w-[220px]">
              <p style={{ fontFamily: mono, fontWeight: 500, fontSize: 16, color: "#fff" }}>
                Message me here
              </p>
              <div className="flex flex-col gap-3">
                {/* Discord */}
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 25 20" fill="none" className="w-5 h-4 shrink-0">
                    <path d={svgPaths.p6068900} fill="#ABB2BF" />
                  </svg>
                  <span style={{ fontFamily: mono, fontSize: 14, color: "#ABB2BF" }}>Elias#1234</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 23 17" fill="none" className="w-5 h-4 shrink-0">
                    <path d={svgPaths.p4953640} fill="#ABB2BF" />
                  </svg>
                  <span style={{ fontFamily: mono, fontSize: 14, color: "#ABB2BF" }}>elias@elias-dev.ml</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All-media section ─────────────────────────────────────── */}
      <section className="relative">
        {/* Dot grid bottom-left */}
        <div className="hidden lg:block absolute -left-6 top-16 opacity-50">
          <DotGrid rows={5} cols={4} />
        </div>

        <SectionLabel label="all-media" />

        <div className="mt-6 flex flex-wrap gap-6">
          <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <TwitterIcon />
            <span style={{ fontFamily: mono, fontSize: 16, color: "#ABB2BF" }}>@elias</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <TwitterIcon />
            <span style={{ fontFamily: mono, fontSize: 16, color: "#ABB2BF" }}>@elias</span>
          </a>
        </div>
      </section>
    </div>
  );
}