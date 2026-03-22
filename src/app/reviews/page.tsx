import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StarRating } from "@/components/ui/StarRating";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | IPTV Premium",
  description: "Read verified reviews from our 10,000+ happy customers.",
};

const reviews = [
  { name: "Michael T.", avatar: "", country: "United States", rating: 5, review: "I've tried 5 different IPTV providers, and this is the only one that didn't buffer during the Super Bowl. Highly recommended!", date: "2 days ago" },
  { name: "Sarah J.", avatar: "", country: "United Kingdom", rating: 5, review: "The VOD section is massive. It's like having Netflix, Hulu, and HBO all in one app. Setup was seamless.", date: "1 week ago" },
  { name: "David M.", avatar: "", country: "Canada", rating: 4, review: "Great customer service. I had an issue setting up my Mag box, but they walked me through it on WhatsApp in 10 minutes.", date: "2 weeks ago" },
  { name: "Emma W.", avatar: "", country: "Australia", rating: 5, review: "Perfect 4K quality for Premier League games. No lag. Worth every penny of that 1-year subscription.", date: "3 weeks ago" },
  { name: "Carlos R.", avatar: "", country: "Spain", rating: 5, review: "The Spanish channels section is flawless. Lots of global content as well.", date: "1 month ago" },
  { name: "Oliver P.", avatar: "", country: "Germany", rating: 5, review: "Incredible value for the price. I canceled all my other streaming services.", date: "1 month ago" },
  { name: "Jean D.", avatar: "", country: "France", rating: 4, review: "Setup was quick. Channel selection is really overwhelming, but the favorites feature on my app makes it manageable.", date: "2 months ago" },
  { name: "Lucas K.", avatar: "", country: "United States", rating: 5, review: "Zero buffering. I was skeptical of the 99.9% uptime claim, but it's actually legit.", date: "3 months ago" },
  { name: "Sophie L.", avatar: "", country: "United Kingdom", rating: 5, review: "Awesome! Kids have all their cartoons, my husband has the sports. Happy family.", date: "3 months ago" },
  { name: "Mark B.", avatar: "", country: "Canada", rating: 5, review: "Best IPTV service on the market right now. Don't hesitate.", date: "4 months ago" },
];

export default function ReviewsPage() {
  return (
    <div className="py-24 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-6 block">
                GLOBAL SOCIAL PROOF
            </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            LOVED BY <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 italic">THOUSANDS.</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-6 bg-white/[0.03] border border-white/[0.08] px-8 py-6 rounded-[2rem] backdrop-blur-xl">
              <span className="text-6xl font-black text-white tracking-tighter">4.9</span>
              <div className="flex flex-col items-start gap-1">
                <StarRating rating={5} />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Verified by 10,242 Global Users</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((rev, i) => (
            <AnimatedSection key={i} delay={(i % 5) * 0.1}>
              <TestimonialCard {...rev} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
