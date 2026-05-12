import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { LogoIcon, GitHubIcon, FigmaIcon, DiscordIcon } from "../components/icons";
import { MONO, MUTED, BG, WHITE } from "../lib/constants";

// ── Navigation links ──────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "#home",           href: (isHome: boolean) => (isHome ? "#home" : "/") },
  { label: "#works",          href: (isHome: boolean) => (isHome ? "#works" : "/#works") },
  { label: "#about-me",       href: () => "/about" },
  { label: "#certifications", href: () => "/certifications" },
  { label: "#contacts",       href: () => "/contacts" },
] as const;

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
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
          Elias
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href(isHome)}
            style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href(isHome)}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
            >
              {link.label}
            </a>
          ))}
          <span style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}>EN ↓</span>
        </div>
      )}
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] px-6 md:px-12 pt-8 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">

        {/* Identity + email */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <LogoIcon />
            <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>
              Elias
            </span>
            <a
              href="mailto:elias@elias-dev.ml"
              style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
              className="ml-2 hover:text-white transition-colors"
            >
              elias@elias-dev.ml
            </a>
          </div>
          <p style={{ fontFamily: MONO, fontSize: 16, color: WHITE }}>
            Web designer and front-end developer
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
        © Copyright 2022. Made by Elias
      </p>
    </footer>
  );
}

// ── Root layout ───────────────────────────────────────────────────────────────
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
