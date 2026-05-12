import { DotGrid } from "./DotGrid";
import { SectionHeading } from "./SectionHeading";
import { FunFact } from "./FunFact";
import { LeftBracketDecoration } from "./LeftBracketDecoration";
import { WHITE } from "../lib/constants";

export function FunFactsSection() {
  return (
    <section className="relative">
      {/* Decorative dot grids */}
      <div className="hidden lg:block absolute -left-6 top-32 opacity-50">
        <DotGrid rows={5} cols={5} />
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 opacity-50">
        <DotGrid rows={5} cols={5} />
      </div>

      {/* Bracket decoration */}
      <div className="absolute right-0 top-16 hidden lg:block">
        <LeftBracketDecoration />
      </div>

      <SectionHeading label="my-fun-facts" />

      <div className="mt-6 flex flex-wrap gap-3">
        <FunFact>I like winter more than summer</FunFact>
        <FunFact>I often bike with my friends</FunFact>
        <FunFact>
          I like <strong style={{ color: WHITE }}>pizza</strong> and{" "}
          <strong style={{ color: WHITE }}>pasta</strong>
        </FunFact>
        <FunFact>
          I was in <strong style={{ color: WHITE }}>Egypt</strong>,{" "}
          <strong style={{ color: WHITE }}>Poland</strong> and{" "}
          <strong style={{ color: WHITE }}>Turkey</strong>
        </FunFact>
        <FunFact>
          My favorite movie is <strong style={{ color: WHITE }}>The Green Mile</strong>
        </FunFact>
        <FunFact>I am still in school</FunFact>
        <FunFact>I don't have any siblings</FunFact>
      </div>
    </section>
  );
}
