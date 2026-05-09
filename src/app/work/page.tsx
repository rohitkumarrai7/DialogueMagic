import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-padding-v-lg relative z-10 mesh-gradient-light">
        {/* Glow Objects for Background Depth */}
        <div className="glow-object top-[10%] left-[5%]" />
        <div className="glow-object top-[50%] right-[5%]" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 relative z-10">
            <h1 className="font-display-hero text-display-hero md:text-[64px] text-on-background mb-6">
              Results That Speak
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Explore how our AI-native conversational interfaces have transformed engagement, streamlined operations, and driven measurable revenue growth for forward-thinking brands.
            </p>
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
            <button className="bg-primary/10 text-primary font-label-caps text-label-caps px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">All</button>
            <button className="bg-surface text-on-surface-variant font-label-caps text-label-caps px-6 py-3 rounded-full border border-outline-variant hover:border-primary/50 transition-colors">Chat Agents</button>
            <button className="bg-surface text-on-surface-variant font-label-caps text-label-caps px-6 py-3 rounded-full border border-outline-variant hover:border-primary/50 transition-colors">Voice AI</button>
            <button className="bg-surface text-on-surface-variant font-label-caps text-label-caps px-6 py-3 rounded-full border border-outline-variant hover:border-primary/50 transition-colors">WhatsApp</button>
            <button className="bg-surface text-on-surface-variant font-label-caps text-label-caps px-6 py-3 rounded-full border border-outline-variant hover:border-primary/50 transition-colors">SaaS</button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Project Card 1 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Data visualization dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYbzDXvrQV9hzVRvJ_qY3_nWXPA0grJdyTxP6H33rnTYQRVQpbpvU2OSCDTj0fnvCge5rke3O4oxx2_q7_MKUuCFoMv5qUj_7OLpsHnnBAnLBHkau6kHXgIXNV5VBqc_tG-hw3DdSPZGAPtdO_F1ewbJDgOtfC7EGwmfpW7FJzq0fWfuDstCJT4kOHJJ8KcYT-VXP2mFs-uVviwc5NM7y0M9-7sVwDP5z6MgOq4qzv6qB9SaIfFRUtE3P2xbzj2VLjgAG7Q-sUoves" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">E-Commerce</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">Automated Support Resolution</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">40% lift in conversions</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Implemented a multi-modal chat agent that intelligently routed complex queries while resolving 80% of tier-1 support tickets instantly.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Corporate communication illustration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSWS6NdJYCU-j38-2qRnC2-YHapFHThobFbsA7s57oixY9D65kEjz-KmHSfpNg8Uhk6anr8ltZUER9DaFVapRwHR3xkZYCKlDodloKyeaMu64w6OxIjDRhUYe6SKk5cmxlno33OPkgobXNotRC3iuqy6Ns49g-7fB9KS5oRZoR2qbnJv3X2uo6Ibs74TadH-WI4iQk3GTi4qqer9irUu6c__LsfFL9JnUK3rEKC7T0lgPf-U09hxSHmxWzObskVFA580ej-LN2O3gP" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">SaaS Platform</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">Conversational Onboarding Flow</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">60% reduction in setup time</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Replaced a static 10-step form with an adaptive AI dialogue sequence, drastically improving user completion rates and initial engagement.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Mobile device integration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSa7Ms1doRYc7VxdXvgaTPWkP1ChMa_KKmmhIGJHUCd37DDEpyE_gUdEreoTazV8b8t18T29IQCawTnmoUuNxvsKbHp1A7u9x4vOTP4Eb48E3ha6N5yobAUOSTOuqOfS2_rFc6ecxryqaK2Qf3bnFjWZNLAw6TtHyjtc64XiS-mbOS3izp3oAvrpRrYlK2eYq3X_hmgLe3O9A19uM1oPEdAQOdw0KMNI5-Rsf6ZQ3OdGhX0duI5q_HQXW5NqR-HhBBxaLBVz-vYTGG" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">Retail Logistics</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">WhatsApp Order Management</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">chat_bubble</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">2.5x higher engagement rate</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Integrated a robust natural language engine into WhatsApp, allowing customers to track, modify, and reorder products seamlessly via text.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Audio waveform analysis" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHUA0_VYRBd0cOd1hNYUypODREi27Rsd3m8N5A90-3jzXiTYBNQi6USj-1uDOJDi5yB6YvEJuDzIdZbQ4ywhh3NsiTrCBqDuS2wGgKbsbyxT5_rJb6SEpAkm4cdBSeui2NLjRgniLqA6V7EB2j68VRiXsXurjV9mx4jrrezreKM9Mu16FXrEfYG618-X8ceY-h3mvIXFJz88q_HvAtzSORRO-PmBZwTObf690nYrgDeLTP0ZPUUG4r2HreVhRyjg02Fs7hWw85ZPNx" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">Healthcare</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">Voice-Activated Triage</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">mic</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">35% drop in wait times</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Developed a secure voice AI system that preliminary screens patient symptoms over phone lines before routing to appropriate medical staff.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Team collaborating on tech" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0kEHX6kqa7nNQKhQXMbH4TkvD6_hTA9kINcC4S2yd1n2VBUOHt20V43edBOoWACKeAPPoQVTGiztr9T-ybCJL0oe2n5FP-fAY9oOO3gu0kWG8U-JQfxMf9AM-zmLBOBn4BE2OIoYF5YlaWcn-B688iQjUeWk-6TsrFsj5jboYQ2Ri3YHur5CfbGOd7THCMoWiG3b_aHGsMj-H775d3VK3KRCkTXbTQXyxac-NwmPejRki-iOXvQdkkoGxSDZFxcE6vZOOjhAMiv8X" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">Financial Services</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">Intelligent Lead Qualification</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">3x increase in qualified leads</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Deployed a specialized chat agent that asks dynamic, context-aware qualifying questions to filter high-value prospects for the sales team.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden card-shadow group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img alt="Server infrastructure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvjjyp6BPKcEREC39tSDwiqVL-vf3xeAGJw3N-DAG_4PPUPi6s-HI9386G2EK5Hz1RWNi-X196Yj7li1h8tgQo9Em5ZHFLwFcX2EUpV7sIkwz2WEwmMRVYm-JC3pUW33wtxZc8R8EVT0G_Ey6Q6L3OXIVHDxU7zALdJIS5K79eipjSPBqmIRal7_2MaAWfi1gdNbZqKPpuwNNJ8dLHjDOCtsyojWyYUQCD-lSsaFammI3VR0vFIZbTod0x80jfWAbacIW98YWau3g7" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-outline-variant/50">Travel &amp; Hospitality</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-[24px] font-bold text-on-background mb-4 line-clamp-2">Multi-Lingual Booking Assistant</h3>
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">language</span>
                  <p className="font-body-md text-body-md text-primary font-semibold">22% boost in global bookings</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">Created an omni-channel booking assistant capable of real-time translation and cultural context adaptation across 14 languages.</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-body-md text-body-md font-semibold hover:gap-3 transition-all">
                    View Case Study <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action Section */}
          <div className="mt-32 bg-inverse-surface rounded-[24px] p-12 md:p-16 relative overflow-hidden text-center max-w-4xl mx-auto shadow-xl">
            {/* Decorative mesh inside CTA */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #0058be 0%, transparent 70%)" }} />
            <h2 className="font-headline-lg text-headline-lg text-white mb-6 relative z-10">Ready to build your own success story?</h2>
            <p className="font-body-lg text-body-lg text-surface-variant/80 mb-10 max-w-2xl mx-auto relative z-10">Let's discuss how customized AI conversational interfaces can solve your specific business challenges and drive measurable growth.</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-white font-body-lg text-body-lg font-semibold py-4 px-10 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-200 relative z-10">
              Start the Conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
