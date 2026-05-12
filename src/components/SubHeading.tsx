import { MONO, WHITE, ACCENT } from "../lib/constants";

interface SubHeadingProps {
  label: string;
}

export function SubHeading({ label }: SubHeadingProps) {
  return (
    <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 24, color: WHITE }}>
      <span style={{ color: ACCENT }}>#</span>
      {label}
    </p>
  );
}
