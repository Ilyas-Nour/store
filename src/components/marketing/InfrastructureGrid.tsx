"use client";

import { Cpu, Globe, Zap, BarChart3, ShieldCheck, Database } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "HEVC H.265 INFRASTRUCTURE",
    description: "Multi-layered compression technology providing uncompressed 4K resolution at 50% lower bitrates. Optimized for zero-latency fiber backbones."
  },
  {
    icon: Database,
    title: "EU EDGE NODE DELIVERY",
    description: "Tier-1 data centers in Frankfurt and Paris with direct peering to major European ISPs. Guaranteed <10ms internal latency for verified stability."
  },
  {
    icon: Zap,
    title: "ANTI-FREEZE 5.0 PROTOCOL",
    description: "Proprietary packet-loss concealment specifically engineered for high-motion sports broadcasts. No buffering during peak global viewership events."
  }
];

export function InfrastructureGrid() {
  return (
    <section className="py-40 bg-[#020617] border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">Network Architecture</h2>
            <h3 className="text-4xl md:text-[80px] font-bold text-white uppercase tracking-tighter leading-[0.9] italic">
                Engineering <span className="text-slate-600">Transparency.</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.08] p-12 rounded-sm hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700" />
              
              <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em]">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
