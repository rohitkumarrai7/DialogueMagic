"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useMutation } from "convex/react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // @ts-ignore
  const sendMessage = useMutation("messages:sendMessage");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendMessage(data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col mesh-bg-contact relative overflow-x-hidden">
      {/* Ambient Glows */}
      <div className="ai-glow top-20 -left-20" />
      <div className="ai-glow bottom-40 -right-20" />
      <Navbar />

      <main className="flex-grow pt-32 pb-section-padding-v-sm md:pb-section-padding-v-lg px-6 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8 sticky top-32">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-caps text-label-caps rounded-full mb-4 uppercase">
                Let's Talk
              </span>
              <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-6">
                Let's Build Your AI Agent
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Ready to automate your workflows and scale with AI-native precision? Reach out to our team of experts and let's map out your transformation.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-outline-variant/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                </div>
                <div>
                  <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1">Sourabh Prasad</h3>
                  <a className="font-body-md text-body-md text-primary hover:underline" href="tel:+917294870347">+91 72948 70347</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                </div>
                <div>
                  <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1">Rohit kumar Rai</h3>
                  <a className="font-body-md text-body-md text-primary hover:underline" href="tel:+917086188997">+91 7086188997</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                </div>
                <div>
                  <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1">Direct Booking</h3>
                  <a className="font-body-md text-body-md text-primary hover:underline flex items-center" href="https://zcal.co/dialoguemagic/30min" target="_blank" rel="noreferrer">
                    Schedule via Zcal
                    <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 inline-flex items-center space-x-2 bg-surface-container px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-label-caps text-label-caps text-on-surface-variant">We reply within 4 hours</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 lg:col-start-6 mt-12 lg:mt-0">
            <div className="glass-card-light rounded-2xl p-8 md:p-10 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6">
                    Thanks for reaching out! We will get back to you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-100 text-red-800 p-4 rounded-xl mb-6">
                    Something went wrong. Please try again.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="name">Full Name</label>
                    <input required className="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md outline-none" id="name" name="name" placeholder="Jane Doe" type="text" disabled={status === "loading"} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="business">Business Name</label>
                    <input required className="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md outline-none" id="business" name="business" placeholder="Acme Corp" type="text" disabled={status === "loading"} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="email">Work Email</label>
                  <input required className="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md outline-none" id="email" name="email" placeholder="jane@acmecorp.com" type="email" disabled={status === "loading"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="service">Service Needed</label>
                    <select required className="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface-variant outline-none cursor-pointer" id="service" name="service" defaultValue="" disabled={status === "loading"}>
                      <option disabled value="">Select a service...</option>
                      <option value="custom-agent">Custom AI Agent</option>
                      <option value="workflow-automation">Workflow Automation</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="budget">Estimated Budget</label>
                    <select required className="w-full h-12 px-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface-variant outline-none cursor-pointer" id="budget" name="budget" defaultValue="" disabled={status === "loading"}>
                      <option disabled value="">Select budget...</option>
                      <option value="under-5k">Under $5k</option>
                      <option value="5k-15k">$5k - $15k</option>
                      <option value="15k-50k">$15k - $50k</option>
                      <option value="50k-plus">$50k+</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body-md text-body-md font-semibold text-on-surface block" htmlFor="message">Project Details</label>
                  <textarea required className="w-full p-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md resize-none outline-none" id="message" name="message" placeholder="Tell us about your current processes and what you're looking to achieve with AI..." rows={4} disabled={status === "loading"} />
                </div>
                <button disabled={status === "loading"} className="w-full bg-primary text-on-primary font-body-lg text-body-lg font-semibold py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-200 flex justify-center items-center space-x-2 disabled:opacity-50 disabled:scale-100" type="submit">
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section Bottom */}
        <div className="mt-24 rounded-2xl overflow-hidden h-[400px] relative glass-card-light p-2 border border-outline-variant/30">
          <img alt="Map Placeholder" className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 opacity-80 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-ObCOCeQL7EmcuFhDk23XAvGaCPBs6z7pUGogb68s8ZAIo6ZcJZIcHILKzC1O0iHoKMM0Tlu2PMj6Em9l-CQ3bjHMmlfzrnyjqR57t83SC98m3vVFiG30d4TPR2sn-maqwG-cNPQWgScAh8ZkeYNkMkTxAcDjAETOVlADlaKqD67dKNecF5evt0j8vTwo5kM6opk6LxA_CRu6bynCLoLIxVEfEvTYOojtyoCcTlcGsntoh0QOZP_6SnzJ00IMjIB_EemRr3nJ7HF" />
          {/* Floating Office Card over map */}
          <div className="absolute bottom-8 left-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant/30 shadow-lg max-w-sm">
            <h4 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">India Office</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">DialogueMagic Agency<br/>Pune, Maharashtra</p>
            <a className="font-body-md text-body-md text-primary font-semibold flex items-center hover:underline" href="#">
              Get Directions <span className="material-symbols-outlined text-sm ml-1">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
