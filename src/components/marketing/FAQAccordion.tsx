"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What if the service gets blocked in my country?",
    a: "Our infrastructure uses dynamic IP rotation. If a specific gateway is flagged, our system automatically reroutes your traffic through a fresh, unblocked edge server in under 30 seconds. You won't even notice a flicker."
  },
  {
    q: "Do I need a VPN to use your service?",
    a: "No. We provide a built-in 'Private Peer' layer that encrypts your stream metadata. Your ISP will only see generic HTTPS traffic, making a separate VPN unnecessary and often slower."
  },
  {
    q: "Is the 4K quality truly raw or compressed?",
    a: "We offer Raw Bitrate streams for major sports and movie channels. Unlike resellers who 're-encode' to save bandwidth, we deliver the direct satellite feed using H.265 HEVC containers."
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "Our standard plans allow 1 active connection. However, the Elite 1-Year plan can be upgraded to 3 simultaneous connections via our support portal after activation."
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
    <section className="py-24 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            HAVE <span className="text-brand-gold">QUESTIONS?</span>
          </h2>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text"
              placeholder="Search objections or technical queries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden transition-all hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-gray-200 tracking-tight">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-brand-gold" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-white/[0.03] pt-4 flex gap-4">
                      <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-bold uppercase tracking-widest">No matching results found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
