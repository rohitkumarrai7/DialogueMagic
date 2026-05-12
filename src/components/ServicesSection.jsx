import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: "chat",
    title: "Real-Time Sales Chat Agents",
    description: "24/7 website chatbots that qualify leads, answer product questions, book demos, and hand off hot prospects to your team. Integrated with your CRM.",
    color: "#2563EB",
  },
  {
    icon: "voice",
    title: "Human-Like Voice AI",
    description: "AI voice agents for inbound and outbound calls. Appointment booking, lead qualification, and customer support that sounds completely natural.",
    color: "#7C3AED",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp Business Automation",
    description: "Broadcast campaigns, auto-replies, order tracking, and conversational commerce. Turn WhatsApp into your highest-converting sales channel.",
    color: "#16A34A",
  },
  {
    icon: "code",
    title: "Websites & SaaS Products",
    description: "Full-stack web apps, high-converting landing pages, and custom SaaS tools built with Next.js, Node.js, and modern AI APIs. From idea to launch.",
    color: "#F97316",
  },
];

function ServiceIcon({ type }) {
  const icons = {
    chat: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    voice: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    whatsapp: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    code: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[type] || null;
}

function ServiceCard({ icon, title, description, color, delay }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up group relative overflow-hidden rounded-2xl border border-text-primary/[0.06] bg-surface px-7 py-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] max-md:px-5 max-md:py-6 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        className="absolute top-0 left-0 h-1 w-full transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
        style={{ backgroundColor: color + "12", color: color }}
      >
        <ServiceIcon type={icon} />
      </div>
      <h3 className="mb-3 font-display text-[clamp(20px,2vw,26px)] uppercase leading-none tracking-wide text-text-primary">
        {title}
      </h3>
      <p className="mb-5 text-[14.5px] leading-[1.7] font-normal text-text-secondary">
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide uppercase no-underline transition-all duration-200 cursor-pointer"
        style={{ color }}
      >
        Learn more
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
}

export default function ServicesSection() {
  const [headRef, headVisible] = useInView();
  const [subRef, subVisible] = useInView();

  return (
    <section id="services" className="bg-bg pb-28 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="flex items-end justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-6">
          <div>
            <h2
              ref={headRef}
              className={`fade-up max-w-[520px] font-display text-[clamp(40px,5.5vw,76px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              One Agency.
              <br />
              <span className="text-accent">Every Channel.</span>
            </h2>
          </div>

          <p
            ref={subRef}
            className={`fade-up max-w-[380px] text-[16px] leading-[1.7] font-normal text-text-secondary ${subVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Whether your customers prefer chat, voice, or WhatsApp — we build the AI layer that meets them where they are.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-lg:gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={0.1 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
