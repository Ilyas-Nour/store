import { LucideIcon } from "lucide-react";

interface ChannelCardProps {
  name: string;
  count: string;
  Icon: LucideIcon;
  colorClass: string;
}

export function ChannelCard({ name, count, Icon, colorClass }: ChannelCardProps) {
  return (
    <div className="group relative bg-dark-card border border-dark-border rounded-xl p-6 overflow-hidden hover:border-gray-600 transition-all cursor-pointer">
      <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-10 transition-opacity group-hover:opacity-20 ${colorClass}`} />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className={`p-4 rounded-2xl bg-dark-bg border border-dark-border ${colorClass.replace('bg-', 'text-')}`}>
          <Icon className="w-8 h-8" />
        </div>
        
        <div>
          <h3 className="font-bold text-white text-lg mb-1">{name}</h3>
          <p className="text-sm text-gray-400">{count} Channels</p>
        </div>
      </div>
    </div>
  );
}
