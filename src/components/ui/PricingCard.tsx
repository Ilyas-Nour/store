"use client";

import { Check, Tv, Crown, ChevronRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";
import { motion } from "framer-motion";

interface PricingCardProps {
  plan: string;
  price: string;
  duration: string;
  features: string[];
  isBestValue?: boolean;
}

const devices = ["Smart TV", "Android Box", "Apple TV", "PC/Mac", "Firestick", "MAG"];

export function PricingCard({ plan, price, duration, features, isBestValue }: PricingCardProps) {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  // Extract numeric price for anchoring
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
  const dailyCost = (numericPrice / (duration === "1 Year" ? 365 : duration === "6 Months" ? 180 : duration === "3 Months" ? 90 : 30)).toFixed(2);

  return (
    <div className={`relative group/card transition-all duration-500 ${isBestValue ? "scale-105 md:scale-110 z-20" : "z-10"}`}>
      {isBestValue && (
        <>
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              boxShadow: [
                "0 0 20px rgba(251,191,36,0.2)",
                "0 0 40px rgba(251,191,36,0.4)",
                "0 0 20px rgba(251,191,36,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[2px] bg-brand-gold rounded-[2.5rem] z-0"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -12 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
          >
            <div className="bg-brand-gold text-[#0f172a] text-[10px] font-black px-5 py-2 rounded-full flex items-center gap-2 shadow-[0_15px_30px_rgba(251,191,36,0.4)] uppercase tracking-widest border-2 border-white/20">
              <Crown className="w-3.5 h-3.5" />
              Institutional Choice
            </div>
          </motion.div>
        </>
      )}

      <div
        className={`relative z-10 h-full bg-[#0f172a]/80 backdrop-blur-2xl rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col ${
          isBestValue
            ? "border-brand-gold/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            : "border-white/[0.05] hover:border-white/10"
        }`}
      >
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-black uppercase tracking-widest ${isBestValue ? "text-brand-gold" : "text-gray-400"}`}>
                {plan}
            </h3>
            {isBestValue && (
                <span className="bg-brand-green/10 text-brand-green text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                    -40% Yearly
                </span>
            )}
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-white tracking-tighter">{price}</span>
            <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">/ {duration}</span>
          </div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Less than <span className="text-white">${dailyCost}/day</span> — price of a coffee
          </p>
        </div>

        <ul className="space-y-5 mb-10 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4 group/item">
              <div className={`mt-1 transition-colors ${isBestValue ? "text-brand-gold" : "text-brand-green"}`}>
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-400 text-sm font-bold tracking-tight transition-colors group-hover/item:text-gray-100">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="space-y-6">
          <div className="relative">
            <label className="block text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3 ml-1">
              Terminal Compatibility
            </label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="w-full bg-dark-bg/50 border border-white/10 text-white text-xs font-bold rounded-2xl px-5 py-4 focus:ring-1 focus:ring-brand-gold/50 focus:border-brand-gold/50 outline-none appearance-none cursor-pointer transition-all hover:bg-white/[0.05] uppercase tracking-widest"
            >
              {devices.map((d) => (
                <option key={d} value={d} className="bg-dark-bg text-white">
                  {d}
                </option>
              ))}
            </select>
            <Tv className="absolute right-5 bottom-4 w-4 h-4 text-gray-600 pointer-events-none" />
          </div>

          <a
            href={buildWhatsAppLink(plan, selectedDevice)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all overflow-hidden ${
              isBestValue
                ? "bg-brand-gold text-[#0f172a] hover:shadow-[0_20px_40px_rgba(251,191,36,0.3)] shadow-lg"
                : "bg-white text-dark-bg hover:bg-brand-green hover:text-white"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
                Order Secure Access
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-full hover:translate-x-0 transition-transform duration-500" />
          </a>
          
          <p className="text-center text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            Instant Activation &bull; 24/7 Support
          </p>
        </div>
      </div>
    </div>
  );
}
