import { MONO, ACCENT, WHITE, MUTED } from "../lib/constants";

export interface Cert {
  id: number;
  title: string;
  issuer: string;
  category: string;
  date: string;
  credentialId: string;
  url: string;
  color: string;
  description?: string;
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="border border-[#c778dd] px-2 py-0.5"
      style={{ fontFamily: MONO, fontSize: 12, color: ACCENT }}
    >
      {label}
    </span>
  );
}

function IssuerIcon({ issuer, color }: { issuer: string; color: string }) {
  return (
    <div
      className="size-10 flex items-center justify-center shrink-0 border"
      style={{ borderColor: color }}
    >
      <span style={{ fontFamily: MONO, fontWeight: 700, fontSize: 18, color }}>
        {issuer[0]}
      </span>
    </div>
  );
}

export function CertCard({
  title,
  issuer,
  category,
  date,
  credentialId,
  url,
  color,
  description
}: Cert) {
  return (
    <div className="border border-[#ABB2BF] flex flex-col hover:border-[#c778dd] transition-colors group bg-[#1e2229]">
      <div className="border-b border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3 flex items-center gap-3">
        <IssuerIcon issuer={issuer} color={color} />
        <div className="flex flex-col gap-1 min-w-0">
          <p
            className="truncate"
            style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16, color: WHITE }}
          >
            {title}
          </p>
          <p style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>{issuer}</p>
        </div>
      </div>
      <div className="px-4 py-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CategoryBadge label={category} />
          <span style={{ fontFamily: MONO, fontSize: 13, color: MUTED }}>{date}</span>
        </div>
        <p style={{ fontFamily: MONO, fontSize: 12, color: MUTED }}>
          <span style={{ color: ACCENT }}>ID: </span>
          {credentialId}
        </p>
        <p style={{ fontFamily: MONO, fontSize: 12, color: MUTED }}>
          <span style={{ color: ACCENT }}>Description: </span>
          {description}
        </p>
      </div>
      <div className="border-t border-[#ABB2BF] group-hover:border-[#c778dd] transition-colors px-4 py-3">
        <a
          href={url}
          className="inline-flex items-center gap-1 hover:gap-2 transition-all"
          style={{ fontFamily: MONO, fontSize: 14, color: ACCENT }}
        >
          View credential <span>→</span>
        </a>
      </div>
    </div>
  );
}
