"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Users, Tv, Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="py-20 bg-dark-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-dark-border">
          <AnimatedSection delay={0.1} className="flex flex-col items-center pt-8 md:pt-0">
            <Users className="w-10 h-10 text-brand-blue mb-4" />
            <Counter end={10000} suffix="+" />
            <span className="text-gray-400 font-medium uppercase tracking-widest mt-2 text-sm">Active Customers</span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex flex-col items-center pt-8 md:pt-0">
            <Tv className="w-10 h-10 text-brand-gold mb-4" />
            <Counter end={15000} suffix="+" />
            <span className="text-gray-400 font-medium uppercase tracking-widest mt-2 text-sm">Live Channels</span>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="flex flex-col items-center pt-8 md:pt-0">
            <Globe2 className="w-10 h-10 text-brand-green mb-4" />
            <Counter end={99} suffix=".9%" />
            <span className="text-gray-400 font-medium uppercase tracking-widest mt-2 text-sm">Server Uptime</span>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
