import { Link } from "react-router-dom";

const servicesLinks = [
  { label: "AI Chat Agents", href: "#services" },
  { label: "Voice AI", href: "#services" },
  { label: "WhatsApp Automation", href: "#services" },
  { label: "SaaS & Web Dev", href: "#services" },
  { label: "Custom Integrations", href: "#integrations" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#booking" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Case Studies", href: "#work" },
  { label: "Affiliate Program", href: "#" },
];

const year = new Date().getFullYear();

function FooterColumn({ title, links }) {
  return (
    <div>
      <span className="mb-3 block text-[10px] font-bold tracking-[0.2em] text-accent/60 uppercase">
        {title}
      </span>
      <ul className="flex flex-col gap-2 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] text-white/45 no-underline transition-colors duration-200 hover:text-white/80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-16 pb-8 max-md:pt-12"
      style={{ background: "linear-gradient(180deg, #0B1120 0%, #060D18 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div className="mb-12 flex items-start justify-between gap-12 max-md:flex-col max-md:gap-8">
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="10" fill="#2563EB"/>
                <path d="M14 19h14v1.5H14zM14 23h11v1.5H14zM14 27h13v1.5H14z" fill="#fff" fill-opacity=".85"/>
                <circle cx="37" cy="15" r="5" fill="#F97316"/>
                <path d="M35.5 13.5l3 1.5-3 1.5v-3z" fill="#fff"/>
              </svg>
              <span className="text-[16px] font-bold text-white">
                DialogueMagic
              </span>
            </div>
            <p className="text-[13px] leading-[1.7] text-white/30">
              AI automation for the modern business. Chat agents, voice bots, WhatsApp automation & SaaS development.
            </p>
            <div className="mt-5">
              <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                Get automation tips & AI trends
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-3.5 py-2 text-[12px] text-white placeholder-white/20 outline-none transition-colors focus:border-accent/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <nav className="flex gap-12 max-md:gap-8 max-md:flex-wrap">
            <FooterColumn title="Services" links={servicesLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
          </nav>

          <div>
            <span className="mb-3 block text-[10px] font-bold tracking-[0.2em] text-accent/60 uppercase">
              Contact
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@dialoguemagic.com"
                className="text-[13px] text-white/45 no-underline transition-colors duration-200 hover:text-white/80"
              >
                hello@dialoguemagic.com
              </a>
              <a
                href="tel:+15550000000"
                className="text-[13px] text-white/45 no-underline transition-colors duration-200 hover:text-white/80"
              >
                +1 (555) 000-0000
              </a>
              <a
                href="https://zcal.co/dialoguemagic/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-accent no-underline transition-opacity duration-200 hover:opacity-70"
              >
                Book a Call
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-5">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-3">
            <span className="text-[11px] text-white/15">
              &copy; {year} DialogueMagic. All rights reserved.
            </span>
            <div className="flex items-center gap-5">
              <Link to="/privacy" className="text-[11px] text-white/15 no-underline transition-colors duration-200 hover:text-white/40">
                Privacy
              </Link>
              <Link to="/terms" className="text-[11px] text-white/15 no-underline transition-colors duration-200 hover:text-white/40">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
