import { HeroSection } from "@/components/marketing/HeroSection";
import { WhyUsSection } from "@/components/marketing/WhyUsSection";
import { StatsBar } from "@/components/marketing/StatsBar";
import { DeviceMarquee } from "@/components/marketing/DeviceMarquee";
import { TechnicalBlock } from "@/components/marketing/TechnicalBlock";
import { CompatibilityGrid } from "@/components/marketing/CompatibilityGrid";
import { VODSlider } from "@/components/marketing/VODSlider";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeviceMarquee />
      <VODSlider />
      <TechnicalBlock />
      <WhyUsSection />
      <CompatibilityGrid />
      <StatsBar />
      <FAQAccordion />
    </>
  );
}
