"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu } from "lucide-react";

export function TechnicalBlock() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            d="M0,500 Q250,400 500,500 T1000,500"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            THE <span className="text-brand-green">ANTI-LAG</span> PROTOCOL
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Our proprietary delivery layer bypasses ISP throttling and ensures raw bitrates reach your screen without compression artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "H.265 (HEVC) ENGINE",
              desc: "50% less bandwidth, 100% better quality. Watch 4K sports with zero pixelation even on shared connections.",
              icon: Cpu,
              color: "text-brand-green"
            },
            {
              title: "PRIVATE EDGE PEERING",
              desc: "Direct peering with major ISPs across EU & US. We don't use public transit; we use dedicated fiber lanes.",
              icon: Zap,
              color: "text-brand-gold"
            },
            {
              title: "DYNAMIC IP ROTATION",
              desc: "Avoid blocking permanently. Our infra rotates head-end IPs automatically to maintain 100% availability.",
              icon: Shield,
              color: "text-blue-500"
            }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-brand-green/30 transition-all group"
            >
                <tech.icon className={`w-10 h-10 ${tech.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest">{tech.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
