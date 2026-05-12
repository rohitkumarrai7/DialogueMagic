import { useInView } from "../hooks/useInView";

const metrics = [
  { label: "Conversations Today", value: "84", change: "+12%", color: "#2563EB" },
  { label: "Leads Captured", value: "23", change: "+8%", color: "#F97316" },
  { label: "Conversion Rate", value: "72%", change: "+5%", color: "#16A34A" },
  { label: "Avg Response", value: "1.2s", change: "-40%", color: "#7C3AED" },
];

const channelFeeds = [
  {
    channel: "Chat",
    color: "#2563EB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M17 9a7 7 0 01-7 7 7.1 7.1 0 01-2.8-.6L4 17l1.6-3.2A7 7 0 0117 9z" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 8h6M7 11h4" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      { name: "Liam Chen", msg: "Interested in enterprise plan", time: "Now", active: true },
      { name: "Sarah Kim", msg: "Signed up for Growth plan", time: "12m ago", active: false },
    ],
  },
  {
    channel: "Voice",
    color: "#7C3AED",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M10 3a3 3 0 00-3 3v4a3 3 0 006 0V6a3 3 0 00-3-3z" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M16 10a6 6 0 01-12 0" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      { name: "Priya Sharma", msg: "Booking property viewing", time: "2m ago", active: true },
      { name: "Marcus Obi", msg: "Demo scheduled for Friday", time: "24m ago", active: false },
    ],
  },
  {
    channel: "WhatsApp",
    color: "#16A34A",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M10 3a7 7 0 00-6.3 10L2 17l4.2-1.6A7 7 0 0010 3z" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 9h.01M10 9h.01M13 9h.01" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      { name: "Alex Rivera", msg: "Order #4821 tracking request", time: "5m ago", active: false },
      { name: "Jenna Park", msg: "Price list for bulk order", time: "18m ago", active: false },
    ],
  },
];

function MetricCard({ label, value, change, color, delay }) {
  const [ref, isVisible] = useInView();
  const isPositive = change.startsWith("+");
  return (
    <div
      ref={ref}
      className={`fade-up rounded-xl border border-text-primary/[0.06] bg-white p-4 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="block text-[11px] font-medium tracking-wider text-text-secondary/60 uppercase">{label}</span>
      <div className="mt-1.5 flex items-end gap-2">
        <span className="font-display text-[28px] leading-none" style={{ color }}>{value}</span>
        <span className={`mb-1 text-[11px] font-semibold ${isPositive ? "text-[#16A34A]" : "text-[#7C3AED]"}`}>{change}</span>
      </div>
    </div>
  );
}

function ChannelFeed({ channel, color, icon, items, delay }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up rounded-xl border border-text-primary/[0.06] bg-white overflow-hidden ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-text-primary/[0.05]">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: color + "15" }}>
          {icon}
        </div>
        <span className="text-[12px] font-bold tracking-wider uppercase" style={{ color }}>{channel}</span>
        {items.some((it) => it.active) && (
          <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-[#16A34A]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A55E] animate-pulse" />
            Live
          </span>
        )}
      </div>
      <div className="divide-y divide-text-primary/[0.04]">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5 px-4 py-2.5">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-text-primary/[0.04] text-[9px] font-bold text-text-secondary">
              {item.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[12px] font-medium text-text-primary truncate">{item.name}</span>
              <span className="block text-[11px] text-text-secondary/60 truncate">{item.msg}</span>
            </div>
            <span className="shrink-0 text-[10px] text-text-secondary/40 mt-0.5">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        {metrics.slice(0, 2).map((m, i) => (
          <MetricCard key={m.label} {...m} delay={0.15 + i * 0.05} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.slice(2).map((m, i) => (
          <MetricCard key={m.label} {...m} delay={0.25 + i * 0.05} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        {channelFeeds.map((feed, i) => (
          <ChannelFeed key={feed.channel} {...feed} delay={0.35 + i * 0.08} />
        ))}
      </div>
    </div>
  );
}
