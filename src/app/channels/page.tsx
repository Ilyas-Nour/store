"use client";

import { useState } from "react";
import { Search, Trophy, Film, Baby, Globe, Music, Tv as TvIcon, Newspaper } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChannelCard } from "@/components/ui/ChannelCard";

const categories = [
  { name: "Live Sports", count: "1,200+", Icon: Trophy, colorClass: "bg-orange-500" },
  { name: "Cinema & VODs", count: "45,000+", Icon: Film, colorClass: "bg-brand-blue" },
  { name: "Kids & Cartoons", count: "800+", Icon: Baby, colorClass: "bg-pink-500" },
  { name: "International", count: "8,500+", Icon: Globe, colorClass: "bg-emerald-500" },
  { name: "Music", count: "500+", Icon: Music, colorClass: "bg-purple-500" },
  { name: "TV Series", count: "9,000+", Icon: TvIcon, colorClass: "bg-brand-gold" },
  { name: "News 24/7", count: "400+", Icon: Newspaper, colorClass: "bg-cyan-500" },
];

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-24 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore +15,000 <span className="text-brand-blue">Channels</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            From local news to international sports and blockbusters, we have it all categorized for you. Use the search to find your favorites.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-brand-blue transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search categories (e.g. Sports, Movies)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-card border border-dark-border text-white rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all shadow-lg"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={i * 0.05}>
              <ChannelCard {...cat} />
            </AnimatedSection>
          ))}
          {filteredCategories.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              No categories found matching &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
