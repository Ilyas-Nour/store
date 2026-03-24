"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const bgImages = [
  "/vod.jpg",
  "/clapperboard-spilled-popcorn-red-cloth.jpg",
  "/man-watching-tv-eating-popcorn.jpg",
  "/sports-tools.jpg"
];

export function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] flex flex-col items-center justify-center overflow-hidden bg-[#020617] w-full">
      {/* Cinematic Background Slider with Guaranteed Fallback */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center brightness-[0.7] saturate-[1.2]"
            style={{ backgroundImage: `url('${bgImages[currentBg]}')` }}
          />
        </AnimatePresence>
        
        {/* Institutional Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      <div className="relative z-20 text-center max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center pt-24">
        {/* Institutional Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-[100px] lg:text-[130px] font-bold leading-[0.85] tracking-[-0.07em] text-white mb-8 max-w-[14ch] mx-auto uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
        >
          THE ULTIMATE <span className="text-white/40">STREAMING</span> AUTHORITY
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight px-4 drop-shadow-xl"
        >
          Institutional-grade <span className="text-white font-bold">4K Native infrastructure</span>. Zero latency direct peering. The only IPTV subscription verified for <span className="text-white font-bold">Professional Sports & Cinema.</span>
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4"
        >
          <Link
            href="/pricing"
            className="group relative w-full sm:w-auto px-12 py-6 bg-white text-black font-bold rounded-full text-base transition-all hover:bg-slate-100 active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3"
          >
            <span className="uppercase tracking-widest text-xs">Activate Subscription</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button
            onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-12 py-6 bg-black/60 border border-white/20 text-white font-bold rounded-full text-base backdrop-blur-3xl transition-all hover:bg-white/[0.1] hover:border-white/[0.3] flex items-center justify-center gap-3 shadow-xl"
          >
            <span className="uppercase tracking-widest text-xs">View Pricing</span>
          </button>
        </motion.div>

        {/* Trust Infrastructure Grid */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/[0.1] pt-12 w-full"
        >
            <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tighter drop-shadow-lg">15,000+</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] text-center">Global Channels</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tighter drop-shadow-lg">4K NATIVE</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] text-center">Reference Quality</span>
            </div>
            <div className="flex flex-col items-center hidden md:flex">
                <span className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tighter drop-shadow-lg">99.99%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] text-center">SLA Uptime</span>
            </div>
            <div className="flex flex-col items-center hidden md:flex">
                <span className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tighter drop-shadow-lg">&lt;10MS</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] text-center">Direct Peering</span>
            </div>
        </motion.div>
      </div>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {bgImages.map((_, i) => (
          <div 
            key={i}
            className={`h-[2px] transition-all duration-700 rounded-full ${i === currentBg ? "w-12 bg-white" : "w-4 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
