import svgPaths from "../../imports/Projects/svg-mnd7mh17ma";
import imgChertNodes from "../../imports/Projects/43823be62a122f2cb9a8af7917b728e8bd17688c.png";
import imgKahoot from "../../imports/Projects/5e1b101706b3018c4a2ba37fcd5c12f1d01a44f4.png";
import imgProtectX from "../../imports/Projects/effc8fc20acdc065896e8d1184699b4b3010f5c0.png";
import imgKotikBot from "../../imports/Projects/27d169a76f37bf3ef32acb39e52f153def2302b2.png";
import imgPortfolio from "../../imports/Projects/0d21d21c7debb2fb6cf7bc7e8a1fe93caa48e896.png";

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

// ─── Tag chip ────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-[6px] py-[2px] bg-[#282c34] border border-[#ABB2BF]/40 text-[#ABB2BF]"
      style={{ fontFamily: "'Fira Code', monospace", fontSize: 11 }}
    >
      {label}
    </span>
  );
}

// ─── Complete‑app card ───────────────────────────────────────────────────────
interface CompleteProject {
  image: string;
  tags: string[];
  title: string;
  description: string;
  liveLink?: string;
  cachedLink?: string;
  githubLink?: string;
}

function CompleteCard({ project }: { project: CompleteProject }) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col" style={{ minWidth: 0 }}>
      {/* Image area */}
      <div className="relative h-[130px] overflow-hidden" style={{ background: "#1e2229" }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      {/* Tags row */}
      <div className="flex flex-wrap gap-1 px-2 pt-2">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-1 px-2 pt-2 pb-3">
        <p style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 16, color: "#fff" }}>
          {project.title}
        </p>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: "#ABB2BF", lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.liveLink !== undefined && (
            <a
              href={project.liveLink || "#"}
              className="border border-[#c778dd] px-3 py-1 text-white hover:bg-[#c778dd]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Live →→
            </a>
          )}
          {project.cachedLink !== undefined && (
            <a
              href={project.cachedLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Cached ▷
            </a>
          )}
          {project.githubLink !== undefined && (
            <a
              href={project.githubLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Github →→
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Small‑project card ───────────────────────────────────────────────────────
interface SmallProject {
  tags: string[];
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
}

function SmallCard({ project }: { project: SmallProject }) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col" style={{ minWidth: 0 }}>
      {/* Tags */}
      <div className="flex flex-wrap gap-1 px-2 pt-2 pb-2 border-b border-[#ABB2BF]/40">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-1 px-2 pt-2 pb-3 flex-1">
        <p style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 15, color: "#fff" }}>
          {project.title}
        </p>
        <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: "#ABB2BF", lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.liveLink !== undefined && (
            <a
              href={project.liveLink || "#"}
              className="border border-[#c778dd] px-3 py-1 text-white hover:bg-[#c778dd]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Live →→
            </a>
          )}
          {project.githubLink !== undefined && (
            <a
              href={project.githubLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Github →→
            </a>
          )}
          {project.figmaLink !== undefined && (
            <a
              href={project.figmaLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}
            >
              Figma →→
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionLabel({ label }: { label: string }) {
  return (
    <p style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 24, color: "#fff" }}>
      <span style={{ color: "#c778dd" }}>#</span>
      {label}
    </p>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const completeApps: CompleteProject[] = [
  {
    image: imgChertNodes,
    tags: ["HTML", "SCSS", "Python", "Flask"],
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    image: imgKahoot,
    tags: ["CSS", "Express", "Node.js", "JS"],
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    liveLink: "#",
  },
  {
    image: imgProtectX,
    tags: ["React", "Express", "Discord.js", "Node.js"],
    title: "ProtectX",
    description: "Discord anti-crash bot",
    cachedLink: "#",
  },
  {
    image: imgKotikBot,
    tags: ["HTML", "CSS", "JS"],
    title: "Kotik Bot",
    description: "Multi-functional discord bot",
    liveLink: "#",
  },
  {
    image: imgPortfolio,
    tags: ["Vue", "TS", "Less"],
    title: "Portfolio",
    description: "You're using it rn",
    githubLink: "#",
  },
];

const smallProjects: SmallProject[] = [
  {
    tags: ["Discord.js", "TS", "JS"],
    title: "Bot boilerplate",
    description: "Start creating scalable discord-ls bot with typescript in seconds",
    githubLink: "#",
  },
  {
    tags: ["VUE", "CSS", "JS"],
    title: "My blog",
    description: "Front-end of my future blog website written in vue",
    githubLink: "#",
  },
  {
    tags: ["Figma"],
    title: "Chess pro",
    description: "Figma landing page about service for viewing chess tournaments",
    figmaLink: "#",
  },
  {
    tags: ["HTML", "CSS"],
    title: "Crash protect website",
    description: "Figma template for website about anti-raid, anti-crash discord bot",
    figmaLink: "#",
  },
  {
    tags: ["HTML", "CSS"],
    title: "CSS expirements",
    description: "Collection of my different little projects in css",
    liveLink: "#",
  },
  {
    tags: ["Lua", "NeoVim"],
    title: "Web Dev nvim config",
    description: "Config for neovim perfect for web developer",
    githubLink: "#",
  },
  {
    tags: ["Python", "Quart", "HTML"],
    title: "Ooku",
    description: "Simple link shortener with auth",
    liveLink: "#",
  },
  {
    tags: ["Figma"],
    title: "School website",
    description: "Figma template website for my school",
    figmaLink: "#",
  },
];

// ─── Projects Page ────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Page title */}
      <div className="mb-10">
        <h1
          style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 32, color: "#fff" }}
        >
          <span style={{ color: "#c778dd" }}>/</span>projects
        </h1>
        <p
          className="mt-1"
          style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
        >
          List of my projects
        </p>
      </div>

      {/* ── Complete apps ────────────────────────────────────────────────── */}
      <section className="mb-14">
        <SectionLabel label="complete-apps" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completeApps.map((p, i) => (
            <CompleteCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* ── Small projects ───────────────────────────────────────────────── */}
      <section className="relative">
        {/* Decorative dot grids */}
        <div className="absolute -left-6 top-40 hidden lg:block opacity-40">
          <DotGrid rows={6} cols={4} />
        </div>
        <div className="absolute right-0 bottom-24 hidden lg:block opacity-40">
          <DotGrid rows={6} cols={4} />
        </div>

        <SectionLabel label="small-projects" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((p, i) => (
            <SmallCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* Decorative border box */}
      <div className="hidden lg:block absolute right-0 top-24 w-[155px] h-[155px] border border-[#ABB2BF]" />
    </div>
  );
}
