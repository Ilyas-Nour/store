"use client";

import { motion } from "framer-motion";

export function Logo({ className = "w-8 h-8", showText = true }: { className?: string, showText?: boolean }) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none">
      {/* Precision Geometric Icon */}
      <div className={`${className} relative flex items-center justify-center`}>
        <motion.div 
          className="w-[3px] h-full bg-white rounded-full"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" 
        />
      </div>

      {showText && (
        <div className="flex flex-col -space-y-1.5 translate-y-[1px]">
          <div className="flex items-baseline">
            <span className="text-2xl font-black text-white uppercase tracking-[-0.08em] leading-none">
              MYONLY
            </span>
            <span className="text-2xl font-extralight text-white/40 uppercase tracking-[0.1em] ml-1 leading-none">
              IPTV
            </span>
          </div>
          <div className="flex items-center gap-3">
              <span className="text-[7px] font-bold text-slate-600 uppercase tracking-[0.5em] leading-none mt-2">
                Engineering Authority
              </span>
          </div>
        </div>
      )}
    </div>
  );
}
