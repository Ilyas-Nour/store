import Link from "next/link";
import { PlayCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <PlayCircle className="w-8 h-8 text-brand-green" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                IPTV Premium
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              The #1 leading provider of high-quality premium IPTV subscriptions. Enjoy 4K UHD streaming with 99.9% uptime, no buffering, and dedicated 24/7 customer support.
            </p>
            <div className="flex items-center gap-2 text-brand-green">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-300">100% Verified Secure Platform</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-green transition-colors">Pricing</Link></li>
              <li><Link href="/channels" className="hover:text-brand-green transition-colors">Channels</Link></li>
              <li><Link href="/reviews" className="hover:text-brand-green transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/setup" className="hover:text-brand-green transition-colors">Setup Guide</Link></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} IPTV Premium. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <span>By proceeding, you agree to our policies.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
