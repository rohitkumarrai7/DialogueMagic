import { useState } from "react";
import { useInView } from "../hooks/useInView";

const plans = [
  {
    name: "Starter",
    price: "$199",
    priceYearly: "$1,990",
    period: "/mo",
    periodYearly: "/yr",
    subtitle: "For solopreneurs & small teams",
    features: [
      { text: "1 AI Chat Agent", included: true },
      { text: "Voice AI Agent", included: false },
      { text: "WhatsApp Automation", included: false },
      { text: "2,000 conversations/mo", included: true },
      { text: "Zapier/Make integration", included: true },
      { text: "Email alerts handoff", included: true },
      { text: "Email support (48h)", included: true },
    ],
    setupFee: "$99 setup",
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$499",
    priceYearly: "$4,990",
    period: "/mo",
    periodYearly: "/yr",
    subtitle: "For growing businesses",
    features: [
      { text: "2 AI Chat Agents", included: true },
      { text: "1 Voice AI Agent", included: true },
      { text: "WhatsApp Broadcast + replies", included: true },
      { text: "10,000 conversations/mo", included: true },
      { text: "Native CRM (HubSpot, GHL, Salesforce)", included: true },
      { text: "Live dashboard + SMS handoff", included: true },
      { text: "Priority support (24h)", included: true },
    ],
    setupFee: "$199 setup",
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    priceYearly: "Custom",
    period: "",
    periodYearly: "",
    subtitle: "For enterprises & agencies",
    features: [
      { text: "Unlimited chat agents", included: true },
      { text: "3+ Voice AI Agents", included: true },
      { text: "Full WhatsApp API + commerce", included: true },
      { text: "Unlimited conversations", included: true },
      { text: "Custom API + webhooks", included: true },
      { text: "Dedicated Slack channel", included: true },
      { text: "Account manager", included: true },
    ],
    setupFee: "Setup waived",
    cta: "Talk to Sales",
    highlighted: false,
  },
];

function PricingCard({ name, price, period, subtitle, features, setupFee, cta, highlighted, delay }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up relative flex flex-col rounded-2xl p-7 transition-all duration-300 max-md:p-5 ${
        highlighted
          ? "bg-text-primary text-white shadow-[0_12px_48px_rgba(0,0,0,0.15)] scale-[1.03] max-md:scale-100 z-10"
          : "bg-white border border-text-primary/[0.08]"
      } ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
          Most Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className={`font-display text-[22px] uppercase tracking-wide ${highlighted ? "text-white" : "text-text-primary"}`}>
          {name}
        </h3>
        <p className={`mt-1 text-[13px] ${highlighted ? "text-white/50" : "text-text-secondary"}`}>{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className={`font-display text-[46px] leading-none ${highlighted ? "text-white" : "text-text-primary"}`}>{price}</span>
        {period && <span className={`text-[15px] ${highlighted ? "text-white/40" : "text-text-secondary"}`}>{period}</span>}
      </div>

      <ul className="mb-7 flex flex-1 flex-col gap-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {f.included ? (
              <svg className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-accent" : "text-[#16A34A]"}`} viewBox="0 0 16 16" fill="none">
                <path d="M4 8.5l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-white/20" : "text-text-primary/20"}`} viewBox="0 0 16 16" fill="none">
                <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            )}
            <span className={`text-[13px] leading-snug ${
              f.included
                ? highlighted ? "text-white/80" : "text-text-secondary"
                : highlighted ? "text-white/25" : "text-text-primary/30"
            }`}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <p className={`mb-4 text-[11px] ${highlighted ? "text-white/30" : "text-text-secondary/50"}`}>{setupFee}</p>

      <a
        href={name === "Scale" ? "https://zcal.co/dialoguemagic/30min" : "#"}
        target={name === "Scale" ? "_blank" : undefined}
        rel={name === "Scale" ? "noopener noreferrer" : undefined}
        className={`block w-full rounded-xl py-3.5 text-center text-[14px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 ${
          highlighted
            ? "bg-accent text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:bg-accent-hover"
            : "border-2 border-text-primary/10 text-text-primary hover:border-accent hover:text-accent"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [headRef, headVisible] = useInView();
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="bg-bg pt-28 pb-28 max-md:pt-20 max-md:pb-20">
      <div className="mx-auto max-w-[1320px] px-12 max-md:px-5">
        <div ref={headRef} className="mb-14 text-center max-md:mb-10">
          <span
            className={`fade-up mb-4 inline-block rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.15em] text-accent uppercase ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            Pricing
          </span>
          <h2
            className={`fade-up mx-auto max-w-[540px] font-display text-[clamp(38px,5vw,68px)] uppercase leading-[0.92] tracking-tight text-text-primary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Simple Pricing.
            <br />
            <span className="text-accent">No Hidden Fees.</span>
          </h2>
          <p
            className={`fade-up mx-auto mt-5 max-w-[440px] text-[16px] leading-[1.7] text-text-secondary ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Start small, scale fast. Every plan includes setup, training, and 30 days of support.
          </p>

          <div
            className={`fade-up mt-7 inline-flex items-center rounded-xl border border-text-primary/[0.08] bg-white p-1 ${headVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                billing === "monthly" ? "bg-text-primary text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-lg px-5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                billing === "yearly" ? "bg-text-primary text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-[10px] text-accent font-bold">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 items-start max-lg:grid-cols-1 max-lg:gap-4">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              subtitle={plan.subtitle}
              features={plan.features}
              setupFee={plan.setupFee}
              cta={plan.cta}
              highlighted={plan.highlighted}
              price={billing === "yearly" ? plan.priceYearly : plan.price}
              period={billing === "yearly" ? plan.periodYearly : plan.period}
              delay={0.1 + i * 0.08}
            />
          ))}
        </div>

        <div className="mt-10 text-center rounded-2xl border border-text-primary/[0.06] bg-white/60 p-6">
          <p className="text-[15px] text-text-secondary">
            Need a one-time build instead? Chatbots from <strong className="text-text-primary">$499</strong>, voice agents from <strong className="text-text-primary">$899</strong>, full websites from <strong className="text-text-primary">$999</strong>.
          </p>
          <a
            href="https://zcal.co/dialoguemagic/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent no-underline transition-opacity duration-200 hover:opacity-70"
          >
            See Project Pricing
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": plans.map((plan, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Product",
                "name": `DialogueMagic ${plan.name}`,
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "price": plan.price === "Custom" ? "0" : plan.price.replace("$", "").replace(",", ""),
                },
              },
            })),
          }),
        }}
      />
    </section>
  );
}
