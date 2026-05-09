import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-padding-v-lg">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[80px] rounded-full -z-10" />
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-on-background mb-6">
            Simple Pricing. <br /> <span className="text-primary">No Hidden Fees.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Transparent plans designed to scale with your AI dialogue needs. Choose the perfect tier for your business.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="font-body-md text-body-md text-on-surface-variant">Monthly</span>
            <button className="w-14 h-8 bg-surface-container-high rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span className="absolute left-1 top-1 w-6 h-6 bg-primary rounded-full transition-transform duration-200" />
            </button>
            <span className="font-body-md text-body-md text-on-surface">Annually <span className="text-primary font-bold text-sm ml-1">(Save 20%)</span></span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-[1280px] mx-auto px-6 mb-section-padding-v-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Starter Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col relative z-10">
            <h3 className="font-headline-lg text-[32px] text-on-background mb-2">Starter</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 min-h-[48px]">Perfect for small teams getting started with AI.</p>
            <div className="mb-8 flex items-baseline">
              <span className="font-display-hero-mobile text-display-hero-mobile text-on-background">$199</span>
              <span className="font-body-md text-body-md text-on-surface-variant ml-2">/mo</span>
            </div>
            <Link href="/contact" className="w-full text-center bg-transparent border-2 border-primary text-primary rounded-xl px-8 py-4 font-body-md text-body-md hover:bg-primary/5 transition-colors duration-200 mb-8">
              Get Started
            </Link>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Up to 5,000 queries/mo</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Basic NLP Models</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Email Support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Standard Integrations</span>
              </div>
            </div>
          </div>

          {/* Growth Card (Popular) */}
          <div className="bg-surface-container-lowest border border-primary rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,88,190,0.1)] flex flex-col relative z-20 scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps text-label-caps px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="font-headline-lg text-[32px] text-on-background mb-2">Growth</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 min-h-[48px]">Advanced capabilities for scaling operations.</p>
            <div className="mb-8 flex items-baseline">
              <span className="font-display-hero-mobile text-display-hero-mobile text-on-background">$499</span>
              <span className="font-body-md text-body-md text-on-surface-variant ml-2">/mo</span>
            </div>
            <Link href="/contact" className="w-full text-center bg-primary text-on-primary rounded-xl px-8 py-4 font-body-md text-body-md hover:brightness-110 transition-all duration-200 mb-8">
              Start Free Trial
            </Link>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Up to 50,000 queries/mo</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Advanced Custom Models</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Priority 24/7 Support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Premium Integrations (CRM, ERP)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Advanced Analytics Dashboard</span>
              </div>
            </div>
          </div>

          {/* Scale Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col relative z-10">
            <h3 className="font-headline-lg text-[32px] text-on-background mb-2">Scale</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 min-h-[48px]">Enterprise-grade solutions for complex needs.</p>
            <div className="mb-8 flex items-baseline">
              <span className="font-display-hero-mobile text-display-hero-mobile text-on-background text-[40px]">Custom</span>
            </div>
            <Link href="/contact" className="w-full text-center bg-transparent border-2 border-outline-variant text-on-surface-variant rounded-xl px-8 py-4 font-body-md text-body-md hover:bg-surface-container-low transition-colors duration-200 mb-8">
              Contact Sales
            </Link>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Unlimited Queries</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Dedicated AI Engineer</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">SLA Guarantees</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Custom Deployment (On-Prem)</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[800px] mx-auto px-6 mb-section-padding-v-lg">
          <h2 className="font-headline-lg text-headline-lg text-center text-on-background mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors duration-200">
                <span className="font-body-lg text-body-lg text-on-background font-semibold">How long does setup take?</span>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
            <div className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors duration-200">
                <span className="font-body-lg text-body-lg text-on-background font-semibold">Can I upgrade or downgrade later?</span>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
            <div className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors duration-200">
                <span className="font-body-lg text-body-lg text-on-background font-semibold">What integrations do you support?</span>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
            <div className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors duration-200">
                <span className="font-body-lg text-body-lg text-on-background font-semibold">Is my data secure?</span>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
            <div className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors duration-200">
                <span className="font-body-lg text-body-lg text-on-background font-semibold">Do you offer discounts for non-profits?</span>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="max-w-[1280px] mx-auto px-6">
          <div className="bg-surface-container-low rounded-2xl p-10 text-center flex flex-col md:flex-row items-center justify-between border border-outline-variant/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] rounded-full -z-10" />
            <div className="text-left mb-6 md:mb-0">
              <h3 className="font-headline-lg text-[24px] text-on-background mb-2">Need a one-time build instead?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We offer custom project pricing for specific, scoped implementations.</p>
            </div>
            <Link href="/contact" className="bg-surface-container-lowest border-2 border-primary text-primary rounded-xl px-8 py-4 font-body-md text-body-md hover:bg-primary/5 transition-colors duration-200 whitespace-nowrap">
              Check our Project Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
