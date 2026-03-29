"use client";

import Image from "next/image";



const channelsRow1 = [
  { name: "BBC One", url: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=128" },
  { name: "Sky Sports 1", url: "https://www.google.com/s2/favicons?domain=skysports.com&sz=128" },
  { name: "beIN Sports HD", url: "https://www.google.com/s2/favicons?domain=beinsports.com&sz=128" },
  { name: "DAZN 1", url: "https://www.google.com/s2/favicons?domain=dazn.com&sz=128" },
  { name: "HBO Max", url: "https://www.google.com/s2/favicons?domain=max.com&sz=128" },
  { name: "Netflix HD", url: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128" },
  { name: "Canal+ France", url: "https://www.google.com/s2/favicons?domain=canalplus.com&sz=128" },
  { name: "RAI 1", url: "https://www.google.com/s2/favicons?domain=rai.it&sz=128" },
  { name: "ZDF HD", url: "https://www.google.com/s2/favicons?domain=zdf.de&sz=128" },
  { name: "Movistar+", url: "https://www.google.com/s2/favicons?domain=movistar.es&sz=128" },
];

const channelsRow2 = [
  { name: "TF1 HD", url: "https://www.google.com/s2/favicons?domain=tf1.fr&sz=128" },
  { name: "Eurosport HD", url: "https://www.google.com/s2/favicons?domain=eurosport.com&sz=128" },
  { name: "BT Sport 1", url: "https://www.google.com/s2/favicons?domain=bt.com&sz=128" },
  { name: "Disney+ HD", url: "https://www.google.com/s2/favicons?domain=disneyplus.com&sz=128" },
  { name: "Globo HD", url: "https://www.google.com/s2/favicons?domain=globo.com&sz=128" },
  { name: "NBC HD", url: "https://www.google.com/s2/favicons?domain=nbc.com&sz=128" },
  { name: "ABC HD", url: "https://www.google.com/s2/favicons?domain=abc.com&sz=128" },
  { name: "FOX HD", url: "https://www.google.com/s2/favicons?domain=fox.com&sz=128" },
  { name: "CBS HD", url: "https://www.google.com/s2/favicons?domain=cbs.com&sz=128" },
  { name: "Prime Video", url: "https://www.google.com/s2/favicons?domain=primevideo.com&sz=128" },
];

const channelsRow3 = [
  { name: "AD Sports", url: "https://www.google.com/s2/favicons?domain=adsports.ae&sz=128" },
  { name: "Al Jazeera", url: "https://www.google.com/s2/favicons?domain=aljazeera.net&sz=128" },
  { name: "MBC 1", url: "https://www.google.com/s2/favicons?domain=mbc.net&sz=128" },
  { name: "OSN Movies", url: "https://www.google.com/s2/favicons?domain=osn.com&sz=128" },
  { name: "La 1 Spain", url: "https://www.google.com/s2/favicons?domain=rtve.es&sz=128" },
  { name: "Antena 3", url: "https://www.google.com/s2/favicons?domain=antena3.com&sz=128" },
  { name: "RT HD", url: "https://www.google.com/s2/favicons?domain=rt.com&sz=128" },
  { name: "BBC News", url: "https://www.google.com/s2/favicons?domain=bbc.com&sz=128" },
  { name: "CNN HD", url: "https://www.google.com/s2/favicons?domain=cnn.com&sz=128" },
  { name: "SKY NEWS", url: "https://www.google.com/s2/favicons?domain=sky.com&sz=128" },
];

export function ChannelMarquee() {
  return (
    <section className="py-24 bg-[#020617] overflow-hidden space-y-12">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center lg:text-left">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-4">
              SECURED CARRIER INFRASTRUCTURE
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
              15,000+ <span className="text-slate-700">Premium Nodes.</span>
          </h3>
      </div>

      {/* Row 1: Left to Right */}
      <div className="flex gap-12 whitespace-nowrap overflow-hidden py-4 border-y border-white/[0.03]">
        <div className="flex animate-marquee gap-12 items-center">
          {[...channelsRow1, ...channelsRow1, ...channelsRow1, ...channelsRow1].map((channel, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-20 h-20 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center p-4 transition-all group-hover:scale-110">
                <Image
                  src={channel.url}
                  alt={channel.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex gap-12 whitespace-nowrap overflow-hidden py-4">
        <div className="flex animate-marquee-reverse gap-12 items-center">
          {[...channelsRow2, ...channelsRow2, ...channelsRow2, ...channelsRow2].map((channel, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-20 h-20 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center p-4 transition-all group-hover:scale-110">
                <img
                  src={channel.url}
                  alt={channel.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Left to Right */}
      <div className="flex gap-12 whitespace-nowrap overflow-hidden py-4 border-y border-white/[0.03]">
        <div className="flex animate-marquee gap-12 items-center">
          {[...channelsRow3, ...channelsRow3, ...channelsRow3, ...channelsRow3].map((channel, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-20 h-20 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center p-4 transition-all group-hover:scale-110">
                <img
                  src={channel.url}
                  alt={channel.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
