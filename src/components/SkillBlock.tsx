import { MONO, MUTED, WHITE } from "../lib/constants";

interface SkillBlockProps {
  title: string;
  items: string[];
  className?: string;
}

export function SkillBlock({ title, items, className }: SkillBlockProps) {
  return (
    <div className={`border border-[#ABB2BF] flex flex-col gap-2 py-2 min-w-[150px] ${className || ""}`}>
      <p
        className="px-2 border-b border-[#ABB2BF] pb-2"
        style={{ fontFamily: MONO, fontWeight: 600, fontSize: 16, color: WHITE }}
      >
        {title}
      </p>
      <div
        className="px-2 flex flex-col gap-2"
        style={{ fontFamily: MONO, fontWeight: 400, fontSize: 16, color: MUTED }}
      >
        {items.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </div>
  );
}
