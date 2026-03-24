"use client";

import { Check, X, ShieldCheck, Zap, Globe, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Streaming Infrastructure",
    us: "Anti-Freeze 6.0 | H.265 HEVC",
    them: "Standard Buffering / H.264",
    usCheck: true,
  },
  {
    feature: "Network Routing",
    us: "Private European Edge Nodes",
    them: "Public Reseller Gateways",
    usCheck: true,
  },
  {
    feature: "Content Integrity",
    us: "RAW 4K Ultra HD Reference",
    them: "Compressed 1080p Upscale",
    usCheck: true,
  },
  {
    feature: "SLA Guarantee",
    us: "99.99% Institutional Uptime",
    them: "Best Effort / No SLA",
    usCheck: true,
  },
  {
    feature: "Priority Access",
    us: "Direct Carrier Peering",
    them: "Congested Public ISPs",
    usCheck: true,
  },
];

export function ComparisonMatrix() {
  return (
    <section className="py-40 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">Competitive Architecture</h2>
          <h3 className="text-4xl md:text-[80px] font-bold text-white uppercase tracking-tighter leading-[0.9] italic">
            Technical <span className="text-slate-600">Superiority.</span>
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-white/[0.08] rounded-sm overflow-hidden bg-white/[0.01]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="p-10 text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">Logic Domain</th>
                  <th className="p-10 text-center">
                    <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Premium Node</span>
                  </th>
                  <th className="p-10 text-center">
                    <span className="text-slate-700 font-bold uppercase tracking-[0.3em] text-[10px]">Standard Providers</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="p-10">
                      <p className="text-white font-bold text-sm uppercase tracking-tight">{item.feature}</p>
                    </td>
                    <td className="p-10">
                      <div className="flex flex-col items-center gap-3">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        <span className="text-white font-bold text-[10px] uppercase tracking-wider text-center">
                          {item.us}
                        </span>
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="flex flex-col items-center gap-3">
                        <X className="w-5 h-5 text-slate-800" strokeWidth={3} />
                        <span className="text-slate-700 font-bold text-[10px] uppercase tracking-wider text-center">
                          {item.them}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
