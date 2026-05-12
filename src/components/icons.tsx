/**
 * icons.tsx — all SVG icon components used across the portfolio.
 * Each component accepts an optional `className` for sizing/positioning.
 * Fill color is always #ABB2BF (muted) unless overridden via CSS.
 */
import {
  LOGO_PATH,
  GITHUB_PATH,
  FIGMA_PATH,
  DISCORD_PATH,
  EMAIL_PATH,
  DRIBBLE_PATH,
  TWITTER_PATH,
} from "../lib/svgPaths";

interface IconProps {
  className?: string;
  fill?: string;
}

const FILL = "#ABB2BF";

export function LogoIcon({ className = "size-4", fill = "#fff" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path d={LOGO_PATH} fill={fill} />
    </svg>
  );
}

export function GitHubIcon({ className = "w-5 h-5", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 21 20" fill="none" className={className}>
      <path d={GITHUB_PATH} fill={fill} />
    </svg>
  );
}

export function FigmaIcon({ className = "w-4 h-5", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 14 20" fill="none" className={className}>
      <path d={FIGMA_PATH} fill={fill} />
    </svg>
  );
}

export function DiscordIcon({ className = "w-5 h-4", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 25 20" fill="none" className={className}>
      <path d={DISCORD_PATH} fill={fill} />
    </svg>
  );
}

export function EmailIcon({ className = "w-5 h-4", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 23 17" fill="none" className={className}>
      <path d={EMAIL_PATH} fill={fill} />
    </svg>
  );
}

export function DribbleIcon({ className = "w-6 h-6", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 23 23" fill="none" className={className}>
      <path d={DRIBBLE_PATH} fill={fill} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-5 h-4", fill = FILL }: IconProps) {
  return (
    <svg viewBox="0 0 23 19" fill="none" className={className}>
      <path d={TWITTER_PATH} fill={fill} />
    </svg>
  );
}
