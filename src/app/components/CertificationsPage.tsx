const mono = "'Fira Code', monospace";

// ─── Dot grid ────────────────────────────────────────────────────────────────
function DotGrid({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div
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

// ─── Certificate data ─────────────────────────────────────────────────────────
const certs = [
  {
    id: 1,
    title: "React — The Complete Guide",
    issuer: "Udemy",
    category: "Frontend",
    date: "Jan 2024",
    credentialId: "UC-4a9b2c3d",
    url: "#",
    color: "#c778dd",
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    category: "Languages",
    date: "Sep 2023",
    credentialId: "FCC-JS-ADS-2023",
    url: "#",
    color: "#61afef",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    category: "Frontend",
    date: "Jun 2023",
    credentialId: "FCC-RWD-2023",
    url: "#",
    color: "#61afef",
  },
  {
    id: 4,
    title: "Python for Everybody",
    issuer: "Coursera",
    category: "Languages",
    date: "Mar 2023",
    credentialId: "CRS-PY4E-7X2K",
    url: "#",
    color: "#e5c07b",
  },
  {
    id: 5,
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard / edX",
    category: "Computer Science",
    date: "Nov 2022",
    credentialId: "EDX-CS50-2022",
    url: "#",
    color: "#98c379",
  },
  {
    id: 6,
    title: "The Complete Node.js Developer Course",
    issuer: "Udemy",
    category: "Backend",
    date: "Aug 2022",
    credentialId: "UC-7f1e8b4c",
    url: "#",
    color: "#c778dd",
  },
  {
    id: 7,
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    issuer: "Udemy",
    category: "Databases",
    date: "May 2022",
    credentialId: "UC-2d3e9f1a",
    url: "#",
    color: "#c778dd",
  },
  {
    id: 8,
    title: "Git & GitHub Bootcamp",
    issuer: "Udemy",
    category: "Tools",
    date: "Feb 2022",
    credentialId: "UC-5c6a7b8e",
    url: "#",
    color: "#c778dd",
  },
];

// ─── Category badge ───────────────────────────────────────────────────────────
function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="border border-[#c778dd] px-2 py-0.5"
      style={{ fontFamily: mono, fontSize: 12, color: "#c778dd" }}
    >
      {label}
    </span>
  );
}

// ─── Issuer initial icon ──────────────────────────────────────────────────────
function IssuerIcon({ issuer, color }: { issuer: string; color: string }) {
  const initial = issuer[0].toUpperCase();
  return (
    <div
      className="size-10 flex items-center justify-center shrink-0 border"
      style={{ borderColor: color }}
    >
      <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 18, color }}>{initial}</span>
    </div>
  );
}

// ─── Cert card ────────────────────────────────────────────────────────────────
function CertCard({
  title,
  issuer,
  category,
  date,
  credentialId,
  url,
  color,
}: (typeof certs)[0]) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col hover:border-[#c778dd] transition-colors group">
      {/* Top bar */}
      <div className="border-b border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3 flex items-center gap-3">
        <IssuerIcon issuer={issuer} color={color} />
        <div className="flex flex-col gap-1 min-w-0">
          <p
            className="truncate"
            style={{ fontFamily: mono, fontWeight: 500, fontSize: 16, color: "#fff" }}
          >
            {title}
          </p>
          <p style={{ fontFamily: mono, fontSize: 13, color: "#ABB2BF" }}>{issuer}</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CategoryBadge label={category} />
          <span style={{ fontFamily: mono, fontSize: 13, color: "#ABB2BF" }}>{date}</span>
        </div>

        <p style={{ fontFamily: mono, fontSize: 12, color: "#ABB2BF" }}>
          <span style={{ color: "#c778dd" }}>ID: </span>
          {credentialId}
        </p>
      </div>

      {/* Footer link */}
      <div className="border-t border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3">
        <a
          href={url}
          className="inline-flex items-center gap-1 hover:gap-2 transition-all"
          style={{ fontFamily: mono, fontSize: 14, color: "#c778dd" }}
        >
          View credential
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

// ─── Certifications Page ──────────────────────────────────────────────────────
export default function CertificationsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">

      {/* ── Page header ─────────────────────────────────────────────── */}
      <div className="mb-12 relative">
        {/* Decorative border box top-right */}
        <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />

        <h1 style={{ fontFamily: mono, fontWeight: 500, fontSize: 32, color: "#fff" }}>
          <span style={{ color: "#c778dd" }}>/</span>certifications
        </h1>
        <p className="mt-1" style={{ fontFamily: mono, fontSize: 16, color: "#ABB2BF" }}>
          My completed courses and credentials
        </p>

        {/* Decorative horizontal rule */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#ABB2BF]/30" />
          <span style={{ fontFamily: mono, fontSize: 13, color: "#ABB2BF" }}>
            {certs.length} certificates
          </span>
        </div>
      </div>

      {/* ── Dot grid decorations ─────────────────────────────────────── */}
      <div className="hidden lg:block absolute left-0 top-48 opacity-40">
        <DotGrid rows={5} cols={4} />
      </div>
      <div className="hidden lg:block absolute right-0 bottom-48 opacity-40">
        <DotGrid rows={5} cols={4} />
      </div>

      {/* ── Cert grid ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
        {certs.map((cert) => (
          <CertCard key={cert.id} {...cert} />
        ))}
      </div>

      {/* ── Bottom note ─────────────────────────────────────────────── */}
      <div className="mt-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#ABB2BF]/30" />
        <p style={{ fontFamily: mono, fontSize: 13, color: "#ABB2BF" }}>
          <span style={{ color: "#c778dd" }}>// </span>always learning
        </p>
        <div className="h-px flex-1 bg-[#ABB2BF]/30" />
      </div>
    </div>
  );
}
