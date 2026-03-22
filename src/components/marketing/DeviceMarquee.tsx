"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Laptop, Tablet, Tv } from "lucide-react";

const devices = [
  { name: "Amazon Firestick", icon: Monitor },
  { name: "Apple TV", icon: Monitor },
  { name: "Android TV", icon: Tv },
  { name: "Samsung Smart TV", icon: Tv },
  { name: "LG Smart TV", icon: Tv },
  { name: "iOS / iPhone", icon: Smartphone },
  { name: "Android Phone", icon: Smartphone },
  { name: "PC / Mac", icon: Laptop },
  { name: "Tablets / iPads", icon: Tablet },
  { name: "MAG Boxes", icon: Monitor },
];

export function DeviceMarquee() {
  return (
    <div className="py-20 bg-dark-bg/50 border-y border-white/[0.05] overflow-hidden whitespace-nowrap relative">
       {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-dark-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-dark-bg to-transparent z-10" />

      <div className="flex flex-col gap-8">
        <div className="text-center">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-12">
                Unified Compatibility
            </h3>
        </div>

        <motion.div
           animate={{ x: [0, -1920] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex gap-12 items-center"
        >
          {[...devices, ...devices].map((device, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-4 rounded-2xl backdrop-blur-xl group hover:border-white/20 transition-colors"
            >
              <device.icon className="w-6 h-6 text-gray-400 group-hover:text-brand-green transition-colors" />
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                {device.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
