import { Link } from "react-router";
import { DotGrid } from "../components/DotGrid";
import { SectionHeading } from "../components/SectionHeading";
import { GitHubIcon, FigmaIcon, DiscordIcon, EmailIcon } from "../components/icons";
import { MONO, ACCENT, MUTED, WHITE } from "../lib/constants";

// ── Asset imports ─────────────────────────────────────────────────────────────
import imgHero         from "../assets/images/profile.png";
import imgAbout        from "../assets/images/about-portrait.png";
import imgChertNodes   from "../assets/images/project-chert-nodes.png";
import imgProtectX     from "../assets/images/project-protect-x.png";
import imgKahoot       from "../assets/images/project-kahoot.png";

// ── Project card ──────────────────────────────────────────────────────────────
interface ProjectCardProps {
  image: string;
  tags: string;
  title: string;
  description: string;
  liveLink?: string;
  cachedLink?: string;
}

function ProjectCard({ image, tags, title, description, liveLink, cachedLink }: ProjectCardProps) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col">
      <div className="relative h-[150px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-[#282c34]/80 px-2 py-1">
          <p style={{ fontFamily: MONO, fontSize: 12, color: MUTED }}>{tags}</p>
        </div>
      </div>
      <div className="border-t border-[#ABB2BF] flex flex-col gap-2 p-3">
        <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 18, color: WHITE }}>{title}</p>
        <p style={{ fontFamily: MONO, fontSize: 14, color: MUTED, lineHeight: "1.6" }}>{description}</p>
        <div className="flex gap-2 flex-wrap mt-1">
          {liveLink !== undefined && (
            <a
              href={liveLink || "#"}
              className="border border-[#c778dd] px-3 py-1 text-white hover:bg-[#c778dd]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 14 }}
            >
              Live →→
            </a>
          )}
          {cachedLink !== undefined && (
            <a
              href={cachedLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 14 }}
            >
              Cached ▷
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Skill block ───────────────────────────────────────────────────────────────
function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col gap-2 py-2 min-w-[150px]">
      <p
        className="px-2 border-b border-[#ABB2BF] pb-2"
        style={{ fontFamily: MONO, fontWeight: 600, fontSize: 16, color: WHITE }}
      >
        {title}
      </p>
      <div
        className="px-2 flex flex-col gap-2"
        style={{ fontFamily: MONO, fontWeight: 400, fontSize: 16, color: MUTED }}
      >
        {items.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </div>
  );
}

// ── Featured projects ─────────────────────────────────────────────────────────
const FEATURED_PROJECTS: ProjectCardProps[] = [
  {
    image: imgChertNodes,
    tags: "HTML  SCSS  Python  Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    image: imgProtectX,
    tags: "React  Express  Discord.js  Node.js",
    title: "ProtectX",
    description: "Discord anti-crash bot",
    liveLink: "#",
  },
  {
    image: imgKahoot,
    tags: "CSS  Express  Node.js  JS",
    title: "Kahoot Answers Viewer",
    description: "Get answers to your Kahoot quiz",
    liveLink: "#",
  },
];

// ── Sections ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" className="relative flex items-center pt-24 pb-16 px-6 md:px-12 min-h-[520px] overflow-hidden">
      {/* Decorative border box */}
      <div className="hidden lg:block absolute right-[240px] top-[90px] w-[91px] h-[91px] border border-[#ABB2BF]" />

      {/* Hero text */}
      <div className="flex-1 max-w-[500px] flex flex-col gap-6 z-10">
        <h1 style={{ fontFamily: MONO, fontWeight: 500, fontSize: "clamp(28px,4vw,48px)", color: WHITE, lineHeight: 1.25 }}>
          Elias is a <span style={{ color: ACCENT }}>web designer</span> and front-end developer
        </h1>
        <p style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.6" }}>
          He crafts responsive websites where technologies meet creativity.
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
          Currently working on <span style={{ color: ACCENT, fontWeight: 500, marginLeft: 4 }}>Portfolio</span>
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

function QuoteSection() {
  return (
    <section className="px-6 md:px-12 py-16 flex justify-center relative overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-4 w-[155px] h-[155px] border border-[#ABB2BF]" />
      <div
        className="border border-[#ABB2BF] max-w-[700px] w-full px-8 py-10 relative"
        style={{ fontFamily: MONO }}
      >
        <div className="absolute -top-5 left-6 text-[60px] leading-none text-[#ABB2BF] select-none">"</div>
        <p className="mt-4" style={{ fontSize: "clamp(16px,2vw,24px)", color: WHITE, lineHeight: 1.5 }}>
          With great power comes great electricity bill
        </p>
        <div className="flex justify-end mt-4">
          <div className="relative">
            <div className="absolute -top-3 -left-4 text-[40px] leading-none text-[#ABB2BF] select-none">"</div>
            <p style={{ fontSize: 16, color: MUTED }}>– Dr. Who</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="works" className="px-6 md:px-12 py-16 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <SectionHeading label="projects" withLine />
        <Link
          to="/projects"
          style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
          className="hover:text-white transition-colors shrink-0 ml-4"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 flex flex-col gap-8 relative overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-4 w-[155px] h-[155px] border border-[#ABB2BF]" />
      <SectionHeading label="skills" withLine />
      <div className="flex flex-wrap gap-6">
        <SkillBlock title="Languages"  items={["TypeScript  Lua", "Python  JavaScript"]} />
        <SkillBlock title="Databases"  items={["SQLite  PostgreSQL", "Mongo"]} />
        <SkillBlock title="Tools"      items={["VSCode  Neovim  Linux", "Figma  XFCE  Arch", "Git  Font Awesome"]} />
        <SkillBlock title="Other"      items={["HTML  CSS  EJS  SCSS", "REST  Jinja"]} />
        <SkillBlock title="Frameworks" items={["React  Vue", "Disnake  Discord.js", "Flask  Express.js"]} />
      </div>
      <div className="absolute left-0 top-20 hidden lg:block opacity-50">
        <DotGrid rows={8} cols={4} />
      </div>
    </section>
  );
}

function AboutMeSection() {
  return (
    <section id="about-me" className="px-6 md:px-12 py-16 flex flex-col gap-8 relative overflow-hidden">
      <SectionHeading label="about-me" withLine />
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex flex-col gap-6 max-w-[520px]">
          <div style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.7" }}>
            <p>Hello, i'm Elias!</p>
            <br />
            <p>
              I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
              websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <br />
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for over a
              year. I have been helping various clients to establish their presence online. I always
              strive to learn about the newest technologies and frameworks.
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

function ContactsSection() {
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
              <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>!Elias#3519</span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon />
              <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>elias@elias.me</span>
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutMeSection />
      <ContactsSection />
    </>
  );
}
