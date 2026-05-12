import { DotGrid } from "../components/DotGrid";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";
import { SmallCard, SmallProject } from "../components/SmallCard";
import { SubHeading } from "../components/SubHeading";
import { MUTED } from "../lib/constants";

// ── Asset imports ─────────────────────────────────────────────────────────────
import imgChertNodes from "../assets/images/project-chert-nodes.png";
import imgKahoot from "../assets/images/project-kahoot.png";
import imgProtectX from "../assets/images/project-protect-x.png";
import imgKotikBot from "../assets/images/project-kotik-bot.png";
import imgPortfolio from "../assets/images/project-portfolio.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const COMPLETE_APPS = [
  {
    image: imgChertNodes,
    tags: "HTML  SCSS  Python  Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    image: imgKahoot,
    tags: "CSS  Express  Node.js  JS",
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    liveLink: "#",
  },
  {
    image: imgProtectX,
    tags: "React  Express  Discord.js  Node.js",
    title: "ProtectX",
    description: "Discord anti-crash bot",
    cachedLink: "#",
  },
  {
    image: imgKotikBot,
    tags: "HTML  CSS  JS",
    title: "Kotik Bot",
    description: "Multi-functional discord bot",
    liveLink: "#",
  },
  {
    image: imgPortfolio,
    tags: "Vue  TS  Less",
    title: "Portfolio",
    description: "You're using it rn",
    githubLink: "#",
  },
];

const SMALL_PROJECTS: SmallProject[] = [
  { tags: ["Discord.js", "TS", "JS"], title: "Bot boilerplate", description: "Start creating scalable discord.js bot with typescript in seconds", githubLink: "#" },
  { tags: ["VUE", "CSS", "JS"], title: "My blog", description: "Front-end of my future blog website written in vue", githubLink: "#" },
  { tags: ["Figma"], title: "Chess pro", description: "Figma landing page about service for viewing chess tournaments", figmaLink: "#" },
  { tags: ["Figma"], title: "Crash protect website", description: "Figma template for website about anti-raid, anti-crash discord bot", figmaLink: "#" },
  { tags: ["HTML", "CSS"], title: "CSS expirements", description: "Collection of my different little projects in css", liveLink: "#" },
  { tags: ["Lua", "NeoVim"], title: "Web Dev nvim config", description: "Config for neovim perfect for web developer", githubLink: "#" },
  { tags: ["Python", "Quart", "HTML"], title: "Ooku", description: "Simple link shortener with auth", liveLink: "#" },
  { tags: ["Figma"], title: "School website", description: "Figma template website for my school", figmaLink: "#" },
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
          {COMPLETE_APPS.map((p, i) => <ProjectCard key={i} {...p} />)}
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
