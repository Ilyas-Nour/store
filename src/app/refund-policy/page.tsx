"use client";

import { RefreshCcw, FileText } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6">
            GOVERNANCE & COMPLIANCE
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter italic">
            Refund <span className="text-slate-600">Policy.</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            At MYONLYIPTV, we are committed to providing carrier-grade infrastructure. Our refund policy is designed to ensure transparency and trust in our professional relationship.
          </p>
        </div>

        <div className="space-y-16">
          <section className="bg-white/[0.02] border border-white/[0.05] p-10 md:p-16 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <RefreshCcw className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">7-Day Guarantee</h2>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium mb-8">
                We offer a full 7-day money-back guarantee for all new subscriptions. If you experience technical issues that our engineering team cannot resolve within 48 hours, you are entitled to a full restoration of funds.
            </p>
            <ul className="space-y-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                Valid for first-time subscribers only
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                Technical failure verification required
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                Process initiated via secure support line
              </li>
            </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="p-10 border border-white/[0.05]">
              <h3 className="text-white font-bold uppercase tracking-widest mb-4">Refund Conditions</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Refunds are processed if the service is down for more than 24 consecutive hours or if major channels (verified by SLA) are unavailable for extended periods.
              </p>
            </div>
            <div className="p-10 border border-white/[0.05]">
              <h3 className="text-white font-bold uppercase tracking-widest mb-4">Exclusions</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Refunds will not be issued for local ISP issues, device compatibility failures not reported within the trial, or violation of our fair-use infrastructure terms.
              </p>
            </div>
          </div>

          <section className="text-center py-20 border-y border-white/[0.05]">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
                Official Document ID: MOI-REF-2026-001
            </p>
            <button className="inline-flex items-center gap-4 text-white hover:text-slate-300 transition-colors uppercase tracking-[0.3em] font-bold text-xs">
                <FileText className="w-4 h-4" />
                Download PDF Version
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
