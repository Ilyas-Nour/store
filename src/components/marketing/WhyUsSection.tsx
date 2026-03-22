import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MonitorPlay, Zap, ShieldCheck, Headphones } from "lucide-react";

export function WhyUsSection() {
  const features = [
    {
      icon: <MonitorPlay className="w-8 h-8 text-brand-gold" />,
      title: "4K Ultra HD Quality",
      description: "Experience crystal clear sports, movies, and TV shows in stunning 4K and FHD resolutions.",
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-blue" />,
      title: "Zero Buffering (Anti-Freeze)",
      description: "Our dedicated European servers ensure a smooth, uninterrupted viewing experience all day.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
      title: "99.9% Uptime Guarantee",
      description: "We constantly monitor our infrastructure to make sure your favorite channels are always online.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "24/7 Premium Support",
      description: "Got an issue? Our technical team is available round-the-clock via WhatsApp to assist you.",
    },
  ];

  return (
    <section className="py-24 bg-dark-bg border-y border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose Our <span className="text-brand-blue">Premium Network?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just sell subscriptions; we provide a high-end streaming ecosystem built for speed and reliability.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-dark-card border border-dark-border rounded-2xl p-8 h-full hover:border-brand-blue/30 transition-all hover:-translate-y-2 group">
                <div className="bg-dark-bg p-4 rounded-full w-fit mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
