import { useInView } from "../hooks/useInView";
import DotMesh from "./DotMesh";

const pillars = [
  {
    num: "01",
    title: "Automate",
    text: "AI agents that handle conversations across chat, voice, and WhatsApp — around the clock, without missing a beat.",
  },
  {
    num: "02",
    title: "Integrate",
    text: "Seamless connection to your CRM, calendars, and existing systems. Zero disruption, total control.",
  },
  {
    num: "03",
    title: "Scale",
    text: "From solo founders to enterprise teams. Real outcomes, real impact, real transformation at any volume.",
  },
];

function Pillar({ num, title, text, delay }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up group text-white ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-5 flex items-start gap-4">
        <span className="font-display text-[clamp(40px,4vw,56px)] leading-none text-white/[0.08] transition-colors duration-300 group-hover:text-accent/30">
          {num}
        </span>
        <div>
          <h2 className="font-display text-[clamp(26px,3vw,40px)] uppercase leading-none tracking-wide mb-3">
            {title}
          </h2>
          <p className="max-w-[300px] text-[15px] leading-relaxed font-normal text-white/55">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlackSection() {
  const [closingRef, closingVisible] = useInView();

  return (
    <section
      className="-mt-5 overflow-hidden rounded-t-[48px] pt-20 pb-30 max-md:rounded-t-[32px] max-md:pt-14 max-md:pb-20"
      style={{ background: "linear-gradient(160deg, #0B1120 0%, #0D2137 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="mb-24 grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-10">
          {pillars.map((p, i) => (
            <Pillar key={p.title} {...p} delay={0.05 + i * 0.1} />
          ))}
        </div>

        <div
          ref={closingRef}
          className={`fade-up flex items-end justify-between gap-15 max-lg:flex-col max-lg:items-start ${closingVisible ? "visible" : ""}`}
        >
          <h2 className="max-w-[680px] font-display text-[clamp(40px,5.5vw,76px)] uppercase leading-[0.92] tracking-tight text-white">
            AI automation
            <br />
            <span className="text-white/30">for the modern</span>
            <br />
            business
          </h2>
          <DotMesh className="max-lg:w-[200px] max-lg:h-[140px]" />
        </div>
      </div>
    </section>
  );
}
