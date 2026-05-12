import { DotGrid } from "../components/DotGrid";
import { SectionHeading } from "../components/SectionHeading";
import { PageTitle } from "../components/PageTitle";
import { MONO, ACCENT, MUTED, BG, WHITE } from "../lib/constants";
import {
  BRACKET_LEFT_INNER_PATH,
  BRACKET_LEFT_OUTER_PATH,
  BRACKET_RIGHT_INNER_PATH,
  BRACKET_RIGHT_OUTER_PATH,
} from "../lib/svgPaths";

// ── Asset imports ─────────────────────────────────────────────────────────────
import imgProfile from "../assets/images/profile.png";

// ── Skill block ───────────────────────────────────────────────────────────────
function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col gap-2 py-2 shrink-0">
      <p
        className="px-2 border-b border-[#ABB2BF] pb-2 whitespace-nowrap"
        style={{ fontFamily: MONO, fontWeight: 600, fontSize: 16, color: WHITE }}
      >
        {title}
      </p>
      <div className="px-2 flex flex-col gap-1" style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}>
        {items.map((item, i) => (
          <p key={i} className="whitespace-nowrap">{item}</p>
        ))}
      </div>
    </div>
  );
}

// ── Fun fact tag ──────────────────────────────────────────────────────────────
function FunFact({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border border-[#ABB2BF] px-3 py-1 cursor-default hover:border-[#c778dd] transition-colors"
      style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}
    >
      {children}
    </span>
  );
}

// ── Bracket decorations (from Figma assets) ───────────────────────────────────
function LeftBracketDecoration() {
  return (
    <div className="relative w-[114px] h-[113px] hidden lg:block">
      <svg className="absolute inset-0" viewBox="0 0 114 113" fill="none" style={{ width: 114, height: 113 }}>
        <path d={BRACKET_LEFT_INNER_PATH} fill={BG} />
      </svg>
      <svg className="absolute inset-0" viewBox="0 0 114 113" fill="none" style={{ width: 114, height: 113 }}>
        <path d={BRACKET_LEFT_OUTER_PATH} fill={MUTED} />
      </svg>
    </div>
  );
}

function RightBracketDecoration() {
  return (
    <div className="relative w-[114px] h-[85px] hidden lg:block">
      <svg className="absolute inset-0" viewBox="0 0 114 85" fill="none" style={{ width: 114, height: 85 }}>
        <path d={BRACKET_RIGHT_INNER_PATH} fill={BG} />
      </svg>
      <svg className="absolute inset-0" viewBox="0 0 114 85" fill="none" style={{ width: 114, height: 85 }}>
        <path d={BRACKET_RIGHT_OUTER_PATH} fill={MUTED} />
      </svg>
    </div>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────
function BioSection() {
  return (
    <section className="relative mb-20">
      {/* Decorative border box top-right */}
      <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text */}
        <div
          className="flex flex-col gap-4 max-w-[520px] relative"
          style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.7" }}
        >
          <div className="absolute -left-12 top-4 hidden lg:block opacity-50">
            <DotGrid rows={4} cols={3} />
          </div>
          <p>Hello, i'm Elias!</p>
          <p>
            I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
            websites from scratch and raise them into modern user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my passion for over a
            year. I have been helping various clients to establish their presence online. I always
            strive to learn about the newest technologies and frameworks.
          </p>
        </div>

        {/* Profile photo + dot decorations */}
        <div className="relative hidden md:block shrink-0 ml-auto">
          <div className="absolute -left-10 top-4 z-0">
            <DotGrid rows={5} cols={5} />
          </div>
          <div className="absolute -right-6 bottom-4 z-0">
            <DotGrid rows={5} cols={5} />
          </div>
          <img
            src={imgProfile}
            alt="Elias"
            className="relative z-10 w-[260px] lg:w-[300px] object-cover object-top"
            style={{ maxHeight: 400 }}
          />
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="mb-20 relative">
      <div className="hidden lg:block absolute right-0 top-8 opacity-50">
        <DotGrid rows={4} cols={4} />
      </div>

      <SectionHeading label="skills" />

      <div className="mt-6 flex flex-wrap gap-0 overflow-x-auto">
        <SkillBlock title="Languages"  items={["TypeScript  Lua", "Python  JavaScript"]} />
        <SkillBlock title="Other"      items={["HTML  CSS  EJS  SCSS", "REST  Jinja"]} />
        <SkillBlock title="Tools"      items={["VSCode  Neovim  Linux", "Figma  XFCE  Arch", "Git  Font Awesome", "KDE  fish"]} />
        <SkillBlock title="Databases"  items={["SQLite  PostgreSQL", "Mongo"]} />
        <SkillBlock title="Frameworks" items={["React  Vue", "Disnake  Discord.js", "Flask  Express.js"]} />
      </div>
    </section>
  );
}

function FunFactsSection() {
  return (
    <section className="relative">
      {/* Decorative dot grids */}
      <div className="hidden lg:block absolute -left-6 top-32 opacity-50">
        <DotGrid rows={5} cols={5} />
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 opacity-50">
        <DotGrid rows={5} cols={5} />
      </div>

      {/* Bracket decoration */}
      <div className="absolute right-0 top-16 hidden lg:block">
        <LeftBracketDecoration />
      </div>

      <SectionHeading label="my-fun-facts" />

      <div className="mt-6 flex flex-wrap gap-3">
        <FunFact>I like winter more than summer</FunFact>
        <FunFact>I often bike with my friends</FunFact>
        <FunFact>
          I like <strong style={{ color: WHITE }}>pizza</strong> and{" "}
          <strong style={{ color: WHITE }}>pasta</strong>
        </FunFact>
        <FunFact>
          I was in <strong style={{ color: WHITE }}>Egypt</strong>,{" "}
          <strong style={{ color: WHITE }}>Poland</strong> and{" "}
          <strong style={{ color: WHITE }}>Turkey</strong>
        </FunFact>
        <FunFact>
          My favorite movie is <strong style={{ color: WHITE }}>The Green Mile</strong>
        </FunFact>
        <FunFact>I am still in school</FunFact>
        <FunFact>I don't have any siblings</FunFact>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      <PageTitle slug="about-me" subtitle="Who am i?" subtitleColor={MUTED} />
      <BioSection />
      <SkillsSection />
      <FunFactsSection />
    </div>
  );
}
