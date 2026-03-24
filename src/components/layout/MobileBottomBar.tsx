"use client";

import Link from "next/link";
import { CreditCard, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function MobileBottomBar() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-4 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-xl border-t border-white/[0.05]"
    >
      <div className="flex gap-4 max-w-md mx-auto">
        <Link
          href="/pricing"
          className="flex-1 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] transition-all"
        >
          <CreditCard className="w-4 h-4" />
          View Pricing
        </Link>
        <a
          href={`https://wa.me/${number}?text=Hello! I want to start my free trial.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-brand-green text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <MessageCircle className="w-4 h-4" />
          Live Chat
        </a>
      </div>
    </motion.div>
  );
}
