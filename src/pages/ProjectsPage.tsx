import { DotGrid } from "../components/DotGrid";
import { PageTitle } from "../components/PageTitle";
import { MONO, ACCENT, MUTED, WHITE } from "../lib/constants";

// ── Asset imports ─────────────────────────────────────────────────────────────
import imgChertNodes  from "../assets/images/project-chert-nodes.png";
import imgKahoot      from "../assets/images/project-kahoot.png";
import imgProtectX    from "../assets/images/project-protect-x.png";
import imgKotikBot    from "../assets/images/project-kotik-bot.png";
import imgPortfolio   from "../assets/images/project-portfolio.png";

// ── Tag chip ─────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-[6px] py-[2px] bg-[#282c34] border border-[#ABB2BF]/40 text-[#ABB2BF]"
      style={{ fontFamily: MONO, fontSize: 11 }}
    >
      {label}
    </span>
  );
}

// ── Section sub-heading ───────────────────────────────────────────────────────
function SubHeading({ label }: { label: string }) {
  return (
    <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 24, color: WHITE }}>
      <span style={{ color: ACCENT }}>#</span>
      {label}
    </p>
  );
}

// ── Project action button ─────────────────────────────────────────────────────
interface ActionButtonProps {
  href: string;
  label: string;
  variant?: "accent" | "muted";
}

function ActionButton({ href, label, variant = "muted" }: ActionButtonProps) {
  const borderColor = variant === "accent" ? "#c778dd" : "#ABB2BF";
  const hoverBg    = variant === "accent" ? "#c778dd/10" : "#ABB2BF/10";
  return (
    <a
      href={href || "#"}
      className={`border px-3 py-1 text-white transition-colors hover:bg-[${hoverBg}]`}
      style={{ fontFamily: MONO, fontSize: 13, borderColor }}
    >
      {label}
    </a>
  );
}

// ── Complete-app project card ─────────────────────────────────────────────────
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
      <div className="relative h-[130px] overflow-hidden" style={{ background: "#1e2229" }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-wrap gap-1 px-2 pt-2">
        {project.tags.map((t) => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-col gap-1 px-2 pt-2 pb-3">
        <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>{project.title}</p>
        <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{project.description}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.liveLink   !== undefined && <ActionButton href={project.liveLink}   label="Live →→"   variant="accent" />}
          {project.cachedLink !== undefined && <ActionButton href={project.cachedLink} label="Cached ▷"  />}
          {project.githubLink !== undefined && <ActionButton href={project.githubLink} label="Github →→" />}
        </div>
      </div>
    </div>
  );
}

// ── Small project card ────────────────────────────────────────────────────────
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
      <div className="flex flex-wrap gap-1 px-2 pt-2 pb-2 border-b border-[#ABB2BF]/40">
        {project.tags.map((t) => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-col gap-1 px-2 pt-2 pb-3 flex-1">
        <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 15, color: WHITE }}>{project.title}</p>
        <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{project.description}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.liveLink   !== undefined && <ActionButton href={project.liveLink}   label="Live →→"   variant="accent" />}
          {project.githubLink !== undefined && <ActionButton href={project.githubLink} label="Github →→" />}
          {project.figmaLink  !== undefined && <ActionButton href={project.figmaLink}  label="Figma →→"  />}
        </div>
      </div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const COMPLETE_APPS: CompleteProject[] = [
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

const SMALL_PROJECTS: SmallProject[] = [
  { tags: ["Discord.js", "TS", "JS"],    title: "Bot boilerplate",       description: "Start creating scalable discord.js bot with typescript in seconds", githubLink: "#" },
  { tags: ["VUE", "CSS", "JS"],          title: "My blog",               description: "Front-end of my future blog website written in vue",                  githubLink: "#" },
  { tags: ["Figma"],                     title: "Chess pro",             description: "Figma landing page about service for viewing chess tournaments",      figmaLink: "#"  },
  { tags: ["Figma"],                     title: "Crash protect website", description: "Figma template for website about anti-raid, anti-crash discord bot",  figmaLink: "#"  },
  { tags: ["HTML", "CSS"],               title: "CSS expirements",       description: "Collection of my different little projects in css",                   liveLink: "#"   },
  { tags: ["Lua", "NeoVim"],             title: "Web Dev nvim config",   description: "Config for neovim perfect for web developer",                         githubLink: "#" },
  { tags: ["Python", "Quart", "HTML"],   title: "Ooku",                  description: "Simple link shortener with auth",                                     liveLink: "#"   },
  { tags: ["Figma"],                     title: "School website",        description: "Figma template website for my school",                                figmaLink: "#"  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative border box top-right */}
      <div className="hidden lg:block absolute right-0 top-24 w-[155px] h-[155px] border border-[#ABB2BF]" />

      <PageTitle slug="projects" subtitle="List of my projects" subtitleColor={MUTED} />

      {/* Complete apps */}
      <section className="mb-14">
        <SubHeading label="complete-apps" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLETE_APPS.map((p, i) => <CompleteCard key={i} project={p} />)}
        </div>
      </section>

      {/* Small projects */}
      <section className="relative">
        <div className="absolute -left-6 top-40 hidden lg:block opacity-40">
          <DotGrid rows={6} cols={4} />
        </div>
        <div className="absolute right-0 bottom-24 hidden lg:block opacity-40">
          <DotGrid rows={6} cols={4} />
        </div>

        <SubHeading label="small-projects" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMALL_PROJECTS.map((p, i) => <SmallCard key={i} project={p} />)}
        </div>
      </section>
    </div>
  );
}
