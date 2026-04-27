interface StatCardProps {
  value: string | number;
  label: string;
  sub?: string;
  accent?: "cyan" | "magenta" | "gold" | "emerald";
  icon?: string;
  delay?: number;
}

const accentMap = {
  cyan: "from-cyan/20 to-transparent border-cyan/30 text-cyan",
  magenta: "from-magenta/20 to-transparent border-magenta/30 text-magenta",
  gold: "from-gold/20 to-transparent border-gold/30 text-gold",
  emerald: "from-m2/20 to-transparent border-m2/30 text-m2",
};

export function StatCard({ value, label, sub, accent = "cyan", icon, delay = 0 }: StatCardProps) {
  const c = accentMap[accent];
  return (
    <div
      className={`relative overflow-hidden rounded-xl glass p-5 bg-gradient-to-br ${c} animate-fade-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 h-24 w-24 rounded-full blur-3xl opacity-40 bg-current pointer-events-none" />
      <div className="relative flex items-start justify-between">
        <div>
          <div className={`font-display text-4xl font-bold ${c.split(" ").pop()}`}>{value}</div>
          <div className="mt-1 text-xs font-medium text-foreground/90">{label}</div>
          {sub && <div className="mt-1 text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground">{sub}</div>}
        </div>
        {icon && <div className="text-2xl opacity-70">{icon}</div>}
      </div>
    </div>
  );
}
