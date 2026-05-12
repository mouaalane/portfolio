import { DotGrid } from "../components/DotGrid";
import { SectionHeading } from "../components/SectionHeading";
import { PageTitle } from "../components/PageTitle";
import { ContactForm } from "../components/ContactForm";
import { DiscordIcon, EmailIcon, TwitterIcon } from "../components/icons";
import { MONO, MUTED, WHITE } from "../lib/constants";

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
              <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>Message me here</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2"><DiscordIcon /><span style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>ouaalane</span></div>
                <div className="flex items-center gap-2"><EmailIcon /><span style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>m.ouaalane6520uca.ac.ma</span></div>
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
            <TwitterIcon /><span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>@ouaalane</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <TwitterIcon /><span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>@ouaalane</span>
          </a>
        </div>
      </section>
    </div>
  );
}
