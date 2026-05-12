import imgHero from "../../imports/About/54460c6b07a60652048526012507cff338176e45.png";
import svgPaths from "../../imports/About/svg-4uqx1w8by4";

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
    <h2 style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 32, color: "#fff" }}>
      <span style={{ color: "#c778dd" }}>#</span>{label}
    </h2>
  );
}

// ─── Skill block ─────────────────────────────────────────────────────────────
function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col gap-2 py-2 shrink-0">
      <p
        className="px-2 border-b border-[#ABB2BF] pb-2 whitespace-nowrap"
        style={{ fontFamily: "'Fira Code', monospace", fontWeight: 600, fontSize: 16, color: "#fff" }}
      >
        {title}
      </p>
      <div
        className="px-2 flex flex-col gap-1"
        style={{ fontFamily: "'Fira Code', monospace", fontSize: 14, color: "#ABB2BF" }}
      >
        {items.map((item, i) => (
          <p key={i} className="whitespace-nowrap">{item}</p>
        ))}
      </div>
    </div>
  );
}

// ─── Fun fact tag ─────────────────────────────────────────────────────────────
function FunFact({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border border-[#ABB2BF] px-3 py-1 cursor-default hover:border-[#c778dd] transition-colors"
      style={{ fontFamily: "'Fira Code', monospace", fontSize: 14, color: "#ABB2BF" }}
    >
      {children}
    </span>
  );
}

// ─── Decorative bracket SVG (from Figma assets) ──────────────────────────────
function BracketDecoration() {
  return (
    <div className="relative w-[114px] h-[113px] hidden lg:block">
      {/* Filled inner */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 114 113"
        fill="none"
        style={{ width: 114, height: 113 }}
      >
        <path d={svgPaths.p26bafe80} fill="#282c34" />
      </svg>
      {/* Outline */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 114 113"
        fill="none"
        style={{ width: 114, height: 113 }}
      >
        <path d={svgPaths.p2ea05e80} fill="#ABB2BF" />
      </svg>
    </div>
  );
}

function BracketDecorationRight() {
  return (
    <div className="relative w-[114px] h-[85px] hidden lg:block">
      <svg
        className="absolute inset-0"
        viewBox="0 0 114 85"
        fill="none"
        style={{ width: 114, height: 85 }}
      >
        <path d={svgPaths.p11908600} fill="#282c34" />
      </svg>
      <svg
        className="absolute inset-0"
        viewBox="0 0 114 85"
        fill="none"
        style={{ width: 114, height: 85 }}
      >
        <path d={svgPaths.pedb9e70} fill="#ABB2BF" />
      </svg>
    </div>
  );
}

// ─── About Page ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="mb-10">
        <h1 style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 32, color: "#fff" }}>
          <span style={{ color: "#c778dd" }}>/</span>about-me
        </h1>
        <p
          className="mt-1"
          style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
        >
          Who am i?
        </p>
      </div>

      {/* ── Bio section ─────────────────────────────────────────── */}
      <section className="relative mb-20">
        {/* Decorative border box top-right */}
        <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Text */}
          <div
            className="flex flex-col gap-4 max-w-[520px] relative"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF", lineHeight: "1.7" }}
          >
            {/* Dot grid on the left */}
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

          {/* Photo + decorations */}
          <div className="relative hidden md:block shrink-0 ml-auto">
            {/* dot grid behind image top-left */}
            <div className="absolute -left-10 top-4 z-0">
              <DotGrid rows={5} cols={5} />
            </div>
            {/* dot grid behind image bottom-right */}
            <div className="absolute -right-6 bottom-4 z-0">
              <DotGrid rows={5} cols={5} />
            </div>
            <img
              src={imgHero}
              alt="Elias"
              className="relative z-10 w-[260px] lg:w-[300px] object-cover object-top"
              style={{ maxHeight: 400 }}
            />
          </div>
        </div>
      </section>

      {/* ── Skills section ──────────────────────────────────────── */}
      <section className="mb-20 relative">
        {/* Dot grid top-right */}
        <div className="hidden lg:block absolute right-0 top-8 opacity-50">
          <DotGrid rows={4} cols={4} />
        </div>

        <SectionLabel label="skills" />

        <div className="mt-6 flex flex-wrap gap-0 overflow-x-auto">
          <SkillBlock
            title="Languages"
            items={["TypeScript  Lua", "Python  JavaScript"]}
          />
          <SkillBlock
            title="Other"
            items={["HTML  CSS  EJS  SCSS", "REST  Jinja"]}
          />
          <SkillBlock
            title="Tools"
            items={["VSCode  Neovim  Linux", "Figma  XFCE  Arch", "Git  Font Awesome", "KDE  fish"]}
          />
          <SkillBlock
            title="Databases"
            items={["SQLite  PostgreSQL", "Mongo"]}
          />
          <SkillBlock
            title="Frameworks"
            items={["React  Vue", "Disnake  Discord.js", "Flask  Express.js"]}
          />
        </div>
      </section>

      {/* ── Fun facts section ───────────────────────────────────── */}
      <section className="relative">
        {/* Dot grid bottom-left */}
        <div className="hidden lg:block absolute -left-6 top-32 opacity-50">
          <DotGrid rows={5} cols={5} />
        </div>
        {/* Dot grid bottom-right */}
        <div className="hidden lg:block absolute right-0 bottom-0 opacity-50">
          <DotGrid rows={5} cols={5} />
        </div>
        {/* Bracket decoration right */}
        <div className="absolute right-0 top-16 hidden lg:block">
          <BracketDecoration />
        </div>

        <SectionLabel label="my-fun-facts" />

        <div className="mt-6 flex flex-wrap gap-3">
          <FunFact>I like winter more than summer</FunFact>
          <FunFact>I often bike with my friends</FunFact>
          <FunFact>
            I like <strong style={{ color: "#fff" }}>pizza</strong> and{" "}
            <strong style={{ color: "#fff" }}>pasta</strong>
          </FunFact>
          <FunFact>
            I was in <strong style={{ color: "#fff" }}>Egypt</strong>,{" "}
            <strong style={{ color: "#fff" }}>Poland</strong> and{" "}
            <strong style={{ color: "#fff" }}>Turkey</strong>
          </FunFact>
          <FunFact>
            My favorite movie is{" "}
            <strong style={{ color: "#fff" }}>The Green Mile</strong>
          </FunFact>
          <FunFact>I am still in school</FunFact>
          <FunFact>I don't have any siblings</FunFact>
        </div>
      </section>
    </div>
  );
}
