import { DotGrid } from "./DotGrid";
import { SectionHeading } from "./SectionHeading";
import { SkillBlock } from "./SkillBlock";

export function AboutSkillsSection() {
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
