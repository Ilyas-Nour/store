"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    q: "How stable is the European server network?",
    a: "We operate on a private Tier-1 backbone with multiple redundant entry points across Frankfurt, London, and Amsterdam. This architecture guarantees 99.99% uptime even during peak global events."
  },
  {
    q: "Do I need a VPN to use your infrastructure?",
    a: "No. Our streams are delivered via a secure, encrypted peer-to-peer layer. Your ISP will only see standard HTTPS traffic, eliminating the need for external VPNs which often throttle speeds."
  },
  {
    q: "Is the 4K quality truly uncompressed?",
    a: "Yes. Unlike resellers who transcode feeds to save bandwidth, we deliver the RAW satellite signal using H.265 HEVC containers, maintaining full bitrate and color depth."
  },
  {
    q: "How many devices are supported?",
    a: "Standard plans support 1 active connection. Premium and Enterprise tiers support up to 3 simultaneous sessions with dedicated bandwidth allocation."
  }
];

export function FAQAccordion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-40 bg-[#020617] border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">
            TECHNICAL SUPPORT DESK
          </h2>
          <h3 className="text-4xl md:text-7xl font-bold text-white mb-12 uppercase tracking-tighter italic leading-none">
            Institutional <span className="text-slate-600">Knowledge.</span>
          </h3>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700" />
            <input 
              type="text"
              placeholder="Search technical documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/10 rounded-sm py-6 pl-14 pr-6 text-white placeholder:text-slate-800 focus:outline-none focus:border-white/20 transition-all font-bold text-[10px] uppercase tracking-widest"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-white/[0.01] border border-white/[0.04] rounded-sm overflow-hidden transition-all hover:bg-white/[0.03] group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-10 text-left"
              >
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-700 transition-transform duration-700 ${openIndex === i ? "rotate-180 text-white" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-10 pb-10 text-slate-500 font-medium leading-relaxed border-t border-white/[0.03] pt-8">
                      <p className="max-w-2xl">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
