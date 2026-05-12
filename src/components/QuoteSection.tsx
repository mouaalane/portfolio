import { MONO, MUTED, WHITE } from "../lib/constants";

export function QuoteSection() {
  return (
    <section className="px-6 md:px-12 py-16 flex justify-center relative overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-4 w-[155px] h-[155px] border border-[#ABB2BF]" />
      <div
        className="border border-[#ABB2BF] max-w-[700px] w-full px-8 py-10 relative"
        style={{ fontFamily: MONO }}
      >
        <div className="absolute -top-5 left-6 text-[60px] leading-none text-[#ABB2BF] select-none">"</div>
        <p className="mt-4" style={{ fontSize: "clamp(16px,2vw,24px)", color: WHITE, lineHeight: 1.5 }}>
          With great developers come great fundamentals.
        </p>
        <div className="flex justify-end mt-4">
          <div className="relative">
            <div className="absolute -top-3 -left-4 text-[40px] leading-none text-[#ABB2BF] select-none">"</div>
            <p style={{ fontSize: 16, color: MUTED }}>– Dr. mohamed abuhadhoud</p>
          </div>
        </div>
      </div>
    </section>
  );
}
