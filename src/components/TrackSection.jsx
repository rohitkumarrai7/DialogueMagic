import { useInView } from "../hooks/useInView";
import DashboardMock from "./DashboardMock";

const points = [
  "AI agents handle every conversation while you stay focused on growth",
  "Real-time dashboards, summaries, and full transcripts — all in one place",
  "Monitor live conversations across chat, voice, and WhatsApp from your dashboard",
];

export default function TrackSection() {
  const [headRef, headVisible] = useInView();

  return (
    <section id="work" className="bg-bg pt-28 pb-28 max-md:pt-20 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="mb-14 max-md:mb-10">
          <span
            className={`fade-up mb-4 inline-block rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.15em] text-accent uppercase ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            Live Dashboard
          </span>
          <h2
            className={`fade-up max-w-[560px] font-display text-[clamp(38px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            See every
            <br />
            <span className="text-accent">conversation</span> in real-time
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_1.3fr] items-start gap-12 max-lg:grid-cols-1 max-lg:gap-8">
          <div ref={headRef}>
            <ul className="flex flex-col gap-4">
              {points.map((point, i) => (
                <li
                  key={i}
                  className={`fade-up flex items-start gap-3 ${headVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[15px] leading-[1.6] text-text-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className={`fade-up mt-10 ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <a
                href="https://zcal.co/dialoguemagic/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-[14px] font-semibold text-white no-underline shadow-[0_4px_16px_rgba(249,115,22,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                Book a Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
