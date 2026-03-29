"use client";

import { Check, Tv, Crown, ChevronRight, Sparkles } from "lucide-react";
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

  // Extract numeric price for daily cost
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
  const days = duration.includes("yr") ? 365 : duration.includes("half") ? 180 : duration.includes("quarter") ? 90 : 30;
  const dailyCost = (numericPrice / days).toFixed(2);

  return (
    <motion.div 
        whileHover={{ y: -8 }}
        className={`relative group/card transition-all duration-700 ${isBestValue ? "scale-105 z-20" : "z-10"}`}
    >
      {isBestValue && (
        <div className="absolute -inset-[1px] rounded-[3rem] overflow-hidden">
            <div className="border-beam" />
        </div>
      )}

      <div
        className={`relative z-10 h-full glass-premium rounded-[3rem] p-10 border transition-all duration-500 flex flex-col ${
          isBestValue
            ? "border-brand-gold/30 shadow-[0_45px_100px_-15px_rgba(251,191,36,0.15)]"
            : "border-white/[0.05] hover:border-white/10"
        }`}
      >
        {isBestValue && (
            <div className="absolute top-0 right-10 -translate-y-1/2">
                <div className="bg-brand-gold text-[#0f172a] text-[10px] font-black px-6 py-2.5 rounded-full flex items-center gap-2 shadow-[0_20px_40px_rgba(251,191,36,0.3)] uppercase tracking-widest border-2 border-white/20">
                    <Crown className="w-4 h-4" />
                    Elite Choice
                </div>
            </div>
        )}

        <div className="mb-10">
          <div className="flex justify-between items-start mb-6">
            <h3 className={`text-sm font-black uppercase tracking-[0.4em] ${isBestValue ? "text-brand-gold" : "text-gray-500"}`}>
                {plan}
            </h3>
            {isBestValue && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 rounded-lg">
                    <Sparkles className="w-3 h-3 text-brand-green" />
                    <span className="text-brand-green text-[9px] font-black uppercase tracking-tighter">
                        Ultra 4K
                    </span>
                </div>
            )}
          </div>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-6xl font-black text-white tracking-tighter leading-none">{price}</span>
            <span className="text-xs text-gray-500 font-black uppercase tracking-[0.3em]">/ {duration}</span>
          </div>
          
          <div className="flex items-center gap-2 mt-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold text-gray-500">
                        HD
                    </div>
                ))}
             </div>
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <span className="text-white">€{dailyCost}/day</span> — Institutional Rate
             </p>
          </div>
        </div>

        <ul className="space-y-6 mb-12 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4 group/item">
              <div className={`mt-0.5 transition-all duration-500 ${isBestValue ? "text-brand-gold scale-110" : "text-brand-green opacity-40 group-hover/item:opacity-100"}`}>
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-400 text-[13px] font-bold tracking-tight transition-colors group-hover/item:text-gray-100">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="space-y-6">
          <div className="relative group/select">
            <label className="block text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4 ml-1">
              Terminal Interface
            </label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white text-xs font-black rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/50 outline-none appearance-none cursor-pointer transition-all hover:bg-white/10 hover:border-white/20 uppercase tracking-[0.2em]"
            >
              {devices.map((d) => (
                <option key={d} value={d} className="bg-[#0f172a] text-white">
                  {d}
                </option>
              ))}
            </select>
            <Tv className="absolute right-6 bottom-5 w-4 h-4 text-gray-600 pointer-events-none group-hover/select:text-brand-gold transition-colors" />
          </div>

          <a
            href={buildWhatsAppLink(plan, selectedDevice)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center gap-3 w-full py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] transition-all overflow-hidden ${
              isBestValue
                ? "bg-brand-gold text-[#0f172a] hover:shadow-[0_25px_50px_rgba(251,191,36,0.4)] shadow-xl"
                : "bg-white text-[#0f172a] hover:bg-brand-gold hover:text-[#0f172a]"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
                Order Access
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 transition-all group-hover:h-full" />
          </a>
          
          <div className="flex items-center justify-center gap-4 py-2 border-t border-white/5">
             <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-brand-green animate-ping" />
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-none">Live Setup</span>
             </div>
             <div className="w-1 h-1 bg-gray-800 rounded-full" />
             <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-none">Instant Keys</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
