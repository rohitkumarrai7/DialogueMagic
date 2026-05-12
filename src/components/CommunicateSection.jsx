import { useInView } from "../hooks/useInView";

const features = [
  {
    title: "Round-the-Clock Revenue",
    text: "Every inquiry captured — at 3 AM or 3 PM. Your AI agent qualifies leads, books meetings, answers FAQs, and closes sales across chat, voice, and WhatsApp.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F97316" strokeWidth="1.6"/>
        <path d="M12 6v6l4 2" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Zero Ramp-Up Time",
    text: "No hiring cycles, no training manuals, no turnover. Your AI agent masters your products, pricing, and workflows the moment it goes live.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full Conversation Intelligence",
    text: "Real-time summaries across every channel. See who converts, where prospects drop off, and which conversations drive revenue — powered by data, not hunches.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" stroke="#F97316" strokeWidth="1.6"/>
      </svg>
    ),
  },
];

function FeatureCard({ title, text, icon, delay }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up rounded-2xl border border-text-primary/[0.06] bg-surface px-7 py-8 max-md:px-5 max-md:py-6 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/10">
        {icon}
      </div>
      <h3 className="mb-3 font-display text-[clamp(20px,2.2vw,28px)] uppercase leading-none tracking-wide text-text-primary">
        {title}
      </h3>
      <p className="text-[14.5px] leading-[1.7] font-normal text-text-secondary">
        {text}
      </p>
    </div>
  );
}

export default function CommunicateSection() {
  const [headRef, headVisible] = useInView();
  const [subRef, subVisible] = useInView();

  return (
    <section id="about" className="relative -mt-10 rounded-t-[48px] bg-bg pt-28 pb-28 max-md:-mt-6 max-md:rounded-t-[32px] max-md:pt-20 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="max-w-[700px]">
          <h2
            ref={headRef}
            className={`fade-up font-display text-[clamp(40px,5.5vw,76px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Never miss
            <br />
            another
            <br />
            <span className="text-accent">conversation</span>
          </h2>

          <p
            ref={subRef}
            className={`fade-up mt-7 max-w-[460px] text-[17px] leading-[1.7] font-normal text-text-secondary ${subVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Deploy AI agents across every channel in under 48 hours. Every lead qualified, every customer heard — without adding headcount.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
