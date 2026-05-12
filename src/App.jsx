import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlackSection from "./components/BlackSection";
import CommunicateSection from "./components/CommunicateSection";
import ServicesSection from "./components/ServicesSection";
import TrackSection from "./components/TrackSection";
import DemoSection from "./components/DemoSection";
import IntegrationsSection from "./components/IntegrationsSection";
import PricingSection from "./components/PricingSection";
import BookingSection from "./components/BookingSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BlackSection />
        <CommunicateSection />
        <ServicesSection />
        <TrackSection />
        <DemoSection />
        <IntegrationsSection />
        <PricingSection />
        <BookingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
