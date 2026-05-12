import { DotGrid } from "../components/DotGrid";
import { PageTitle } from "../components/PageTitle";
import { CertCard, Cert } from "../components/CertCard";
import { MONO, ACCENT, MUTED } from "../lib/constants";

// ── Certificate data ──────────────────────────────────────────────────────────
const CERTS: Cert[] = [
  { id: 1, title: "Cours1-Programming Foundations-Level1", issuer: "ProgrammingAdvices.com", category: "Fundamental Concepts", date: "Jan 2024", credentialId: "UC-4a9b2c3d", url: "#", color: "#c778dd" },
  { id: 2, title: "Cours2-Algorithme And Probleme Solving Level 1", issuer: "ProgrammingAdvices.com", category: "problem Solving ", date: "Sep 2023", credentialId: "FCC-JS-ADS-2023", url: "#", color: "#61afef" },
  { id: 3, title: "Cours3-C++ Level1", issuer: "ProgrammingAdvices.com", category: "C++", date: "Jun 2023", credentialId: "FCC-RWD-2023", url: "#", color: "#61afef" },
  { id: 4, title: "Cours4-Solution Algorithme and Probleme Solving 1", issuer: "ProgrammingAdvices.com", category: "problem Solving", date: "Mar 2023", credentialId: "CRS-PY4E-7X2K", url: "#", color: "#e5c07b" },
  { id: 5, title: "Cours5-Algorithme and Probleme Solving Level 2", issuer: "ProgrammingAdvices.com", category: "problem Solving", date: "Nov 2022", credentialId: "EDX-CS50-2022", url: "#", color: "#98c379" },
  { id: 6, title: "Cours6-C++ Level 2", issuer: "ProgrammingAdvices.com", category: "C++", date: "Aug 2022", credentialId: "UC-7f1e8b4c", url: "#", color: "#c778dd" },
  { id: 7, title: "Cours7-Alorithm and Probleme Solving Level 3", issuer: "ProgrammingAdvices.com", category: "problem Solving", date: "May 2022", credentialId: "UC-2d3e9f1a", url: "#", color: "#c778dd" },
  { id: 8, title: "Cours8-Alorithm and Probleme Solving Level 4", issuer: "ProgrammingAdvices.com", category: "Fundamental Concepts", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 9, title: "Cours9-ProgrammingFundations2 Networks", issuer: "ProgrammingAdvices.com", category: "Fundamental Concepts", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 10, title: "Cours10-OPP as it should Be", issuer: "ProgrammingAdvices.com", category: "OOP", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 11, title: "Cours11-OPP as it should Be Applications", issuer: "ProgrammingAdvices.com", category: "OOP", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 12, title: "Cours12-Data Structures - Level1 ", issuer: "ProgrammingAdvices.com", category: "Data Structures", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 13, title: "Cours13- Algorithms & Problem Solving Level 5", issuer: "ProgrammingAdvices.com", category: "Fundamental Concepts", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 14, title: "Cours-14 C# Level 1", issuer: "ProgrammingAdvices.com", category: "C#", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 15, title: "Cours-15 DataBase Level1", issuer: "ProgrammingAdvices.com", category: "Data Structures", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 16, title: "Cours-16 OOP IN C#", issuer: "ProgrammingAdvices.com", category: "C#", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 17, title: "Cours-17 Database sql(Projects and practice)", issuer: "ProgrammingAdvices.com", category: "Data Structures", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 18, title: "Cours-18 C# & Database Connectivity", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 19, title: "Cours-19-FullProject", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 20, title: "Cours-20-C# Level 2", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 21, title: "Cours-21 - Database Level2 - Concepts & T-SQL", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 22, title: "Cours-22-Data Structures-Level-2-In-C#", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 23, title: "Cours-23-Algorithms Level 6", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 24, title: "Cours-24-Windows Services", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 25, title: "Introduction to RESTful APIs", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 26, title: "HTML-Deep-Dive", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 27, title: "CSS-Foundations-Deep-Dive", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },
  { id: 28, title: "Start Coding with JavaScript: Beginner’s Essentials Guide", issuer: "ProgrammingAdvices.com", category: "Tools", date: "Feb 2022", credentialId: "UC-5c6a7b8e", url: "#", color: "#c778dd" },

];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CertificationsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* ── Header ── */}
      <div className="mb-12 relative">
        <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />
        <PageTitle slug="certifications" subtitle="My completed courses and credentials" subtitleColor={MUTED} />
        <div className="mt-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#ABB2BF]/30" />
          <span style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>{CERTS.length} certificates</span>
        </div>
      </div>

      {/* Decorative dot grids */}
      <div className="hidden lg:block absolute left-0 top-48 opacity-40"><DotGrid rows={5} cols={4} /></div>
      <div className="hidden lg:block absolute right-0 bottom-48 opacity-40"><DotGrid rows={5} cols={4} /></div>

      {/* Cert grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
        {CERTS.map((cert) => <CertCard key={cert.id} {...cert} />)}
      </div>

      {/* Bottom note */}
      <div className="mt-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#ABB2BF]/30" />
        <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>
          <span style={{ color: ACCENT }}>// </span>always learning
        </p>
        <div className="h-px flex-1 bg-[#ABB2BF]/30" />
      </div>
    </div>
  );
}
