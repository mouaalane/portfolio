import { useState } from "react";
import { DotGrid } from "../components/DotGrid";
import { SectionHeading } from "../components/SectionHeading";
import { PageTitle } from "../components/PageTitle";
import { DiscordIcon, EmailIcon, TwitterIcon } from "../components/icons";
import { MONO, MUTED, WHITE } from "../lib/constants";

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
  const inputStyle = { fontFamily: MONO, fontSize: 16, color: MUTED };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[505px]">
      <div className="flex gap-4">
        <input type="text"  placeholder="Name"  value={fields.name}    onChange={(e) => setFields({ ...fields, name: e.target.value })}    className={inputClass} style={inputStyle} />
        <input type="email" placeholder="Email" value={fields.email}   onChange={(e) => setFields({ ...fields, email: e.target.value })}   className={inputClass} style={inputStyle} />
      </div>
      <input    type="text" placeholder="Title"   value={fields.title}   onChange={(e) => setFields({ ...fields, title: e.target.value })}   className={inputClass} style={inputStyle} />
      <textarea placeholder="Message" value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })} rows={5} className={`${inputClass} resize-none`} style={inputStyle} />
      <div>
        <button type="submit" className="border border-[#c778dd] px-4 py-2 text-white hover:bg-[#c778dd]/10 transition-colors" style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16 }}>
          {sent ? "Sent!" : "Send"}
        </button>
      </div>
    </form>
  );
}

export default function ContactsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      <PageTitle slug="contacts" subtitle="Who am i?" />

      {/* ── Contact section ── */}
      <section className="relative mb-20">
        <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />
        <div className="hidden lg:block absolute -left-6 top-24 opacity-50"><DotGrid rows={4} cols={4} /></div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: blurb + form */}
          <div className="flex flex-col gap-8 flex-1">
            <p className="max-w-[505px]" style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: MUTED, lineHeight: "1.7" }}>
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>
            <ContactForm />
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-0">
            <div className="border border-[#ABB2BF] p-4 flex flex-col gap-2 min-w-[190px]">
              <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>Support me here</p>
              <p style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>4149500120690030</p>
            </div>
            <div className="border border-[#ABB2BF] border-t-0 sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l p-4 flex flex-col gap-4 min-w-[220px]">
              <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>Message me here</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2"><DiscordIcon /><span style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>Elias#1234</span></div>
                <div className="flex items-center gap-2"><EmailIcon /><span style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>elias@elias-dev.ml</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All-media section ── */}
      <section className="relative">
        <div className="hidden lg:block absolute -left-6 top-16 opacity-50"><DotGrid rows={5} cols={4} /></div>
        <SectionHeading label="all-media" />
        <div className="mt-6 flex flex-wrap gap-6">
          <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <TwitterIcon /><span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>@elias</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <TwitterIcon /><span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>@elias</span>
          </a>
        </div>
      </section>
    </div>
  );
}
