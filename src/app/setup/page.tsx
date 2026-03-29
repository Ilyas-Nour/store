"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tv, 
  Monitor, 
  Smartphone, 
  Zap, 
  Airplay, 
  CheckCircle2, 
  MessageSquare,
  Download,
  Settings,
  PlayCircle,
  LucideIcon
} from "lucide-react";

const devices = [
  { id: "firestick", name: "Firestick", icon: Zap },
  { id: "samsung", name: "Samsung TV", icon: Tv },
  { id: "lg", name: "LG TV", icon: Tv },
  { id: "appletv", name: "Apple TV", icon: Airplay },
  { id: "androidbox", name: "Android Box", icon: Monitor },
  { id: "mobile", name: "iOS / Android", icon: Smartphone },
];

const setupSteps: Record<string, { title: string; desc: string; icon: LucideIcon }[]> = {
  firestick: [
    { title: "Download Downloader", desc: "Search for 'Downloader' in the App Store and install it.", icon: Download },
    { title: "Install Player", desc: "Open Downloader and enter the code we provide to install the IPTV player.", icon: Settings },
    { title: "Login & Stream", desc: "Enter your Xtream Codes credentials and enjoy 15,000+ channels.", icon: PlayCircle },
  ],
  samsung: [
    { title: "Open App Store", desc: "Search for 'IPTV Smarters' or 'Nanomid' in your Samsung Apps.", icon: Download },
    { title: "Enter Playlist", desc: "Open the app and enter the M3U link or Xtream credentials we sent.", icon: Settings },
    { title: "Sync & Watch", desc: "Wait for the channel list to sync and start watching in 4K.", icon: PlayCircle },
  ],
  lg: [
    { title: "LG Content Store", desc: "Find 'IPTV Smarters' or 'Smart IPTV' in the LG Content Store.", icon: Download },
    { title: "Upload Info", desc: "Enter your credentials or MAC address on the app's website as instructed.", icon: Settings },
    { title: "Enjoy 4K", desc: "Your channels are now loaded. Experience premium 4K streaming.", icon: PlayCircle },
  ],
  appletv: [
    { title: "Get GSE IPTV", desc: "Download 'GSE Smart IPTV' or 'iPlayTV' from the App Store.", icon: Download },
    { title: "Add XTREAM API", desc: "Select 'Xtream Codes API' and enter your login details.", icon: Settings },
    { title: "Full Quality", desc: "Experience reference-grade streaming quality on your Apple TV.", icon: PlayCircle },
  ],
  androidbox: [
    { title: "Play Store", desc: "Search for 'TiviMate' or 'OTT Navigator' in the Google Play Store.", icon: Download },
    { title: "Configure Portal", desc: "Add a new playlist using the Portal URL and credentials.", icon: Settings },
    { title: "Live Sports", desc: "All premium global sports events are now at your fingertips.", icon: PlayCircle },
  ],
  mobile: [
    { title: "Mobile App", desc: "Download our recommended app from the App Store or Play Store.", icon: Download },
    { title: "Input Credentials", desc: "Login with the details provided in your order email.", icon: Settings },
    { title: "Stream Anywhere", desc: "Watch your favorite channels on the go with zero buffering.", icon: PlayCircle },
  ],
};

export default function SetupPage() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.6em] mb-6">
             INSTANT NETWORK ACTIVATION
          </h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[80px] font-bold text-white mb-8 uppercase tracking-tighter leading-none italic"
          >
            Universal <span className="text-slate-600">Setup Guide.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Select your hardware below for a professional step-by-step installation guide. Deployment takes less than 5 minutes.
          </p>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {devices.map((device) => {
            const Icon = device.icon;
            const isSelected = selectedDevice.id === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device)}
                className={`flex flex-col items-center justify-center p-8 rounded-sm border transition-all duration-500 ${
                  isSelected 
                  ? "bg-white border-white text-black scale-105 shadow-2xl" 
                  : "bg-white/[0.02] border-white/[0.05] text-slate-600 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 ${isSelected ? "text-black" : "text-white/20"}`} />
                <span className="text-[9px] font-bold uppercase tracking-widest">{device.name}</span>
              </button>
            );
          })}
        </div>

        {/* Setup Workflow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDevice.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white/[0.01] border border-white/[0.08] rounded-sm p-10 md:p-20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-white/[0.05] rounded-sm flex items-center justify-center border border-white/[0.1]">
                  <selectedDevice.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                   <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-none">
                       {selectedDevice.name}
                   </h2>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 px-1">Institutional Deployment</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {setupSteps[selectedDevice.id].map((step, index) => {
                    const StepIcon = step.icon;
                    return (
                        <div key={index} className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-xs font-bold border border-white/20">
                                    {index + 1}
                                </div>
                                <div className="h-px flex-grow bg-white/5" />
                            </div>
                            <div>
                                <StepIcon className="w-12 h-12 text-white mb-6 opacity-40" strokeWidth={1} />
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        </div>
                    );
                })}
              </div>

              {/* Verified Badge */}
              <div className="mt-20 pt-16 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex items-center gap-6">
                    <CheckCircle2 className="w-8 h-8 text-white/20" />
                    <div>
                        <p className="text-white font-bold text-base uppercase tracking-tight">Verified Technical Protocol</p>
                        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold mt-1">SOP VERSION 2026.04</p>
                    </div>
                </div>
                
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I%20am%20stuck%20setting%20up%20my%20${selectedDevice.name}.%20Can%20you%20help?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-white hover:bg-slate-200 text-black font-bold px-12 py-6 rounded-full flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[10px] transition-all hover:-translate-y-1 shadow-2xl"
                >
                  <MessageSquare className="w-5 h-5" />
                  Request Assistance
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
