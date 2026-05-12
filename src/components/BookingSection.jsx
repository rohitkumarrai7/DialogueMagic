import { useInView } from "../hooks/useInView";

const checks = [
  "See a live walkthrough tailored to your industry",
  "Get a free automation audit of your current sales process",
  "No commitment — just a conversation",
];

export default function BookingSection() {
  const [headRef, headVisible] = useInView();
  const [cardRef, cardVisible] = useInView();

  return (
    <section id="booking" className="relative -mt-8 rounded-t-[48px] bg-bg pt-28 pb-32 max-md:-mt-5 max-md:rounded-t-[32px] max-md:pt-16 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:gap-6">
          <div
            ref={headRef}
            className="flex flex-col justify-center"
          >
            <span
              className={`fade-up mb-4 inline-block w-fit rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.15em] text-accent uppercase ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.05s" }}
            >
              Free strategy call
            </span>

            <h2
              className={`fade-up font-display text-[clamp(34px,4.5vw,58px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.12s" }}
            >
              Curious how
              <br />
              <span className="text-accent">it all works?</span>
            </h2>

            <p
              className={`fade-up mt-5 max-w-[400px] text-[16px] leading-[1.7] text-text-secondary ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Schedule a free 15-minute strategy call. We'll audit your current setup and show you exactly where AI automation can save you time and drive revenue.
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {checks.map((item, i) => (
                <li
                  key={i}
                  className={`fade-up flex items-start gap-2.5 ${headVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[14px] leading-snug text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className={`fade-up mt-8 flex items-center gap-2.5 ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.55s" }}
            >
              <div className="flex -space-x-1.5">
                {["#2563EB", "#F97316", "#16A34A"].map((c, i) => (
                  <div
                    key={i}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-bg text-[9px] font-bold text-white"
                    style={{ backgroundColor: c + "80" }}
                  >
                    {["W", "O", "A"][i]}
                  </div>
                ))}
              </div>
              <span className="text-[12px] text-text-secondary/50">
                120+ audits booked this month
              </span>
            </div>
          </div>

          <div
            ref={cardRef}
            className={`fade-up ${cardVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="shimmer-border flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-text-primary/[0.06] bg-surface p-10 max-md:p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#F97316" strokeWidth="1.6"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="#F97316" strokeWidth="1.6"/>
                  <circle cx="12" cy="16" r="1.5" fill="#F97316" fillOpacity="0.5"/>
                </svg>
              </div>
              <h3 className="mb-2 text-center font-display text-[22px] uppercase tracking-wide text-text-primary">
                Book My Free Audit
              </h3>
              <p className="mb-7 text-center text-[14px] text-text-secondary/60">
                Pick a time that works for you. 15 minutes, zero pressure.
              </p>
              <a
                href="https://zcal.co/dialoguemagic/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-[15px] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(249,115,22,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_30px_rgba(249,115,22,0.35)]"
              >
                Book My Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
