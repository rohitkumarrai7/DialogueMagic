import { useState } from "react";
import { useInView } from "../hooks/useInView";

const demos = [
  {
    tag: "E-Commerce",
    title: "AI Chatbot Qualifies 200+ Leads Daily",
    text: "A DialogueMagic chat agent handles product inquiries, recommends items, and books demo calls — converting 3x more visitors than the previous live chat team.",
    metric: "3x",
    metricLabel: "More conversions",
  },
  {
    tag: "Real Estate",
    title: "Voice AI Books Property Viewings 24/7",
    text: "Inbound calls automatically answered by an AI voice agent that qualifies buyers, schedules viewings, and syncs with the agent's Google Calendar. Zero missed calls.",
    metric: "0",
    metricLabel: "Missed calls",
  },
  {
    tag: "Healthcare",
    title: "WhatsApp Automation Reduces No-Shows by 40%",
    text: "Automated appointment reminders, rescheduling via WhatsApp, and FAQ handling — freeing up 15+ hours per week of front desk time.",
    metric: "40%",
    metricLabel: "Fewer no-shows",
  },
  {
    tag: "SaaS",
    title: "Custom SaaS MVP Built in 3 Weeks",
    text: "Full-stack project management tool with AI-powered task assignment, built with Next.js and deployed to production. From idea to paying customers in under a month.",
    metric: "3wk",
    metricLabel: "Idea to launch",
  },
];

function CaseStudyCard({ tag, title, text, metric, metricLabel, index, active, onActivate }) {
  const [ref, isVisible] = useInView();
  const isActive = active === index;

  return (
    <div
      ref={ref}
      className={`fade-up group cursor-pointer rounded-2xl border p-6 transition-all duration-300 max-md:p-5 ${
        isActive
          ? "border-accent/20 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "border-text-primary/[0.05] bg-surface-alt/50 hover:border-text-primary/[0.1] hover:bg-white"
      } ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
      onClick={onActivate}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="shrink-0 rounded-full bg-primary/10 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase">
          {tag}
        </span>
        <div className="text-right">
          <span className="block font-display text-[28px] leading-none text-accent">{metric}</span>
          <span className="block text-[10px] font-medium tracking-wider text-text-secondary/50 uppercase mt-1">{metricLabel}</span>
        </div>
      </div>

      <h3 className="font-display text-[18px] uppercase tracking-wide text-text-primary leading-tight mb-3">
        {title}
      </h3>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isActive ? "120px" : "0px",
          opacity: isActive ? 1 : 0,
        }}
      >
        <p className="text-[14px] leading-[1.65] text-text-secondary pr-2">
          {text}
        </p>
      </div>

      {!isActive && (
        <span className="text-[12px] font-semibold tracking-wider text-text-secondary/40 uppercase">
          Click to expand
        </span>
      )}
    </div>
  );
}

export default function DemoSection() {
  const [active, setActive] = useState(0);
  const [headRef, headVisible] = useInView();

  return (
    <section className="bg-bg pb-28 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div ref={headRef} className="mb-12 max-md:mb-8">
          <h2
            className={`fade-up max-w-[600px] font-display text-[clamp(38px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            See DialogueMagic
            <br />
            <span className="text-accent">in action</span>
          </h2>
          <p
            className={`fade-up mt-5 max-w-[440px] text-[16px] leading-[1.7] text-text-secondary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Real results. Real businesses scaling with AI automation across every channel.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-3">
          {demos.map((demo, i) => (
            <CaseStudyCard
              key={i}
              index={i}
              {...demo}
              active={active}
              onActivate={() => setActive(active === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
