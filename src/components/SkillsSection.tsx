import { SectionHeading } from "./SectionHeading";
import { SkillBlock } from "./SkillBlock";
import { DotGrid } from "./DotGrid";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 flex flex-col gap-8 relative overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-4 w-[155px] h-[155px] border border-[#ABB2BF]" />
      <SectionHeading label="skills" withLine />
      <div className="flex flex-wrap gap-6">
        <SkillBlock title="Languages" items={["C++   C#", "Typescript"]} />
        <SkillBlock title="Databases" items={["microsoft Sql server"]} />
        <SkillBlock title="Tools" items={["Visual Studio 2026", "vscode", "Git  Github"]} />
        <SkillBlock title="Other" items={["HTML  CSS  Js", "REST APIs", "Windows Services", "ADO.net"]} />
        <SkillBlock title="Frameworks" items={["dotnet framework", "dotnet core", "react"]} />
      </div>
      <div className="absolute left-0 top-20 hidden lg:block opacity-50">
        <DotGrid rows={8} cols={4} />
      </div>
    </section>
  );
}
