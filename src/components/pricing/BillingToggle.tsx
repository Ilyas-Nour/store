"use client";

import { motion } from "framer-motion";

interface BillingToggleProps {
  activeTab: "personal" | "power";
  onChange: (tab: "personal" | "power") => void;
}

export function BillingToggle({ activeTab, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center mb-16 px-4">
      <div className="relative flex p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-[450px]">
        {/* Animated Background Slider */}
        <motion.div
           layoutId="activeTab"
           className="absolute inset-y-1.5 bg-brand-gold rounded-full shadow-[0_10px_25px_rgba(251,191,36,0.3)]"
           initial={false}
           animate={{
             left: activeTab === "personal" ? "6px" : "50%",
             right: activeTab === "personal" ? "50%" : "6px",
           }}
           transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <button
          onClick={() => onChange("personal")}
          className={`relative z-10 flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
            activeTab === "personal" ? "text-[#0f172a]" : "text-gray-400 hover:text-white"
          }`}
        >
          Casual Streamer
        </button>
        <button
          onClick={() => onChange("power")}
          className={`relative z-10 flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
            activeTab === "power" ? "text-[#0f172a]" : "text-gray-400 hover:text-white"
          }`}
        >
          Power Network
        </button>
      </div>

      <p className="mt-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
        <span>1 Device</span>
        <span className="w-1 h-1 bg-gray-600 rounded-full" />
        <span className="text-brand-green">Auto-scaling Infrastructure</span>
        <span className="w-1 h-1 bg-gray-600 rounded-full" />
        <span>Unlimited 4K</span>
      </p>
    </div>
  );
}
