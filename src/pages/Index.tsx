import UrgencyBanner from "@/components/sales/UrgencyBanner";
import Navbar from "@/components/sales/Navbar";
import HeroSection from "@/components/sales/HeroSection";
import StorySection from "@/components/sales/StorySection";
import ModulesSection from "@/components/sales/ModulesSection";
import NegativePositioning from "@/components/sales/NegativePositioning";
import PersonasSection from "@/components/sales/PersonasSection";
import TestimonialsSection from "@/components/sales/TestimonialsSection";
import OfferSection from "@/components/sales/OfferSection";
import ScheduleSection from "@/components/sales/ScheduleSection";
import FAQSection from "@/components/sales/FAQSection";
import BioSection from "@/components/sales/BioSection";
import FinalCTA from "@/components/sales/FinalCTA";
import Footer from "@/components/sales/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBanner />
      <Navbar />
      <HeroSection />
      <StorySection />
      <ModulesSection />
      <NegativePositioning />
      <PersonasSection />
      <TestimonialsSection />
      <OfferSection />
      <ScheduleSection />
      <FAQSection />
      <BioSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
