"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity } from "lucide-react";

export function PricingHeader() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-blue/10 blur-[120px] -z-10 rounded-full opacity-50 transition-opacity duration-1000 group-hover:opacity-100" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-green/20 blur-[100px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Activity className="w-3.5 h-3.5 text-brand-green animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            All Nodes Operational • 99.9% Uptime
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8"
        >
          PREMIUM <span className="text-white/20 italic">OR</span> NOTHING.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Experience the world's most stable IPTV infrastructure. No buffers, 
          no compromises. Just pure <span className="text-white font-bold">4K Ultra HD</span> excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
            <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Anti-Freeze 6.0</span>
            </div>
            <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Global CDN</span>
            </div>
            <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">24/7 SLA</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
