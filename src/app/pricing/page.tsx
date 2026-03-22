import { PricingCard } from "@/components/ui/PricingCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | IPTV Premium",
  description: "Choose the best IPTV subscription plan. Get access to 4K channels with our 1 Month, 3 Months, 6 Months, or 1 Year plans.",
};

const FEATURES = [
  "+15,000 Live Channels",
  "+50,000 VODs (Movies & Series)",
  "4K / Ultra HD / FHD / HD Quality",
  "Anti-Freeze Technology",
  "Free EPG Included",
  "24/7 Priority Support",
];

export default function PricingPage() {
  return (
    <div className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-brand-blue/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get instant access to thousands of channels and VODs. Choose the plan that fits your needs. 
            <span className="text-brand-gold font-semibold ml-2">Save 40% with our 1-year pass!</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <AnimatedSection delay={0.1}>
            <PricingCard
              plan="1 Month"
              price="$12.99"
              duration="mo"
              features={FEATURES}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <PricingCard
              plan="3 Months"
              price="$29.99"
              duration="quarter"
              features={FEATURES}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <PricingCard
              plan="6 Months"
              price="$49.99"
              duration="half"
              features={FEATURES}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <PricingCard
              plan="1 Year Pass"
              price="$74.99"
              duration="yr"
              features={FEATURES}
              isBestValue={true}
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-dark-card border border-dark-border px-6 py-4 rounded-xl">
            <ShieldCheck className="w-8 h-8 text-brand-green" />
            <div className="text-left">
              <h4 className="font-bold text-white">7-Day Money-Back Guarantee</h4>
              <p className="text-sm text-gray-400">Not satisfied? Get a full refund within 7 days. No questions asked.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
