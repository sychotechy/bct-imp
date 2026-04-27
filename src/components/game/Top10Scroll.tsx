import { top10 } from "@/lib/exam-data";

export function Top10Scroll() {
  return (
    <section className="relative rounded-2xl glass-strong p-6 md:p-8 overflow-hidden">
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl bg-gold/20 pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl gradient-legendary flex items-center justify-center text-xl neon-border-gold">
          👑
        </div>
        <div>
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-gold">
            Legendary Loot · Top 10
          </div>
          <h3 className="font-display text-2xl font-bold">Must-Prepare Scroll</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2">
        {top10.map((item, i) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-3 rounded-lg glass hover:bg-white/[0.04] transition-all animate-fade-up min-w-0"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="h-8 w-8 shrink-0 rounded-md gradient-legendary flex items-center justify-center font-display font-bold text-sm text-background">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm break-words leading-snug">{item.title}</div>
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                Module — {item.module}
              </div>
            </div>
            <span className="ml-auto shrink-0 text-xs text-gold font-mono-ui">★★★★</span>
          </div>
        ))}
      </div>
    </section>
  );
}
