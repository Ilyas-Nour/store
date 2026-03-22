export function LiveStatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-dark-bg/50 border border-brand-green/30 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
      </span>
      <span className="font-medium text-brand-green">Servers Online</span>
    </div>
  );
}
