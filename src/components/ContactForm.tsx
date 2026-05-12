import { useState } from "react";
import { MONO, MUTED } from "../lib/constants";

export function ContactForm() {
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
  const inputStyle = { fontFamily: MONO, fontSize: 16, color: MUTED };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[505px]">
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
      <input
        type="text"
        placeholder="Title"
        value={fields.title}
        onChange={(e) => setFields({ ...fields, title: e.target.value })}
        className={inputClass}
        style={inputStyle}
      />
      <textarea
        placeholder="Message"
        value={fields.message}
        onChange={(e) => setFields({ ...fields, message: e.target.value })}
        rows={5}
        className={`${inputClass} resize-none`}
        style={inputStyle}
      />
      <div>
        <button
          type="submit"
          className="border border-[#c778dd] px-4 py-2 text-white hover:bg-[#c778dd]/10 transition-colors"
          style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16 }}
        >
          {sent ? "Sent!" : "Send"}
        </button>
      </div>
    </form>
  );
}
