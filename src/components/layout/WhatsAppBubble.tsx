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
          className="absolute bottom-[72px] right-0 bg-dark-card border border-dark-border text-xs text-gray-300 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap mb-2"
        >
          Typically replies in 5 mins
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-dark-card border-b border-r border-dark-border transform rotate-45" />
        </motion.div>
      )}

      <a
        href={`https://wa.me/${number}?text=Hello! I have a question about the IPTV service.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center transform hover:scale-110"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute w-full h-full rounded-full animate-ping bg-[#25D366] opacity-30"></span>
      </a>
    </div>
  );
}
