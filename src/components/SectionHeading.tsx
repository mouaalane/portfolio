import { MONO, ACCENT, WHITE } from "../lib/constants";

/**
 * SectionHeading — renders `#label` with an optional decorative purple line.
 *
 * @param label   - text after the `#` symbol
 * @param withLine - when true, a full-width accent line extends from the heading (used on HomePage)
 */
interface SectionHeadingProps {
  label: string;
  withLine?: boolean;
}

export function SectionHeading({ label, withLine = false }: SectionHeadingProps) {
  return (
    <div className={withLine ? "flex items-center gap-4" : undefined}>
      <h2
        className="shrink-0 whitespace-nowrap"
        style={{ fontFamily: MONO, fontWeight: 500, fontSize: 32, color: WHITE }}
      >
        <span style={{ color: ACCENT }}>#</span>
        {label}
      </h2>
      {withLine && (
        <div className="h-px flex-1" style={{ background: ACCENT, minWidth: 40 }} />
      )}
    </div>
  );
}
