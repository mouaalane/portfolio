import { DotGrid } from "../components/DotGrid";
import { PageTitle } from "../components/PageTitle";
import { MONO, ACCENT, MUTED, WHITE } from "../lib/constants";

// ── Certificate data ──────────────────────────────────────────────────────────
const CERTS = [
  { id: 1, title: "React — The Complete Guide",                     issuer: "Udemy",            category: "Frontend",          date: "Jan 2024", credentialId: "UC-4a9b2c3d",    url: "#", color: "#c778dd" },
  { id: 2, title: "JavaScript Algorithms and Data Structures",      issuer: "freeCodeCamp",     category: "Languages",         date: "Sep 2023", credentialId: "FCC-JS-ADS-2023", url: "#", color: "#61afef" },
  { id: 3, title: "Responsive Web Design",                          issuer: "freeCodeCamp",     category: "Frontend",          date: "Jun 2023", credentialId: "FCC-RWD-2023",    url: "#", color: "#61afef" },
  { id: 4, title: "Python for Everybody",                           issuer: "Coursera",         category: "Languages",         date: "Mar 2023", credentialId: "CRS-PY4E-7X2K",  url: "#", color: "#e5c07b" },
  { id: 5, title: "CS50: Introduction to Computer Science",         issuer: "Harvard / edX",   category: "Computer Science",  date: "Nov 2022", credentialId: "EDX-CS50-2022",   url: "#", color: "#98c379" },
  { id: 6, title: "The Complete Node.js Developer Course",          issuer: "Udemy",            category: "Backend",           date: "Aug 2022", credentialId: "UC-7f1e8b4c",    url: "#", color: "#c778dd" },
  { id: 7, title: "SQL and PostgreSQL: The Complete Developer's Guide", issuer: "Udemy",        category: "Databases",         date: "May 2022", credentialId: "UC-2d3e9f1a",    url: "#", color: "#c778dd" },
  { id: 8, title: "Git & GitHub Bootcamp",                          issuer: "Udemy",            category: "Tools",             date: "Feb 2022", credentialId: "UC-5c6a7b8e",    url: "#", color: "#c778dd" },
] as const;

type Cert = typeof CERTS[number];

// ── Sub-components ────────────────────────────────────────────────────────────
function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="border border-[#c778dd] px-2 py-0.5" style={{ fontFamily: MONO, fontSize: 12, color: ACCENT }}>
      {label}
    </span>
  );
}

function IssuerIcon({ issuer, color }: { issuer: string; color: string }) {
  return (
    <div className="size-10 flex items-center justify-center shrink-0 border" style={{ borderColor: color }}>
      <span style={{ fontFamily: MONO, fontWeight: 700, fontSize: 18, color }}>{issuer[0]}</span>
    </div>
  );
}

function CertCard({ title, issuer, category, date, credentialId, url, color }: Cert) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col hover:border-[#c778dd] transition-colors group">
      <div className="border-b border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3 flex items-center gap-3">
        <IssuerIcon issuer={issuer} color={color} />
        <div className="flex flex-col gap-1 min-w-0">
          <p className="truncate" style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}>{title}</p>
          <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>{issuer}</p>
        </div>
      </div>
      <div className="px-4 py-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CategoryBadge label={category} />
          <span style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>{date}</span>
        </div>
        <p style={{ fontFamily: MONO, fontSize: 12, color: MUTED }}>
          <span style={{ color: ACCENT }}>ID: </span>{credentialId}
        </p>
      </div>
      <div className="border-t border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3">
        <a href={url} className="inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: MONO, fontSize: 14, color: ACCENT }}>
          View credential <span>→</span>
        </a>
      </div>
    </div>
  );
}

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
