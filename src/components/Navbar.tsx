import { useState } from "react";
import { Link, useLocation } from "react-router";
import { LogoIcon } from "./icons";
import { MONO, MUTED, BG, WHITE } from "../lib/constants";

const NAV_LINKS = [
  { label: "#home", href: (isHome: boolean) => (isHome ? "#home" : "/") },
  { label: "#works", href: (isHome: boolean) => (isHome ? "#works" : "/#works") },
  { label: "#about-me", href: () => "/about" },
  { label: "#certifications", href: () => "/certifications" },
  { label: "#contacts", href: () => "/contacts" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#ABB2BF]/30"
      style={{ background: BG }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <LogoIcon />
        <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>
          Ouaalane
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const href = link.href(isHome);
          const isExternal = href.startsWith("#");

          return isExternal ? (
            <a
              key={link.label}
              href={href}
              style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={href}
              style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          );
        })}
        <span
          style={{ fontFamily: MONO, fontSize: 16, color: MUTED, cursor: "pointer" }}
          className="hover:text-white transition-colors"
        >
          EN ↓
        </span>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-b border-[#ABB2BF]/30 flex flex-col gap-4 px-6 py-4 md:hidden"
          style={{ background: BG }}
        >
          {NAV_LINKS.map((link) => {
            const href = link.href(isHome);
            const isExternal = href.startsWith("#");

            return isExternal ? (
              <a
                key={link.label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              >
                {link.label}
              </Link>
            );
          })}
          <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>EN ↓</span>
        </div>
      )}
    </nav>
  );
}
