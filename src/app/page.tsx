"use client";

import { useState } from "react";
import { HeroSection } from "@/components/marketing/HeroSection";
import { PricingSection, type Plan } from "@/components/marketing/PricingSection";
import { ContentShowcase } from "@/components/marketing/ContentShowcase";
import { LogoMarquee } from "@/components/marketing/LogoMarquee";
import { ChannelMarquee } from "@/components/marketing/ChannelMarquee";
import { InfrastructureGrid } from "@/components/marketing/InfrastructureGrid";
import { ReviewsGrid } from "@/components/marketing/ReviewsGrid";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CheckoutModal } from "@/components/checkout/CheckoutModal";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleSelectPlan = (plan: Plan, device: string) => {
    setSelectedPlan(plan);
    setSelectedDevice(device);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="bg-[#020617] min-h-screen">
      <HeroSection />
      
      {/* 1. Entertainment Trust Logo Grid */}
      <LogoMarquee />

      {/* 2. Interactive Content Showcase */}
      <ContentShowcase />

      {/* 3. Global Channel Marquee (3 Rows) */}
      <ChannelMarquee />

      {/* 4. Pricing Engine */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 5. Technical Transparency Grid */}
      <InfrastructureGrid />

      {/* 6. Social Proof */}
      <ReviewsGrid />

      {/* 7. FAQ */}
      <FAQAccordion />

      {/* Checkout System */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        plan={selectedPlan ? { name: selectedPlan.name, price: parseFloat(selectedPlan.price) } : null}
        device={selectedDevice}
      />
    </div>
  );
}
