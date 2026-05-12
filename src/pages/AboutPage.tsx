import { PageTitle } from "../components/PageTitle";
import { BioSection } from "../components/BioSection";
import { AboutSkillsSection } from "../components/AboutSkillsSection";
import { FunFactsSection } from "../components/FunFactsSection";
import { MUTED } from "../lib/constants";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      <PageTitle slug="about-me" subtitle="Who am i?" subtitleColor={MUTED} />
      <BioSection />
      <AboutSkillsSection />
      <FunFactsSection />
    </div>
  );
}
