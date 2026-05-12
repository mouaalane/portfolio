import { BG, MUTED } from "../lib/constants";
import { BRACKET_LEFT_INNER_PATH, BRACKET_LEFT_OUTER_PATH } from "../lib/svgPaths";

export function LeftBracketDecoration() {
  return (
    <div className="relative w-[114px] h-[113px] hidden lg:block">
      <svg className="absolute inset-0" viewBox="0 0 114 113" fill="none" style={{ width: 114, height: 113 }}>
        <path d={BRACKET_LEFT_INNER_PATH} fill={BG} />
      </svg>
      <svg className="absolute inset-0" viewBox="0 0 114 113" fill="none" style={{ width: 114, height: 113 }}>
        <path d={BRACKET_LEFT_OUTER_PATH} fill={MUTED} />
      </svg>
    </div>
  );
}
