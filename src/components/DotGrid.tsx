/**
 * DotGrid — decorative dot-pattern background element.
 * Renders a CSS grid of small circles, used as visual accents throughout the portfolio.
 */
interface DotGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export function DotGrid({ rows = 5, cols = 5, className }: DotGridProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 4px)`,
        gap: "16px",
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="size-[4px] rounded-full bg-[#ABB2BF]" />
      ))}
    </div>
  );
}
