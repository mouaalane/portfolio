import { SectionHeading } from "./SectionHeading";
import { DotGrid } from "./DotGrid";
import { DiscordIcon, EmailIcon } from "./icons";
import { MONO, MUTED, WHITE } from "../lib/constants";

export function ContactsSection() {
  return (
    <section id="contacts" className="px-6 md:px-12 py-16 flex flex-col gap-8 relative overflow-hidden">
      <div className="hidden lg:block absolute -left-8 top-16 w-[155px] h-[155px] border border-[#ABB2BF]" />
      <SectionHeading label="contacts" withLine />
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <p className="max-w-[510px]" style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.7" }}>
          I'm interested in freelance opportunities. However, if you have other request or question,
          don't hesitate to contact me
        </p>
        <div className="border border-[#ABB2BF] p-4 flex flex-col gap-4 min-w-[240px]">
          <p style={{ fontFamily: MONO, fontWeight: 600, fontSize: 16, color: WHITE }}>Message me here</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <DiscordIcon />
              <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>!Ouaalane#3519</span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon />
              <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>ouaalaneMohamed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-8 hidden lg:block opacity-50">
        <DotGrid rows={5} cols={5} />
      </div>
    </section>
  );
}
