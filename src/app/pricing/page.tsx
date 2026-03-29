"use client";

import { useState } from "react";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { BillingToggle } from "@/components/pricing/BillingToggle";
import { PricingCard } from "@/components/ui/PricingCard";
import { FeatureComparison } from "@/components/pricing/FeatureComparison";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CreditCard, Bitcoin, Apple } from "lucide-react";

const FEATURES = [
  "+15,000 Live Channels",
  "+50,000 VODs (Movies & Series)",
  "4K / Ultra HD / FHD Quality",
  "Anti-Freeze Technology 6.0",
  "Free EPG Included",
  "24/7 Priority SLA Support",
];

const PERSONAL_PLANS = [
  {
    plan: "1 Month",
    price: "€12.99",
    duration: "mo",
    features: FEATURES,
  },
  {
    plan: "3 Months",
    price: "€29.99",
    duration: "quarter",
    features: FEATURES,
  }
];

const POWER_PLANS = [
  {
    plan: "6 Months",
    price: "€49.99",
    duration: "half",
    features: FEATURES,
  },
  {
    plan: "1 Year Pass",
    price: "€74.99",
    duration: "yr",
    features: FEATURES,
    isBestValue: true,
  }
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "power">("power");

  return (
    <div className="bg-[#020617] min-h-screen pb-32 overflow-x-hidden">
      <PricingHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BillingToggle activeTab={activeTab} onChange={setActiveTab} />

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {(activeTab === "personal" ? PERSONAL_PLANS : POWER_PLANS).map((plan, i) => (
                <PricingCard key={plan.plan} {...plan} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Payment & Trust Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 glass-premium px-12 py-10 rounded-[2.5rem] border border-white/5">
             <div className="flex items-center gap-3">
               <ShieldCheck className="w-8 h-8 text-brand-green" />
               <div className="text-left">
                 <h4 className="font-bold text-white uppercase tracking-widest text-sm">7-Day Money-Back Guarantee</h4>
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Institutional SLA Guaranteed</p>
               </div>
             </div>
             
             <div className="h-px w-full bg-white/5" />

             <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">Accepted Procurement Methods</p>
                <div className="flex items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-white" />
                        <span className="text-[9px] font-black tracking-widest uppercase">Global Cards</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bitcoin className="w-5 h-5 text-brand-gold" />
                        <span className="text-[9px] font-black tracking-widest uppercase">Crypto</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-white" />
                        <span className="text-[9px] font-black tracking-widest uppercase">Apple Pay</span>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>

        <FeatureComparison />
        
        <div className="mt-40">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.6em] mb-4">Support & FAQ</h3>
                    <h4 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">Quick <span className="text-gray-700">Resolutions.</span></h4>
                </div>
                <FAQAccordion />
            </div>
        </div>
      </div>
    </div>
  );
}
