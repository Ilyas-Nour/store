"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function WhatsAppBubble() {
  const [isHovered, setIsHovered] = useState(false);
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="absolute bottom-[72px] right-0 bg-[#1e293b] border border-white/[0.1] p-4 rounded-2xl shadow-2xl min-w-[200px] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Online Now</span>
          </div>
          <p className="text-[11px] text-gray-400 font-medium"> Typically replies in <span className="text-brand-green font-bold">2 mins</span></p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#1e293b] border-b border-r border-white/[0.1] transform rotate-45" />
        </motion.div>
      )}

      <a
        href={`https://wa.me/${number}?text=Hello! I have a question about the IPTV service.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-brand-green text-black p-4 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all flex items-center justify-center transform hover:scale-110 border border-white/[0.1]"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute w-full h-full rounded-2xl animate-ping bg-brand-green opacity-20"></span>
      </a>
    </div>
  );
}
