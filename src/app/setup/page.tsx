import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DownloadCloud, KeyRound, Play } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guide | IPTV Premium",
  description: "Learn how to easily set up your IPTV subscription on any device in 3 simple steps.",
};

const steps = [
  {
    icon: <DownloadCloud className="w-10 h-10 text-white" />,
    title: "1. Download Your App",
    description: "Download 'IPTV Smarters Pro', 'TiviMate', or your preferred IPTV player from your device's App Store. It is available on Smart TVs, Android, iOS, and Firestick.",
    color: "bg-brand-blue",
  },
  {
    icon: <KeyRound className="w-10 h-10 text-white" />,
    title: "2. Get Your Code",
    description: "Purchase a plan and message us on WhatsApp. We will instantly provide your Xtream Codes API login (Username, Password, and Portal URL) or an M3U link.",
    color: "bg-brand-gold",
  },
  {
    icon: <Play className="w-10 h-10 text-white" />,
    title: "3. Start Watching",
    description: "Enter the credentials we provided into your app. It will take a minute to load the channels and EPG. After that, sit back and enjoy!",
    color: "bg-brand-green",
  },
];

export default function SetupPage() {
  return (
    <div className="py-24 bg-dark-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick & Easy Setup
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            You don&apos;t need any technical skills to set up our service. Follow these three simple steps to start streaming in under 5 minutes.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-dark-border" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.2} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className={`relative z-10 flex-shrink-0 w-24 h-24 ${step.color} rounded-2xl flex items-center justify-center shadow-xl shadow-${step.color}/20 transform transition-transform hover:scale-110`}>
                   {step.icon}
                </div>
                
                <div className="bg-dark-card border border-dark-border rounded-2xl p-8 flex-1 h-full shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.8} className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center border-b border-dark-border pb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-2">Can I use one subscription on multiple devices?</h4>
              <p className="text-gray-400">Standard plans allow 1 connection at a time. You can install the app on multiple devices but only watch on one simultaneously. Contact support if you need multi-room connections.</p>
            </div>
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-2">Is a VPN required?</h4>
              <p className="text-gray-400">Our service works flawlessly without a VPN. However, if your ISP is throttling IPTV traffic (especially during big games), using a VPN might improve connection stability.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
