import { useInView } from "../hooks/useInView";

export default function Hero() {
  const [headlineRef, headlineVisible] = useInView();
  const [paraRef, paraVisible] = useInView();
  const [btnRef, btnVisible] = useInView();
  const [proofRef, proofVisible] = useInView();

  const clientLogos = ["wegoauthentic", "outflic", "astrobaba.life", "hashtric"];

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-[140px] pb-10 max-lg:min-h-0 max-lg:pt-[120px] max-lg:pb-10"
      style={{ background: "linear-gradient(160deg, #0B1120 0%, #0D2137 40%, #111827 100%)" }}
    >
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center max-lg:min-h-0 max-lg:py-16">
          <div
            ref={headlineRef}
            className={`fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 ${headlineVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[12px] font-medium tracking-wider text-white/60 uppercase">AI Automation Agency</span>
          </div>

          <h1
            className={`fade-up font-display text-[clamp(42px,6.5vw,88px)] uppercase leading-[0.88] tracking-tight text-white max-md:text-[clamp(36px,11vw,60px)] ${headlineVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            AI Agents That Talk,
            <br />
            Sell &amp; Support
            <br />
            <span className="bg-gradient-to-r from-accent to-[#FB923C] bg-clip-text text-transparent">— While You Sleep</span>
          </h1>

          <p
            ref={paraRef}
            className={`fade-up mt-9 max-w-[580px] text-[17px] leading-[1.7] font-normal text-white/55 ${paraVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            From real-time chatbots to voice AI and WhatsApp automation — we build intelligent agents that handle your sales, support, and operations 24/7. No code. No headcount. Just results.
          </p>

          <div
            ref={btnRef}
            className={`fade-up mt-10 flex flex-wrap items-center justify-center gap-4 ${btnVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.45s" }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-[15px] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)]"
            >
              See Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://zcal.co/dialoguemagic/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-8 py-4 text-[15px] font-medium text-white no-underline backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.12] hover:border-white/25"
            >
              Book a Free Strategy Call
            </a>
          </div>

          <div
            ref={proofRef}
            className={`fade-up mt-20 flex flex-col items-center gap-6 ${proofVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-[13px] font-medium tracking-[0.15em] text-white/30 uppercase">
              Trusted by 80+ businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 max-md:gap-5">
              {clientLogos.map((name) => (
                <span
                  key={name}
                  className="font-body text-[15px] font-bold tracking-tight text-white/25 hover:text-white/50 transition-colors duration-300 cursor-default"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
