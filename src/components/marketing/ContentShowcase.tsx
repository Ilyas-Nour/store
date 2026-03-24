"use client";

import { motion } from "framer-motion";

const allItems = [
  { title: "Premier League 2026", img: "/premier-league.jpg", type: "LIVE 4K" },
  { title: "Crime 101", img: "/crime-101.jpg", type: "VOD RAW" },
  { title: "F1 Monaco Grand Prix", img: "/f1-monaco.jpg", type: "LIVE 4K" },
  { title: "Hoppers", img: "/hoppers.jpg", type: "VOD RAW" },
  { title: "Vladimir vs Klichko", img: "/vladimir.avif", type: "LIVE 4K" },
  { title: "Mercy", img: "/mercy.jpg", type: "VOD RAW" },
  { title: "Scream 7", img: "/scream-7.jpg", type: "VOD RAW" },
  { title: "Pole to Pole", img: "/pole-to-pole.jpg", type: "VOD RAW" },
  { title: "The Wrecking Crew", img: "/the-wrecking-crew.jpg", type: "VOD RAW" },
  { title: "Peaky Blinders", img: "/peaky-blinders.jpg", type: "VOD RAW" },
  { title: "Wonder Man", img: "/wonder-man.jpg", type: "VOD RAW" },
  { title: "Pegasus 3", img: "/pegasus-3.jpg", type: "VOD RAW" },
];

export function ContentShowcase() {
  const duplicatedItems = [...allItems, ...allItems, ...allItems];

  return (
    <section className="py-40 bg-[#020617] overflow-hidden border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">
          PREMIUM GLOBAL CATALOG
        </h2>
        <h3 className="text-4xl md:text-[80px] font-bold text-white uppercase tracking-tighter leading-[0.9] max-w-4xl italic">
          Cinema & Sports <span className="text-slate-600">On-Demand.</span>
        </h3>
      </div>

      <div className="relative overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 px-6"
        >
          {duplicatedItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative flex-shrink-0 w-48 md:w-64 lg:w-80 aspect-[2/3] rounded-sm overflow-hidden cursor-pointer transition-all border border-white/[0.08]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-xl uppercase tracking-tighter mb-4">
                  {item.title}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] bg-white text-black font-bold px-3 py-1 rounded-sm uppercase tracking-[0.2em]">
                    {item.type}
                  </span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em]">ULTRA HD</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      <div className="mt-24 text-center">
          <p className="text-slate-600 font-bold uppercase tracking-[0.5em] text-[9px]">OVER 100,000+ TITLES | GLOBAL STREAMING INFRASTRUCTURE</p>
      </div>
    </section>
  );
}
