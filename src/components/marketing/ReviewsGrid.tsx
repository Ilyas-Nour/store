"use client";

import { Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Marco Rossi",
    country: "Italy",
    avatar: "https://i.pravatar.cc/150?u=marco",
    text: "Finally a provider that delivers on their promise. The 4K streams during Champions League nights are flawless. True reference quality.",
    date: "Mar 2026",
    verified: true
  },
  {
    name: "Sarah Jenkins",
    country: "United Kingdom",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    text: "Switched from a standard provider and the difference is night and day. The channel list is expansive and the stability is unmatched.",
    date: "Feb 2026",
    verified: true
  },
  {
    name: "Lukas Müller",
    country: "Germany",
    avatar: "https://i.pravatar.cc/150?u=lukas",
    text: "The setup was instant. I'm using it on Apple TV and it feels like a native streaming app. Highly recommended for cinema fans.",
    date: "Jan 2026",
    verified: true
  },
  {
    name: "Jean-Pierre",
    country: "France",
    avatar: "https://i.pravatar.cc/150?u=jean",
    text: "Excellent service client. J'avais une question sur mon routeur et ils m'ont aidé en moins de 10 minutes sur WhatsApp. Très pro.",
    date: "Dec 2025",
    verified: true
  }
];

export function ReviewsGrid() {
  return (
    <section className="py-40 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">Verified Member Network</h2>
          <h3 className="text-4xl md:text-[80px] font-bold text-white uppercase tracking-tighter leading-[0.9] italic">
            Trusted by the <span className="text-slate-600">Community.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-sm border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all flex flex-col h-full group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                </div>
                {review.verified && (
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        <ShieldCheck className="w-2.5 h-2.5 text-white" />
                        <span className="text-[8px] font-bold text-white uppercase tracking-widest">Verified</span>
                    </div>
                )}
              </div>

              <p className="text-white text-lg font-medium leading-[1.4] mb-12 tracking-tight italic opacity-80 group-hover:opacity-100 transition-opacity">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-auto pt-8 border-t border-white/[0.05] flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                   <p className="text-white font-bold text-xs uppercase tracking-widest leading-none">{review.name}</p>
                   <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-2">{review.country}</p>
                </div>
                <span className="ml-auto text-slate-700 text-[8px] font-bold self-start">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
