"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        name: "Trial Access",
        duration: "1 Month",
        price: "10.00",
        features: ["15,000+ Channels", "4K Ultra HD Quality", "1 Active Connection", "Anti-Freeze 6.0", "Instant Setup"],
        recommended: false,
    },
    {
        name: "Standard Pass",
        duration: "3 Months",
        price: "25.00",
        features: ["15,000+ Channels", "4K Ultra HD Quality", "1 Active Connection", "Anti-Freeze 6.0", "Priority Support"],
        recommended: false,
    },
    {
        name: "Semi-Annual",
        duration: "6 Months",
        price: "35.00",
        features: ["15,000+ Channels", "4K Ultra HD Quality", "2 Active Connections", "Dedicated Support", "SLA Guarantee"],
        recommended: false,
    },
    {
        name: "Elite Network",
        duration: "1 Year",
        price: "49.99",
        features: ["15,000+ Channels", "4K Ultra HD Quality", "3 Simultaneous Connections", "Carrier-Grade Node", "Save 60% Yearly"],
        recommended: true,
        tag: "Best Value",
    }
];

interface PricingSectionProps {
    onSelectPlan?: (plan: any, device: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing-plans" className="py-32 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.6em] mb-6">
                OFFICIAL SUBSCRIPTION TIERS
            </h2>
            <h3 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-8 italic">
                Transparent <span className="text-slate-600">Institutional</span> Pricing.
            </h3>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Instant activation, uncompressed 4K Ultra HD quality, and the most stable European backbone. Select your commitment below.
            </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative p-8 md:p-10 py-16 rounded-sm border ${plan.recommended ? 'border-white bg-white/5 shadow-2xl scale-[1.02]' : 'border-white/10 bg-transparent'} transition-all flex flex-col items-center text-center`}
                >
                    {plan.tag && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full">
                            {plan.tag}
                        </span>
                    )}

                    <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">{plan.name}</h4>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex items-start">
                            <span className="text-xl font-bold text-white mt-1">€</span>
                            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">{plan.price}</span>
                        </div>
                        <span className="text-slate-600 font-bold uppercase tracking-widest text-[9px] mt-3 underline decoration-white/20 underline-offset-4">{plan.duration} ACCESS</span>
                    </div>

                    <ul className="space-y-4 mb-12 w-full">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-3 text-slate-400 text-[11px] font-bold uppercase tracking-tight">
                                <Check className="w-3.5 h-3.5 text-white opacity-40" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/pricing"
                        className={`w-full py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] transition-all ${plan.recommended ? 'bg-white text-black hover:bg-slate-200' : 'bg-transparent border border-white/20 text-white hover:bg-white/5'}`}
                    >
                        Activate Access
                    </Link>
                </motion.div>
            ))}
        </div>
    </section>
  );
}
