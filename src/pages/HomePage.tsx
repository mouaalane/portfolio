import { HeroSection } from "../components/HeroSection";
import { QuoteSection } from "../components/QuoteSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { ContactsSection } from "../components/ContactsSection";
import { ProjectCardProps } from "../components/ProjectCard";

// ── Asset imports for data ────────────────────────────────────────────────────
import imgChertNodes   from "../assets/images/project-chert-nodes.png";
import imgProtectX     from "../assets/images/project-protect-x.png";
import imgKahoot       from "../assets/images/project-kahoot.png";

// ── Featured projects data ────────────────────────────────────────────────────
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection projects={FEATURED_PROJECTS} />
      <SkillsSection />
      <AboutMeSection />
      <ContactsSection />
    </div>
  );
}
