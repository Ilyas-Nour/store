"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, Tablet, Laptop, Monitor, Boxes } from "lucide-react";

const devices = [
  { name: "Smart TV", icon: Tv, desc: "Samsung, LG, Sony", color: "bg-blue-500" },
  { name: "Firestick", icon: Boxes, desc: "Amazon Fire TV 4K", color: "bg-orange-500" },
  { name: "Apple TV", icon: Monitor, desc: "tVOS 15+ Compatible", color: "bg-gray-100" },
  { name: "Android", icon: Smartphone, desc: "Phones & Tablets", color: "bg-green-500" },
  { name: "PC / Mac", icon: Laptop, desc: "Web Player & VLC", color: "bg-purple-500" },
  { name: "MAG Boxes", icon: Tablet, desc: "Stalker Portal Support", color: "bg-red-500" }
];

export function CompatibilityGrid() {
  return (
    <section className="py-24 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 transition-all">UNIVERSAL</span> COMPATIBILITY
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
            Proprietary apps for every screen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {devices.map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.05 }}
              className="relative group p-8 rounded-[2.5rem] bg-[#0f172a]/50 border border-white/[0.05] flex flex-col items-center text-center transition-all hover:bg-white/[0.03] hover:border-white/10"
            >
              <div className={`p-4 rounded-3xl mb-6 shadow-2xl relative`}>
                <div className={`absolute inset-0 blur-2xl opacity-20 ${device.color}`} />
                <device.icon className={`w-10 h-10 relative z-10 ${device.name === 'Apple TV' ? 'text-black' : 'text-white'}`} />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">{device.name}</h3>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap">{device.desc}</p>
              
              {/* 3D Glass Effect Overlay */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
