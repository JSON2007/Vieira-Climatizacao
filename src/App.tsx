import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { BrandsSection } from "./components/sections/BrandsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { CleaningSection } from "./components/sections/CleaningSection";
import { DifferentialsSection } from "./components/sections/DifferentialsSection";
import { AttentionSection } from "./components/sections/AttentionSection";
import { FaqSection } from "./components/sections/FaqSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <CleaningSection />
        <DifferentialsSection />
        <AttentionSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
