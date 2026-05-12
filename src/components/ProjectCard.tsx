import { MONO, MUTED, WHITE } from "../lib/constants";

export interface ProjectCardProps {
  image: string;
  tags: string;
  title: string;
  description: string;
  liveLink?: string;
  cachedLink?: string;
  githubLink?: string;
}

export function ProjectCard({
  image,
  tags,
  title,
  description,
  liveLink,
  cachedLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col h-full bg-[#1e2229]">
      <div className="relative h-[150px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-[#282c34]/80 px-2 py-1">
          <p style={{ fontFamily: MONO, fontSize: 12, color: MUTED }}>{tags}</p>
        </div>
      </div>
      <div className="border-t border-[#ABB2BF] flex flex-col gap-2 p-3 flex-1">
        <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 18, color: WHITE }}>{title}</p>
        <p style={{ fontFamily: MONO, fontSize: 14, color: MUTED, lineHeight: "1.6" }}>{description}</p>
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
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
          {githubLink !== undefined && (
            <a
              href={githubLink || "#"}
              className="border border-[#ABB2BF] px-3 py-1 text-white hover:bg-[#ABB2BF]/10 transition-colors"
              style={{ fontFamily: MONO, fontSize: 14 }}
            >
              Github →→
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
