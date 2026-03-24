"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Channels", href: "/channels" },
  { name: "Reviews", href: "/reviews" },
  { name: "Setup Guide", href: "/setup" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? "py-4" : "py-10"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-700 rounded-full px-12 py-5 ${
            isScrolled 
            ? "bg-black/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "bg-transparent"
          }`}
        >
          {/* Brand Identity */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Institutional Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:text-white ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline" 
                      className="absolute -bottom-2 left-0 right-0 h-px bg-white/40"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Access Control */}
          <div className="hidden lg:flex items-center gap-10 flex-shrink-0">
            <Link
              href="/pricing"
              className="text-[10px] font-bold text-white uppercase tracking-[0.4em] border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-white transition-all"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Elite Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[200] bg-black/95 flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-24">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Logo />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 bg-white/10 border border-white/10 rounded-full text-white hover:bg-white/20 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-10 mb-20">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center gap-6 text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter transition-all hover:text-slate-500"
                >
                  <span className="text-[10px] font-black text-slate-800 group-hover:text-white transition-colors">{i+1}.</span>
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-auto w-full py-10 bg-white text-black font-bold text-center rounded-3xl text-sm uppercase tracking-[0.5em] hover:bg-slate-200 transition-all shadow-3xl"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
