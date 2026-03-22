"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const movies = [
  { title: "House of the Dragon", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc4a0?q=80&w=400&h=600&fit=crop" },
  { title: "The Last of Us", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=600&fit=crop" },
  { title: "Succession", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=600&fit=crop" },
  { title: "The Bear", img: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=400&h=600&fit=crop" },
  { title: "Oppenheimer", img: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=400&h=600&fit=crop" },
  { title: "Dune: Part Two", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&h=600&fit=crop" },
  { title: "Shogun", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=600&fit=crop" },
  { title: "Avatar", img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=400&h=600&fit=crop" }
];

export function VODSlider() {
  return (
    <section className="py-24 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.4em] mb-4">
          EXCLUSIVE VOD LIBRARY
        </h2>
        <div className="flex items-center gap-4">
             <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                LATEST RELEASES <span className="text-brand-green italic">IN 4K</span>
             </h3>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 px-4"
        >
          {movies.concat(movies).map((movie, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative flex-shrink-0 w-48 md:w-64 aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
            >
              <Image 
                src={movie.img} 
                alt={movie.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 192px, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <p className="text-white font-black text-lg uppercase tracking-tight leading-tight">{movie.title}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] bg-brand-green text-dark-bg font-black px-1.5 py-0.5 rounded">4K RAW</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Dolby Atmos</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />
      </div>
    </section>
  );
}
