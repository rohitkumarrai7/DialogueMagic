import { useInView } from "../hooks/useInView";

const row1 = [
  { name: "WhatsApp API", icon: "wa", color: "#25D366" },
  { name: "OpenAI", icon: "oai", color: "#10A37F" },
  { name: "Make", icon: "make", color: "#6D28D9" },
  { name: "Zapier", icon: "zap", color: "#FF4A00" },
  { name: "HubSpot", icon: "hs", color: "#FF7A59" },
  { name: "GoHighLevel", icon: "ghl", color: "#28A745" },
];

const row2 = [
  { name: "Slack", icon: "slk", color: "#E01E5A" },
  { name: "Stripe", icon: "stripe", color: "#635BFF" },
  { name: "Calendly", icon: "cal", color: "#006BFF" },
  { name: "Salesforce", icon: "sf", color: "#00A1E0" },
  { name: "Twilio", icon: "tw", color: "#F22F46" },
  { name: "Google Calendar", icon: "gcal", color: "#4285F4" },
];

function BrandIcon({ icon, color }) {
  const size = 18;
  const icons = {
    wa: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" fill={color} fillOpacity="0.15" />
        <path d="M7 8a3 3 0 016 0v1a3 3 0 01-6 0" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="8.5" r="1" fill={color} fillOpacity="0.5"/>
      </svg>
    ),
    oai: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" fill={color} fillOpacity="0.15" />
        <path d="M7 7l6 6M13 7l-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    make: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="8" rx="2" fill={color} fillOpacity="0.15"/>
        <path d="M7 10h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    stripe: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="2" fill={color} fillOpacity="0.15"/>
        <path d="M7 8h6M7 11h4" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    sf: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill={color} fillOpacity="0.15"/>
        <path d="M7 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="2" fill={color} fillOpacity="0.5"/>
      </svg>
    ),
    ghl: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="10" rx="2" fill={color} fillOpacity="0.15"/>
        <path d="M10 10v4M8 12h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    zap: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path d="M11 2L5 11h4.5L9 18l6-9h-4.5L11 2z" fill={color} fillOpacity="0.8"/>
      </svg>
    ),
    cal: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="13" rx="2.5" fill={color} fillOpacity="0.15"/>
        <path d="M3 8.5h14" stroke={color} strokeWidth="1.2"/>
        <circle cx="7.5" cy="12.5" r="1.5" fill={color} fillOpacity="0.6"/>
        <path d="M7 2v3M13 2v3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    slk: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="5" height="2.5" rx="1.25" fill={color}/>
        <rect x="12" y="8" width="5" height="2.5" rx="1.25" fill={color} fillOpacity="0.5"/>
        <rect x="8.5" y="3" width="2.5" height="5" rx="1.25" fill={color} fillOpacity="0.7"/>
        <rect x="8.5" y="12" width="2.5" height="5" rx="1.25" fill={color} fillOpacity="0.35"/>
      </svg>
    ),
    hs: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" fill={color} fillOpacity="0.12"/>
        <path d="M8 7v6M12 7v6M8 10h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tw: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" fill={color} fillOpacity="0.12"/>
        <path d="M7 8a3 3 0 016 0v4a3 3 0 01-6 0" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1" fill={color}/>
      </svg>
    ),
    gcal: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="13" rx="2" fill={color} fillOpacity="0.12"/>
        <path d="M3 8h14" stroke={color} strokeWidth="1" strokeOpacity="0.3"/>
        <rect x="6" y="10" width="3" height="3" rx="0.5" fill="#EA4335" fillOpacity="0.7"/>
        <rect x="11" y="10" width="3" height="3" rx="0.5" fill="#34A853" fillOpacity="0.7"/>
        <path d="M7 2v3M13 2v3" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[icon] || null;
}

function LogoPill({ name, icon, color }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 select-none">
      <BrandIcon icon={icon} color={color} />
      <span className="whitespace-nowrap text-[13px] font-medium text-white/50">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#0B1120] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#0B1120] to-transparent" />
      <div
        className="flex gap-3"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <LogoPill key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  const [headRef, headVisible] = useInView();
  const [countRef, countVisible] = useInView();

  return (
    <section
      id="integrations"
      className="-mt-5 overflow-hidden rounded-t-[48px] pt-24 pb-28 max-md:-mt-3 max-md:rounded-t-[32px] max-md:pt-16 max-md:pb-20"
      style={{ background: "linear-gradient(160deg, #0B1120 0%, #0D2137 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div ref={headRef} className="mb-16 text-center max-md:mb-12">
          <p
            className={`fade-up mb-4 text-[13px] font-semibold tracking-[0.2em] text-accent uppercase ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            Integrations
          </p>
          <h2
            className={`fade-up mx-auto max-w-[640px] font-display text-[clamp(36px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-white ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            Works with your existing systems
          </h2>
          <p
            className={`fade-up mx-auto mt-5 max-w-[420px] text-[15px] leading-[1.7] text-white/40 ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Plug into the tools you already use. No migration, no learning curve — just seamless connection.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </div>

      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div
          ref={countRef}
          className={`fade-up mt-14 grid grid-cols-3 gap-6 max-md:gap-4 ${countVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
            <span className="block font-display text-[40px] leading-none text-accent">60+</span>
            <span className="mt-1.5 block text-[12px] font-medium tracking-wider text-white/30 uppercase">Integrations</span>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
            <span className="block font-display text-[40px] leading-none text-white">48h</span>
            <span className="mt-1.5 block text-[12px] font-medium tracking-wider text-white/30 uppercase">Setup time</span>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
            <span className="block font-display text-[40px] leading-none text-white">0</span>
            <span className="mt-1.5 block text-[12px] font-medium tracking-wider text-white/30 uppercase">Code required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
