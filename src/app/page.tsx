import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-20 flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative mesh-gradient-dark text-white overflow-hidden py-section-padding-v-lg md:py-32 lg:py-40">
          <div className="glow-object w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
          <div className="glow-object w-96 h-96 bottom-0 right-0 translate-x-1/3 translate-y-1/3" />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8 md:col-start-3 text-center flex flex-col items-center">
              {/* Pill */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">AI-Native Agency</span>
              </div>
              {/* Headline */}
              <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero font-bold mb-6 text-white drop-shadow-md">
                AI Agents That Talk, Sell &amp; Support — <span className="text-primary-fixed-dim">While You Sleep</span>
              </h1>
              {/* Subheadline */}
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim mb-10 max-w-2xl mx-auto">
                Transform your customer experience and boost conversions with intelligent chatbots and voice AI. We build autonomous systems that feel human, scale infinitely, and drive measurable revenue for forward-thinking brands.
              </p>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md text-body-md font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200 shadow-sm"
                >
                  See Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary-fixed-dim border-2 border-primary-fixed-dim rounded-xl font-body-md text-body-md font-semibold hover:bg-primary-fixed-dim/10 transition-all duration-200"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social Proof ── */}
        <section className="py-12 bg-surface-container-low border-b border-outline-variant/20">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8">
              Trusted by forward-thinking businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center justify-center">
                <img src="/wegoauthentic.png" alt="WeGo Authentic" className="h-14 object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/astrobaba.png" alt="Astrobaba" className="h-14 object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/hashtric.png" alt="Hashtric" className="h-14 object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/outflic.png" alt="Outflic" className="h-14 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-section-padding-v-sm md:py-section-padding-v-lg bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
                Precision-Engineered AI Solutions
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Discover how our specialized AI agents can automate your workflows and multiply your sales
                capability across every channel.
              </p>
            </div>
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Card 1 */}
              <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 md:p-10 card-shadow group">
                <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">forum</span>
                </div>
                <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-3">Real-Time Sales Chat</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  Intelligent text-based agents that qualify leads, answer complex product queries, and close deals
                  24/7 without human intervention.
                </p>
                <Link href="/services" className="inline-flex items-center font-body-md text-body-md font-semibold text-primary group-hover:text-primary-fixed-variant transition-colors">
                  Learn More <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 md:p-10 card-shadow group">
                <div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-6 text-secondary">
                  <span className="material-symbols-outlined text-3xl">record_voice_over</span>
                </div>
                <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-3">Voice AI</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  Lifelike voice agents capable of handling inbound support calls, scheduling appointments, and
                  conducting outbound qualification campaigns.
                </p>
                <Link href="/services" className="inline-flex items-center font-body-md text-body-md font-semibold text-primary group-hover:text-primary-fixed-variant transition-colors">
                  Learn More <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 card-shadow group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center mb-5 text-tertiary">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <h3 className="font-body-md text-body-md font-bold text-on-surface mb-2">WhatsApp Automation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm flex-grow">
                  Engage customers where they already are with personalized, proactive messaging flows.
                </p>
                <Link href="/services" className="inline-flex items-center font-body-md text-body-md font-semibold text-primary group-hover:text-primary-fixed-variant transition-colors mt-auto">
                  Learn More <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 card-shadow group flex flex-col justify-center relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />
                <div className="md:flex items-start gap-8 z-10">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-outline-variant/20 flex items-center justify-center mb-5 md:mb-0 text-on-surface-variant">
                    <span className="material-symbols-outlined text-2xl">code</span>
                  </div>
                  <div>
                    <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">SaaS &amp; Web Dev</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      Custom software development to integrate AI seamlessly into your existing tech stack or build
                      powerful new platforms from the ground up.
                    </p>
                    <Link href="/services" className="inline-flex items-center font-body-md text-body-md font-semibold text-primary group-hover:text-primary-fixed-variant transition-colors">
                      Learn More <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Case Study Strip ── */}
        <section className="py-16 md:py-24 mesh-gradient-dark relative overflow-hidden">
          <div className="glow-object w-[500px] h-[500px] top-1/2 left-1/2 opacity-30" style={{ transform: "translate(-50%,-50%)" }} />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white max-w-4xl mx-auto shadow-2xl">
              <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider mb-4 block">
                Proven Results
              </span>
              <h2 className="font-display-hero-mobile text-display-hero-mobile md:text-[56px] leading-tight font-bold mb-6">
                Automated <span className="text-primary-fixed-dim">Conversational Sales</span> for Forward-Thinking Brands.
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim mb-8 max-w-2xl mx-auto">
                See how our Real-Time Sales Chat agent intelligently recovers abandoned carts, answers queries, and upsells customers automatically.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-on-primary-fixed rounded-xl font-body-md text-body-md font-semibold hover:bg-surface-container-low transition-colors duration-200"
              >
                Read the Case Study
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Us Section ── */}
        <section className="py-section-padding-v-sm md:py-section-padding-v-lg bg-surface-bright">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
                The DialogueMagic Advantage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Why fast-growing companies choose us to build their AI infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "bolt",
                  title: "Deploy in 48 Hours",
                  desc: "Our proprietary frameworks allow us to launch production-ready AI agents faster than traditional agencies.",
                },
                {
                  icon: "memory",
                  title: "AI-Native Approach",
                  desc: "We don't just add AI features; we build systems from the ground up designed around LLM capabilities.",
                },
                {
                  icon: "handshake",
                  title: "Seamless Human Handoff",
                  desc: "When conversations get too complex, our agents elegantly route chats to human reps with full context.",
                },
              ].map((feat) => (
                <div key={feat.title} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                    <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-3">{feat.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
