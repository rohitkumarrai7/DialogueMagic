import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="py-section-padding-v-lg px-6 relative overflow-hidden">
          {/* Abstract Glow Object */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] -z-10" />
          <div className="max-w-max-width mx-auto text-center">
            <h1 className="font-display-hero text-display-hero text-on-background mb-6">Everything We Build</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Discover our suite of AI-native solutions designed to automate workflows, engage customers, and scale your operations with clinical precision and approachable warmth.
            </p>
          </div>
        </section>

        {/* Services Section (Alternating Stack) */}
        <section className="py-section-padding-v-sm px-6 max-w-max-width mx-auto space-y-[120px]">
          {/* Service 1: AI Chat Agents */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 h-[400px]">
              <img alt="AI Chat Agent Interface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJpLXpN2UnYiXbl9lZw6QbEv9VrXgvAQDDyZUElxfnZDctUpAWBQyXENyIYHzw2m3ADi7mabd2nSQcj1Qf2faKXcfOMpCfqf2NF3wkpy-K5Cc-cfwEwJXYcYUdcrpKQQ0Xldc0pUWNrUkSLnmyAKyWbnLk-PuBOGGbcUYGh8tH-dZqNKaetkf24uXC2OuhU56XlJKcfW6AIsiwmjcHNzNvTOLcVVcouqMzQuzQwDCHI8kJSzjmoQwrrFA_yJNNMDRVmD90sRaqm6zJ" />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-6">
              <span className="inline-block bg-primary/10 text-primary font-label-caps text-label-caps px-3 py-1 rounded-full">From $299/mo</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">AI Chat Agents</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">24/7 intelligent customer support automation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Seamless integration with your existing knowledge base.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Human-handoff capabilities for complex queries.</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block border-2 border-primary text-primary bg-transparent font-body-md text-body-md px-8 py-4 rounded-xl hover:bg-primary/5 transition-all">
                Book This Service
              </Link>
            </div>
          </div>

          {/* Service 2: Voice AI Agents */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 space-y-6 md:order-1 order-2">
              <span className="inline-block bg-primary/10 text-primary font-label-caps text-label-caps px-3 py-1 rounded-full">From $499/mo</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Voice AI Agents</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Inbound and outbound call automation with natural voices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Real-time CRM logging and transcription.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Multi-language support for global reach.</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block border-2 border-primary text-primary bg-transparent font-body-md text-body-md px-8 py-4 rounded-xl hover:bg-primary/5 transition-all">
                Book This Service
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 h-[400px] md:order-2 order-1">
              <img alt="Voice AI Visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcX1uoJJnRvoYOySHDB7thpu-zoEhPeOYZuxWxRExjeTheF1qpmklMQYUIlZfElEWaDtft72m18jjyZRkEB7L1Dd1H4CTqfDGkahngwdP6jjXeaDwlIk-mWW6epNGMaHsGHGWk8NNMWNVoVs5tsPrYzlkly-9A7N5JGIeAlukC_YRBopkRomcO2VmRw6qbGkCbYNnb74wvchqW0l72G3KbkLRfR2aty-Elry2vf_6YiBRa_Btcm7TKuqZTKFRIDaaU734u92_KPp4A" />
            </div>
          </div>

          {/* Service 3: WhatsApp Automation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 h-[400px]">
              <img alt="WhatsApp Automation Dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp--N1idvxA0beg6PfJ-7JaH3GzQZXhb-ngHeFdAmlIKrYWqMMKR6S7QC5ykmrJ-41E8mslm9lc7_DewoAMSB38c4GoIknIyg0A2AgusfifQIpSDEJj0vI1nv6tCR7jwbzlcNLL3ZhZJkSVnvkRpfBFUYaAEIZEjShy3B1okvYgoaoWe6_AYt_31jBLqD2z4n0RA8OmJsf1-cy5uYfglmHjS_KX20OuDUjWuSTxgYFr_CPxJtEiKcVFumNNdKcJKlljN-gUZ6UyTit" />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-6">
              <span className="inline-block bg-primary/10 text-primary font-label-caps text-label-caps px-3 py-1 rounded-full">From $349/mo</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">WhatsApp Automation</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Automated lead qualification directly in WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Broadcast campaigns with personalized messaging.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">E-commerce order tracking and notifications.</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block border-2 border-primary text-primary bg-transparent font-body-md text-body-md px-8 py-4 rounded-xl hover:bg-primary/5 transition-all">
                Book This Service
              </Link>
            </div>
          </div>

          {/* Service 4: SaaS & Web Dev */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 space-y-6 md:order-1 order-2">
              <span className="inline-block bg-primary/10 text-primary font-label-caps text-label-caps px-3 py-1 rounded-full">Custom Quote</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">SaaS &amp; Web Dev</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Custom AI-integrated web applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">High-performance, scalable cloud architectures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">UI/UX design focused on conversion and modern aesthetics.</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block border-2 border-primary text-primary bg-transparent font-body-md text-body-md px-8 py-4 rounded-xl hover:bg-primary/5 transition-all">
                Book This Service
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 h-[400px] md:order-2 order-1">
              <img alt="Web Development Environment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxTFiLa6V8VXiHA4L3FCZKTacLwIUnyNVh3NEasn2XnmK3HUoxIYbZxANeEQQf7JE6OwSIBR4Hu6fVrorSthHMTCmx_ddVFCjRQp1yaPtqITAvPg2GaUvuqTSSjSXY30Sa6UNR1jy3RjllfBkmPELtPzaMYqLlg9gqR0zxNLi9_alzea9wAxyEPDnUrzDfJXHPNM50R1lqDe-BAZr7fwRUYsrlJgzmUIuWywhqreOdL_Zg9qGK8DfDE33zWryDATVVbrb7gCiSdk-F" />
            </div>
          </div>
        </section>

        {/* Bottom CTA (Conversion Section) */}
        <section className="py-section-padding-v-lg px-6">
          <div className="max-w-max-width mx-auto mesh-gradient-services-cta rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Glassmorphism overlay for the content */}
            <div className="relative z-10 bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-2xl p-8 md:p-16 max-w-3xl mx-auto shadow-[0px_4px_20px_rgba(15,23,42,0.1)]">
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">Not sure what you need?</h2>
              <p className="font-body-lg text-body-lg text-white/80 mb-8">
                Book a free 15-minute audit. We'll analyze your current workflows and recommend the highest-impact AI automation strategies for your business.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-on-primary font-body-md text-body-md px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all">
                Book a Free Audit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
