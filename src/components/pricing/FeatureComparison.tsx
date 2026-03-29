"use client";

import { Check, X, Info } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_DATA = [
  { feature: "4K / UHD Streams", premium: true, competition: "Variable" },
  { feature: "Anti-Freeze 6.0", premium: true, competition: false },
  { feature: "EPG (TV Guide)", premium: true, competition: "Limited" },
  { feature: "VOD (50k+ Titles)", premium: true, competition: true },
  { feature: "Priority SLA Support", premium: true, competition: false },
  { feature: "Carrier-Grade Nodes", premium: true, competition: false },
  { feature: "Free Adult Pass", premium: true, competition: "Paid Add-on" },
];

export function FeatureComparison() {
  return (
    <div className="max-w-4xl mx-auto mt-32 px-6">
      <div className="text-center mb-16">
        <h3 className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-4">Transparency Grid</h3>
        <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Institutional <span className="text-gray-600">Level Comparison.</span>
        </h4>
      </div>

      <div className="glass-premium rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-8">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Network Capability</div>
            <div className="text-[10px] font-bold text-white uppercase tracking-widest text-center">Elite Network</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Others</div>
        </div>

        <div className="divide-y divide-white/5">
            {COMPARISON_DATA.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-3 p-8 group hover:bg-white/[0.02] transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-tight group-hover:text-white transition-colors underline decoration-white/5 underline-offset-8">
                            {item.feature}
                        </span>
                        <Info className="w-3 h-3 text-gray-700 hover:text-gray-400 cursor-help transition-colors" />
                    </div>
                    
                    <div className="flex justify-center items-center">
                        {item.premium === true ? (
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                <Check className="w-3.5 h-3.5 text-brand-green" />
                            </div>
                        ) : (
                            <X className="w-4 h-4 text-gray-700" />
                        )}
                    </div>

                    <div className="flex justify-end items-center">
                        {typeof item.competition === 'string' ? (
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{item.competition}</span>
                        ) : item.competition === true ? (
                             <Check className="w-3.5 h-3.5 text-gray-600" />
                        ) : (
                            <X className="w-3.5 h-3.5 text-gray-800" />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      <p className="text-center mt-10 text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] animate-pulse">
        * Based on public SLA reports and node performance testing 2024.
      </p>
    </div>
  );
}
