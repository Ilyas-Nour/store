"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { UserCheck as UserIcon } from "lucide-react";

const cities = ["Berlin", "London", "Paris", "Madrid", "Rome", "Dublin", "Stockholm", "Amsterdam", "Vienna", "Brussels"];
const plans = ["1-Year Premium Pass", "6-Month Elite Access", "24h Free Trial"];

export function LiveNotification() {
  const [notification, setNotification] = useState<{ city: string; plan: string } | null>(null);

  useEffect(() => {
    const showNotification = () => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      const plan = plans[Math.floor(Math.random() * plans.length)];
      setNotification({ city, plan });

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    const interval = setInterval(() => {
        showNotification();
    }, 30000);

    // Show first one after 5s
    const initial = setTimeout(showNotification, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-8 left-8 z-[100]"
        >
          <div className="bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[280px]">
            <div className="bg-brand-green/20 p-2 rounded-full">
              <UserIcon className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                Live Activation
              </p>
              <p className="text-sm text-white font-medium">
                Someone from <span className="text-brand-green font-bold">{notification.city}</span>
              </p>
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">
                started a <span className="text-white font-bold">{notification.plan}</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
