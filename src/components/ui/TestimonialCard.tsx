import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  country: string;
  rating: number;
  review: string;
  date: string;
}

export function TestimonialCard({ name, avatar, country, rating, review, date }: TestimonialCardProps) {
  // Map country names to emojies for flags
  const flagMap: Record<string, string> = {
    "United Kingdom": "🇬🇧",
    "United States": "🇺🇸",
    "Canada": "🇨🇦",
    "France": "🇫🇷",
    "Germany": "🇩🇪",
    "Spain": "🇪🇸",
    "Australia": "🇦🇺",
    "Dubai": "🇦🇪"
  };

  const flag = flagMap[country] || "🌍";

  return (
    <div className="bg-[#0f172a]/50 backdrop-blur-2xl border border-white/[0.05] p-6 rounded-[2rem] break-inside-avoid mb-6 hover:border-brand-gold/20 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-brand-gold/30 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-gray-700">
              {name.charAt(0)}
            </div>
            {avatar && (
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover z-10 opacity-80"
                sizes="48px"
              />
            )}
          </div>
          <div>
            <h4 className="font-black text-white text-sm uppercase tracking-widest flex items-center gap-2">
              {name}
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
            </h4>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
              <span>{flag}</span>
              {country}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <StarRating rating={rating} />
          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{date}</span>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic font-medium">
        &quot;{review}&quot;
      </p>
      
      <div className="flex items-center gap-2 text-[9px] font-black text-brand-gold bg-brand-gold/10 w-fit px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-gold/20">
        <CheckCircle2 className="w-3 h-3" />
        Verified Global activation
      </div>
    </div>
  );
}
