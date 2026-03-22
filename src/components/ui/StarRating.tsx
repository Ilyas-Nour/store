import { Star } from "lucide-react";

export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-brand-gold text-brand-gold" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}
