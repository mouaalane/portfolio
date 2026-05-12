import { DotGrid } from "./DotGrid";
import { MONO, MUTED } from "../lib/constants";
import imgProfile from "../assets/images/profile.png";

export function BioSection() {
  return (
    <section className="relative mb-20">
      {/* Decorative border box top-right */}
      <div className="hidden lg:block absolute right-0 top-0 w-[155px] h-[155px] border border-[#ABB2BF]" />

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text */}
        <div
          className="flex flex-col gap-4 max-w-[520px] relative"
          style={{ fontFamily: MONO, fontSize: 16, color: MUTED, lineHeight: "1.7" }}
        >
          <div className="absolute -left-12 top-4 hidden lg:block opacity-50">
            <DotGrid rows={4} cols={3} />
          </div>
          <p>Hello, i'm mohamed ouaalane!</p>
          <p>
            I'm a full-stack developer based in marrakech, Morocco. I can develop responsive
            websites from scratch and raise them into modern user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my passion for over a
            year. I have been helping various clients to establish their presence online. I always
            strive to learn about the newest technologies and frameworks.
          </p>
        </div>

        {/* Profile photo + dot decorations */}
        <div className="relative hidden md:block shrink-0 ml-auto">
          <div className="absolute -left-10 top-4 z-0">
            <DotGrid rows={5} cols={5} />
          </div>
          <div className="absolute -right-6 bottom-4 z-0">
            <DotGrid rows={5} cols={5} />
          </div>
          <img
            src={imgProfile}
            alt="Elias"
            className="relative z-10 w-[260px] lg:w-[300px] object-cover object-top"
            style={{ maxHeight: 400 }}
          />
        </div>
      </div>
    </section>
  );
}
