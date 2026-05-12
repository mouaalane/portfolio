import { MONO, MUTED } from "../lib/constants";

interface FunFactProps {
  children: React.ReactNode;
}

export function FunFact({ children }: FunFactProps) {
  return (
    <span
      className="inline-block border border-[#ABB2BF] px-3 py-1 cursor-default hover:border-[#c778dd] transition-colors"
      style={{ fontFamily: MONO, fontSize: 14, color: MUTED }}
    >
      {children}
    </span>
  );
}
