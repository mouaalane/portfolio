import { DotGrid } from "./DotGrid";
import { MONO, ACCENT, MUTED, WHITE } from "../lib/constants";
import imgHero from "../assets/images/profile.png";

export function HeroSection() {
  return (
    <section id="home" className="relative flex items-center pt-24 pb-16 px-6 md:px-12 min-h-[520px] overflow-hidden">
      {/* Decorative border box */}
      <div className="hidden lg:block absolute right-[240px] top-[90px] w-[91px] h-[91px] border border-[#ABB2BF]" />

      {/* Hero text */}
      <div className="flex-1 max-w-[500px] flex flex-col gap-6 z-10">
        <h1 style={{ fontFamily: MONO, fontWeight: 500, fontSize: "clamp(28px,4vw,48px)", color: WHITE, lineHeight: 1.25 }}>
          Mohamed is a <span style={{ color: ACCENT }}>Full Stack Developer</span>
        </h1>
        <p style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.6" }}>
          I create responsive websites and web applications where technologies meet creativity.
        </p>
        <div>
          <a
            href="#contacts"
            className="inline-block border border-[#c778dd] px-4 py-2 text-white hover:bg-[#c778dd]/10 transition-colors"
            style={{ fontFamily: MONO, fontSize: 16 }}
          >
            Contact me !!
          </a>
        </div>
        <div className="flex items-center gap-2 mt-2" style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>
          <span className="inline-block w-2 h-2 rounded-full bg-[#c778dd]" />
          Currently working on 
          <span style={{ color: ACCENT, fontWeight: 500, marginLeft: 4 }}>full stack  Ecommerce platform and Smart AI file Organizer </span>
        </div>
      </div>

      {/* Hero photo */}
      <div className="hidden md:block absolute right-0 bottom-0 h-[420px] w-[300px] lg:w-[360px] overflow-hidden">
        <img src={imgHero} alt="Elias" className="h-full w-full object-cover object-top" />
        <div className="absolute top-8 -left-8">
          <DotGrid rows={5} cols={5} />
        </div>
      </div>
      <div className="absolute left-0 bottom-16 opacity-40 hidden lg:block">
        <DotGrid rows={5} cols={3} />
      </div>
    </section>
  );
}
