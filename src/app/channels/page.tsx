"use client";

import { useState, useMemo } from "react";
import { Search, MessageSquare, ChevronRight, Globe, Trophy, Film, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  { id: "all", name: "All Channels", icon: Globe },
  { id: "sports", name: "Sports VIP", icon: Trophy },
  { id: "cinema", name: "Movies & Cinema", icon: Film },
  { id: "uk", name: "UK / Ireland", icon: Tv },
  { id: "us", name: "USA / Canada", icon: Tv },
  { id: "france", name: "France", icon: Tv },
  { id: "germany", name: "Germany", icon: Tv },
  { id: "spain", name: "Spain", icon: Tv },
  { id: "ar", name: "Arabic", icon: Tv },
];

const channelsData = [
  // Sports
  { name: "Sky Sports Main Event", category: "sports", domain: "skysports.com" },
  { name: "beIN Sports 1 Premium", category: "sports", domain: "beinsports.com" },
  { name: "DAZN 1 DE", category: "sports", domain: "dazn.com" },
  { name: "BT Sport 1", category: "sports", domain: "bt.com" },
  { name: "Eurosport 1 HD", category: "sports", domain: "eurosport.com" },
  { name: "ESPN Plus", category: "sports", domain: "espn.com" },
  { name: "NBA TV", category: "sports", domain: "nba.com" },
  { name: "NFL Network", category: "sports", domain: "nfl.com" },
  { name: "UFC Fight Pass", category: "sports", domain: "ufc.com" },
  { name: "Formula 1 TV", category: "sports", domain: "f1.com" },
  { name: "RMC Sport 1", category: "sports", domain: "rmcsport.tv" },
  { name: "LaLiga TV", category: "sports", domain: "laliga.com" },
  { name: "Bundesliga TV", category: "sports", domain: "bundesliga.com" },

  // Cinema
  { name: "HBO Max Premiere", category: "cinema", domain: "max.com" },
  { name: "Sky Cinema Premiere", category: "cinema", domain: "sky.com" },
  { name: "Netflix Originals", category: "cinema", domain: "netflix.com" },
  { name: "Disney Plus HD", category: "cinema", domain: "disneyplus.com" },
  { name: "Amazon Prime HD", category: "cinema", domain: "primevideo.com" },
  { name: "Paramount Plus", category: "cinema", domain: "paramountplus.com" },
  { name: "Apple TV Plus", category: "cinema", domain: "apple.com" },
  { name: "Hulu Originals", category: "cinema", domain: "hulu.com" },
  { name: "Canal+ Cinema", category: "cinema", domain: "canalplus.com" },
  { name: "Movistar Estrenos", category: "cinema", domain: "movistar.es" },

  // UK
  { name: "BBC One HD", category: "uk", domain: "bbc.co.uk" },
  { name: "BBC Two HD", category: "uk", domain: "bbc.co.uk" },
  { name: "ITV1 HD", category: "uk", domain: "itv.com" },
  { name: "Channel 4 HD", category: "uk", domain: "channel4.com" },
  { name: "Channel 5 HD", category: "uk", domain: "channel5.com" },
  { name: "Sky One", category: "uk", domain: "sky.com" },
  { name: "Sky Atlantic", category: "uk", domain: "sky.com" },

  // US
  { name: "ABC News", category: "us", domain: "abc.com" },
  { name: "CBS HD", category: "us", domain: "cbs.com" },
  { name: "NBC HD", category: "us", domain: "nbc.com" },
  { name: "FOX HD", category: "us", domain: "fox.com" },
  { name: "CNN International", category: "us", domain: "cnn.com" },
  { name: "MSNBC", category: "us", domain: "msnbc.com" },

  // France
  { name: "TF1 HD", category: "france", domain: "tf1.fr" },
  { name: "France 2 HD", category: "france", domain: "france.tv" },
  { name: "France 3 HD", category: "france", domain: "france.tv" },
  { name: "Canal+ HD", category: "france", domain: "canalplus.com" },
  { name: "M6 HD", category: "france", domain: "m6.fr" },
  { name: "Arte HD", category: "france", domain: "arte.tv" },

  // Germany
  { name: "Das Erste HD", category: "germany", domain: "daserste.de" },
  { name: "ZDF HD", category: "germany", domain: "zdf.de" },
  { name: "RTL HD", category: "germany", domain: "rtl.de" },
  { name: "Sat.1", category: "germany", domain: "sat1.de" },
  { name: "ProSieben", category: "germany", domain: "prosieben.de" },

  // Spain
  { name: "La 1 HD", category: "spain", domain: "rtve.es" },
  { name: "Antena 3 HD", category: "spain", domain: "antena3.com" },
  { name: "Telecinco HD", category: "spain", domain: "telecinco.es" },
  { name: "Cuatro HD", category: "spain", domain: "cuatro.com" },
  { name: "laSexta HD", category: "spain", domain: "lasexta.com" },

  // Arabic
  { name: "MBC 1 HD", category: "ar", domain: "mbc.net" },
  { name: "Al Jazeera HD", category: "ar", domain: "aljazeera.net" },
  { name: "OSN Movies First", category: "ar", domain: "osn.com" },
  { name: "AD Sports 1", category: "ar", domain: "adsports.ae" },
];

export default function ChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChannels = useMemo(() => {
    return channelsData.filter(channel => {
      const matchesCategory = activeCategory === "all" || channel.category === activeCategory;
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-4">
            AUTHORIZED PREMIUM INFRASTRUCTURE
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter italic">
            Official <span className="text-slate-600">Channel Index.</span>
          </h1>
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input
              type="text"
              placeholder="Search 15,000+ Secured Nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full py-5 pl-12 pr-6 text-white placeholder-slate-700 focus:outline-none focus:border-white/20 transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-40 space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-4 px-8 py-5 rounded-sm transition-all border ${
                      isActive 
                      ? "bg-white border-white text-black font-bold shadow-xl scale-[1.02]" 
                      : "bg-transparent border-white/5 text-slate-500 hover:border-white/20 hover:text-white font-bold"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-[0.2em]">{cat.name}</span>
                    {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            <AnimatePresence mode="popLayout">
              {filteredChannels.length > 0 ? (
                <motion.div 
                   layout
                   className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {filteredChannels.map((channel) => (
                    <motion.div
                      key={channel.name}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
                      className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-sm flex flex-col items-center justify-center text-center group cursor-pointer transition-all"
                    >
                      <div className="relative w-16 h-16 mb-6 flex items-center justify-center bg-white/[0.03] rounded-sm border border-white/[0.05]">
                        <Image
                          src={`https://www.google.com/s2/favicons?domain=${channel.domain}&sz=128`}
                          alt={channel.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain transition-all duration-500"
                        />
                      </div>
                      <p className="text-[10px] font-bold text-slate-500 group-hover:text-white uppercase tracking-widest transition-colors leading-tight">
                        {channel.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No matching nodes found.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-32 border-t border-white/[0.05] pt-32 text-center">
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-6">
                GLOBAL SUPPORT BACKBONE
            </h2>
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-16 uppercase tracking-tighter italic">
                Engineering <span className="text-slate-700">Response.</span>
            </h3>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I%20need%20technical%20assistance%20with%20the%20channel%20index.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-white text-black font-bold px-16 py-7 rounded-sm uppercase tracking-[0.3em] text-[10px] hover:bg-slate-200 transition-all hover:-translate-y-1 shadow-2xl"
            >
              <MessageSquare className="w-5 h-5" />
              Open Secure Line
            </a>
        </div>
      </div>
    </main>
  );
}
