"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const words = "THE FUTURE OF CINEMA IS HERE".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-0 bg-dark-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/0 via-dark-bg/50 to-dark-bg z-10" />
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl px-4 py-2 rounded-full mb-12 shadow-2xl"
        >
          <span className="flex items-center gap-2">
            <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.2em]">
               Official Ecosystem
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
              Trusted by 10k+ Members
            </span>
          </span>
        </motion.div>

        <motion.div
           variants={container}
           initial="hidden"
           animate="visible"
           className="flex flex-wrap justify-center gap-x-4 mb-8"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="text-5xl md:text-[100px] font-black leading-[1] tracking-[-0.04em] text-white"
            >
              {word === "CINEMA" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic">
                  {word}
                </span>
              ) : word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
        >
          Say goodbye to buffering. Experience <span className="text-white">RAW 4K</span> streaming with our proprietary Edge-Network technology. 15,000+ Live Channels and VODs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <Link
            href="/pricing"
            className="group relative w-full sm:w-auto px-12 py-6 bg-white text-dark-bg font-black rounded-2xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
              Explore Subscriptions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link
            href="/channels"
            className="w-full sm:w-auto px-12 py-6 bg-white/[0.03] border border-white/[0.08] text-white font-black rounded-2xl text-lg backdrop-blur-xl transition-all hover:bg-white/[0.06] hover:border-white/[0.15] uppercase tracking-widest text-sm"
          >
            Full Channel List
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="w-full"
        >
            <div className="text-center mb-8">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">
                    Seamlessly Compatible With
                </span>
            </div>
            {/* Infinite bar here */}
        </motion.div>
      </div>
    </section>
  );
}
