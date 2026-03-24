import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/[0.05] pt-32 pb-48 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/">
              <Logo className="w-12 h-12" />
            </Link>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-medium">
              The #1 leading provider of institutional-grade IPTV subscriptions. Deploying 4K Ultra HD infrastructure with 99.99% SLA uptime, zero buffering, and dedicated European support.
            </p>
            <div className="flex items-center gap-3 text-white/40">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Security Verified</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.3em]">Network</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Subscriptions</Link></li>
              <li><Link href="/channels" className="hover:text-white transition-colors">Channel Index</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Verified Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.3em]">Governance</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><Link href="/setup" className="hover:text-white transition-colors">Setup Terminal</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SLA Agreement</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/[0.05] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 font-bold gap-6">
          <p className="uppercase tracking-widest">© {new Date().getFullYear()} MYONLYIPTV Infrastructure. All Rights Reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Extra Spacer for Mobile Overlay and Scroll Margin */}
        <div className="h-20 lg:hidden" />
      </div>
    </footer>
  );
}
