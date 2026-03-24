import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBubble } from "@/components/layout/WhatsAppBubble";
import { LiveNotification } from "@/components/ui/LiveNotification";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best IPTV Subscription 2026 | Premium IPTV Provider | Live TV & VOD",
  description: "Get the best IPTV subscription with 15,000+ 4K channels, 99.9% uptime, and zero buffering. The #1 premium IPTV provider for Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none z-[9999]" />
        <Header />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppBubble />
        <LiveNotification />
        <MobileBottomBar />
      </body>
    </html>
  );
}
