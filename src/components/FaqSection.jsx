import { useState } from "react";
import { useInView } from "../hooks/useInView";

const faqs = [
  {
    q: "How long does it take to set up?",
    a: "Most businesses are fully operational within 48 hours. We analyze your website, docs, and workflows, then train the AI agent on your specific services and tone.",
  },
  {
    q: "Will this work with my existing website and phone system?",
    a: "Absolutely. Our chat widget drops into any website with one line of code. Voice agents integrate via call forwarding. WhatsApp uses the official Business API. Zero disruption.",
  },
  {
    q: "Can the AI handle complex sales conversations?",
    a: "Yes. Our agents are trained on your products, pricing, and FAQs. They can qualify leads, book meetings, process orders, and transfer to humans with full context when needed.",
  },
  {
    q: "What languages are supported?",
    a: "25+ languages with native-level fluency. The AI auto-detects the user's language and switches in real-time — including regional dialects.",
  },
  {
    q: "What if I need a custom SaaS or website, not just an AI agent?",
    a: "We build full-stack web apps and SaaS products too. From high-converting landing pages to custom internal tools, we handle design, development, and deployment.",
  },
  {
    q: "Is there a contract or can I cancel anytime?",
    a: "Monthly plans are month-to-month with no lock-in. Project-based work has a delivery milestone structure. You stay because it works, not because you're stuck.",
  },
];

function FaqItem({ q, a, index, isOpen, onToggle }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up border-b border-text-primary/[0.06] ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${0.05 + index * 0.06}s` }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full cursor-pointer items-start justify-between gap-6 border-none bg-transparent py-6 text-left max-md:py-4"
      >
        <span
          className={`text-[16px] font-medium leading-snug transition-colors duration-200 max-md:text-[14px] ${
            isOpen ? "text-text-primary" : "text-text-primary/70 group-hover:text-text-primary"
          }`}
        >
          {q}
        </span>

        <div
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${
            isOpen ? "border-accent/20 bg-accent/10" : "border-text-primary/10 bg-transparent"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M3 4.5l3 3 3-3" stroke={isOpen ? "#F97316" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-6 pr-12 text-[14.5px] leading-[1.7] text-text-secondary max-md:pb-4 max-md:pr-0">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [headRef, headVisible] = useInView();

  return (
    <section id="faq" className="bg-bg py-28 max-md:py-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="grid grid-cols-[7fr_5fr] gap-20 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="border-t border-text-primary/[0.06]">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                index={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          <div ref={headRef} className="max-lg:sticky-none lg:sticky lg:top-32 lg:self-start">
            <span
              className={`fade-up mb-3 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.15em] text-text-secondary/50 uppercase ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.05s" }}
            >
              <span className="h-1 w-6 rounded-full bg-accent" />
              FAQ
            </span>
            <h2
              className={`fade-up font-display text-[clamp(36px,4.5vw,60px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.12s" }}
            >
              Questions?
              <br />
              <span className="text-accent">We've got answers.</span>
            </h2>
            <p
              className={`fade-up mt-5 max-w-[300px] text-[15px] leading-[1.7] text-text-secondary ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Everything you need to know about getting started with DialogueMagic.
            </p>

            <div
              className={`fade-up mt-6 rounded-xl border border-text-primary/[0.05] bg-surface px-5 py-4 ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="text-[13px] text-text-secondary">
                Still have questions?
              </p>
              <a
                href="mailto:hello@dialoguemagic.com"
                className="mt-1.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent no-underline transition-opacity duration-200 hover:opacity-70"
              >
                hello@dialoguemagic.com
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
