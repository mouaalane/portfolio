import { MONO, ACCENT, WHITE } from "../lib/constants";

/**
 * PageTitle — the `/page-name` heading shown at the top of inner pages.
 *
 * @param slug     - text rendered after the `/` (e.g. "about-me")
 * @param subtitle - smaller descriptor line beneath the title
 */
interface PageTitleProps {
  slug: string;
  subtitle?: string;
  subtitleColor?: string;
}

export function PageTitle({ slug, subtitle, subtitleColor = WHITE }: PageTitleProps) {
  return (
    <div className="mb-10">
      <h1 style={{ fontFamily: MONO, fontWeight: 500, fontSize: 32, color: WHITE }}>
        <span style={{ color: ACCENT }}>/</span>
        {slug}
      </h1>
      {subtitle && (
        <p className="mt-1" style={{ fontFamily: MONO, fontSize: 16, color: subtitleColor }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
