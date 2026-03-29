import Image from "next/image";

const logos = [
  { name: "Sky Sports", url: "https://www.google.com/s2/favicons?domain=skysports.com&sz=128" },
  { name: "beIN Sports", url: "https://www.google.com/s2/favicons?domain=beinsports.com&sz=128" },
  { name: "DAZN", url: "https://www.google.com/s2/favicons?domain=dazn.com&sz=128" },
  { name: "HBO Max", url: "https://www.google.com/s2/favicons?domain=max.com&sz=128" },
  { name: "Netflix", url: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128" },
  { name: "Disney+", url: "https://www.google.com/s2/favicons?domain=disneyplus.com&sz=128" },
  { name: "Prime Video", url: "https://www.google.com/s2/favicons?domain=primevideo.com&sz=128" },
  { name: "Canal+", url: "https://www.google.com/s2/favicons?domain=canalplus.com&sz=128" },
  { name: "Eurosport", url: "https://www.google.com/s2/favicons?domain=eurosport.com&sz=128" },
  { name: "Movistar+", url: "https://www.google.com/s2/favicons?domain=movistar.es&sz=128" },
];

export function LogoMarquee() {
  return (
    <div className="py-24 bg-[#020617] border-y border-white/[0.03] overflow-hidden whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.8em] text-center">GLOBAL STREAMING CARRIERS</h2>
        </div>
      <div className="flex animate-marquee gap-16 items-center">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="w-24 h-24 bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center p-4 transition-all group-hover:bg-white/[0.08] group-hover:scale-110">
              <Image
                src={logo.url}
                alt={logo.name}
                width={56}
                height={56}
                className="w-14 h-14 object-contain transition-all duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
