import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import svgPaths from "../../imports/Home/svg-6djasanw8c";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "#home", href: isHome ? "#home" : "/" },
    { label: "#works", href: isHome ? "#works" : "/#works" },
    { label: "#about-me", href: "/about" },
    { label: "#certifications", href: "/certifications" },
    { label: "#contacts", href: "/contacts" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#ABB2BF]/30"
      style={{ background: "#282c34" }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="size-4">
          <svg viewBox="0 0 16 16" fill="none" className="size-full">
            <path d={svgPaths.p34deb370} fill="white" />
          </svg>
        </div>
        <span style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 16, color: "#fff" }}>
          Elias
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
            className="hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <span
          style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF", cursor: "pointer" }}
          className="hover:text-white"
        >
          EN ↓
        </span>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
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
          style={{ background: "#282c34" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
            >
              {l.label}
            </a>
          ))}
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}>EN ↓</span>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] px-6 md:px-12 pt-8 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="size-4">
              <svg viewBox="0 0 16 16" fill="none" className="size-full">
                <path d={svgPaths.p34deb370} fill="white" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 16, color: "#fff" }}>
              Elias
            </span>
            <a
              href="mailto:elias@elias-dev.ml"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
              className="ml-2 hover:text-white transition-colors"
            >
              elias@elias-dev.ml
            </a>
          </div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#fff" }}>
            Web designer and front-end developer
          </p>
        </div>

        {/* Right: Media */}
        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500, fontSize: 24, color: "#fff" }}>Media</p>
          <div className="flex items-center gap-3">
            <a href="#" className="size-8 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 21 20" fill="none" className="w-5 h-5">
                <path d={svgPaths.pa8926c0} fill="#ABB2BF" />
              </svg>
            </a>
            <a href="#" className="size-8 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 14 20" fill="none" className="w-4 h-5">
                <path d={svgPaths.p9d5ac00} fill="#ABB2BF" />
              </svg>
            </a>
            <a href="#" className="size-8 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 25 20" fill="none" className="w-6 h-5">
                <path d={svgPaths.p6068900} fill="#ABB2BF" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p
        className="text-center"
        style={{ fontFamily: "'Fira Code', monospace", fontSize: 16, color: "#ABB2BF" }}
      >
        © Copyright 2022. Made by Elias
      </p>
    </footer>
  );
}

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#282c34" }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}