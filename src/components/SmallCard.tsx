import { Tag } from "./Tag";
import { MONO, WHITE, MUTED } from "../lib/constants";

export interface SmallProject {
  tags: string[];
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
}

interface SmallCardProps {
  project: SmallProject;
}

export function SmallCard({ project }: SmallCardProps) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col h-full bg-[#1e2229]">
      <div className="flex flex-wrap gap-1 px-2 pt-2 pb-2 border-b border-[#ABB2BF]/40">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      <div className="flex flex-col gap-1 px-2 pt-2 pb-3 flex-1">
        <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 15, color: WHITE }}>
          {project.title}
        </p>
        <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED, lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {project.liveLink !== undefined && (
            <a
              href={project.liveLink || "#"}
              className="border border-[#c778dd] px-3 py-1 text-white hover:bg-[#c778dd]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 13 }}
            >
              Live →→
            </a>
          )}
          {project.githubLink !== undefined && (
            <a
              href={project.githubLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 13 }}
            >
              Github →→
            </a>
          )}
          {project.figmaLink !== undefined && (
            <a
              href={project.figmaLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 13 }}
            >
              Figma →→
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
