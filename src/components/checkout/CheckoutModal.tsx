"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CreditCard, 
  Bitcoin, 
  ShieldCheck, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Copy,
  ExternalLink,
  MessageCircle
} from "lucide-react";

type PaymentMethod = "card" | "crypto";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: { name: string; price: number } | null;
  device: string;
}

export function CheckoutModal({ isOpen, onClose, plan, device }: CheckoutModalProps) {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);

  if (!plan) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
        setIsProcessing(false);
        setStep(2); // Show success or next step
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0f172a]/90 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Secure Activation</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                  {plan.name} — {device}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <>
                  {/* Payment Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                      onClick={() => setMethod("card")}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                        method === "card" 
                        ? "bg-white/[0.05] border-brand-green text-white shadow-[0_0_20px_rgba(34,197,94,0.1)]" 
                        : "bg-white/5 border-white/5 text-gray-500 hover:border-white/20"
                      }`}
                    >
                      <CreditCard className={`w-8 h-8 ${method === "card" ? "text-brand-green" : ""}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Credit Card</span>
                    </button>
                    <button
                      onClick={() => setMethod("crypto")}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                        method === "crypto" 
                        ? "bg-white/[0.05] border-brand-gold text-white shadow-[0_0_20px_rgba(251,191,36,0.1)]" 
                        : "bg-white/5 border-white/5 text-gray-500 hover:border-white/20"
                      }`}
                    >
                      <Bitcoin className={`w-8 h-8 ${method === "crypto" ? "text-brand-gold" : ""}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Crypto Pay</span>
                    </button>
                  </div>

                  {/* Form Area */}
                  <div className="space-y-6">
                    {method === "card" ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Cardholder Name</label>
                          <input type="text" placeholder="NAME AS IT APPEARS ON CARD" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-green uppercase" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2 col-span-2 md:col-span-1">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Card Number</label>
                            <div className="relative">
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-green" />
                                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Expiry</label>
                            <input type="text" placeholder="MM/YY" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-green" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">CVC</label>
                            <input type="password" placeholder="***" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-green" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 bg-white rounded-xl p-2">
                                <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example_btc_address')] bg-cover" />
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3">Send exactly €{plan.price} in BTC / USDT</p>
                        <div className="flex items-center gap-2 bg-black/60 rounded-xl px-4 py-3 border border-white/5 mb-4 group cursor-pointer hover:border-brand-gold/50 transition-all">
                            <span className="text-[10px] text-gray-400 font-mono truncate">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</span>
                            <Copy className="w-4 h-4 text-brand-gold ml-auto" />
                        </div>
                        <button className="text-[10px] font-black text-brand-gold uppercase tracking-widest hover:underline flex items-center justify-center gap-2 w-full">
                            <ExternalLink className="w-3 h-3" />
                            Verify Payment on Blockchain
                        </button>
                      </div>
                    )}

                    <button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all ${
                        method === "card" 
                        ? "bg-brand-green text-black shadow-[0_0_30px_rgba(34,197,94,0.3)]" 
                        : "bg-brand-gold text-black shadow-[0_0_30px_rgba(251,191,36,0.3)]"
                      } ${isProcessing ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01]"}`}
                    >
                      {isProcessing ? (
                        <Zap className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Complete Activation — €{plan.price}
                        </>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-brand-green" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Payment Initiated</h3>
                    <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed font-medium">
                        Your payment is being verified by our secure nodes. You will receive your activation details via email within 2-5 minutes.
                    </p>
                    <button 
                        onClick={onClose}
                        className="bg-white/5 hover:bg-white/10 text-white font-black px-10 py-4 rounded-xl text-[10px] uppercase tracking-[0.3em] transition-all"
                    >
                        Back to Dashboard
                    </button>
                </div>
              )}
            </div>

            {/* Security Bar */}
            <div className="p-6 bg-black/40 border-t border-white/5 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 opacity-50">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <Lock className="w-4 h-4 text-brand-green" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">AES-256 Security</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">Fraud Protected</span>
              </div>
            </div>

            {/* WhatsApp Fallback */}
            <div className="p-4 text-center">
                <button className="text-[9px] font-bold text-gray-600 hover:text-brand-green transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-2 w-full">
                    <MessageCircle className="w-3 h-3" />
                    Having trouble paying? Chat with Engineering Support
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
