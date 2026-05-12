import { LogoIcon, GitHubIcon, FigmaIcon, DiscordIcon } from "./icons";
import { MONO, MUTED, WHITE } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] px-6 md:px-12 pt-8 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">

        {/* Identity + email */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <LogoIcon />
            <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>
              mohamed ouaalane
            </span>
            <a
              href="mailto:[EMAIL_ADDRESS]"
              style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              className="ml-2 hover:text-white transition-colors"
            >
              m.ouaalane6520uca.ac.ma
            </a>
          </div>
          <p style={{ fontFamily: MONO, fontSize: 16, color: WHITE }}>
            full-stack developer
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: MONO, fontWeight: 500, fontSize: 24, color: WHITE }}>Media</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
              <GitHubIcon />
            </a>
            <a href="#" aria-label="Figma" className="hover:opacity-70 transition-opacity">
              <FigmaIcon />
            </a>
            <a href="#" aria-label="Discord" className="hover:opacity-70 transition-opacity">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>

      <p
        className="text-center"
        style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
      >
        © Copyright 2026. Made by Mohamed Ouaalane
      </p>
    </footer>
  );
}
