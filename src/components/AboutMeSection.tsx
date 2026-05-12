import { Link } from "react-router";
import { SectionHeading } from "./SectionHeading";
import { DotGrid } from "./DotGrid";
import { MONO, MUTED } from "../lib/constants";
import imgAbout from "../assets/images/about-portrait.png";

export function AboutMeSection() {
  return (
    <section id="about-me" className="px-6 md:px-12 py-16 flex flex-col gap-8 relative overflow-hidden">
      <SectionHeading label="about-me" withLine />
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex flex-col gap-6 max-w-[520px]">
          <div style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.7" }}>
            <p>Hello, i'm mohamed ouaalane!</p>
            <br />
            <p>
              I’m a full-stack developer based in Marrakech, Morocco. I write clean, efficient code and build high-performance applications focused on scalability and great user experience.

              I have strong adaptability across technologies and can smoothly switch between different tech stacks depending on project needs. I’ve also solved over 2000 DSA problems across various programming platforms, including  ProgrammingAdvices and some of them in LeetCode .
            </p>
            <br />
            <p>
              I focus on delivering high-quality, maintainable code rather than quick or messy solutions, always aiming for clean architecture and solid fundamentals.
            </p>
          </div>
          <div>
            <Link
              to="/about"
              className="inline-block border border-[#c778dd] px-4 py-2 text-white hover:bg-[#c778dd]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 16 }}
            >
              Read more →
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block shrink-0">
          <div className="absolute -left-8 top-6">
            <DotGrid rows={5} cols={5} />
          </div>
          <img
            src={imgAbout}
            alt="About Elias"
            className="relative z-10 w-[300px] lg:w-[340px] object-cover"
            style={{ maxHeight: 500 }}
          />
          <div className="absolute -right-4 bottom-8 w-[271px] h-px bg-[#c778dd]" />
        </div>
      </div>
    </section>
  );
}
