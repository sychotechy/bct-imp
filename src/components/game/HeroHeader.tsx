import { totalXP, maxXP, totalTopics, legendaryCount, epicCount } from "@/lib/exam-data";

export function HeroHeader() {
  const pct = (totalXP / maxXP) * 100;
  const level = Math.floor(pct / 10) + 1;

  return (
    <header className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12 mb-10">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl bg-primary/20 animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl bg-accent/20 animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-m2 animate-pulse-glow" />
          <span className="font-mono-ui text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            CST428 · QUEST TERMINAL · ONLINE
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
          <span className="text-gradient-primary">Blockchain</span>
          <br />
          <span className="text-foreground">Exam Quest</span>
          <span className="text-gradient-gold"> ⚔</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
          APJ Abdul Kalam Technological University · S8 B.Tech · 2019 Scheme.
          <span className="text-foreground/80"> Decode 4 exam papers. Master 5 modules. Claim your legendary topics.</span>
        </p>

        {/* Player bar */}
        <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono-ui text-[10px] uppercase tracking-wider">
              <span className="px-2 py-1 rounded gradient-primary text-primary-foreground font-bold">LVL {level}</span>
              <span className="text-muted-foreground">Scholar Rank · {totalXP} / {maxXP} XP</span>
            </div>
            <div className="h-3 rounded-full bg-white/5 overflow-hidden border border-white/10">
              <div
                className="h-full rounded-full gradient-primary animate-bar relative"
                style={{ width: `${pct}%`, boxShadow: "var(--shadow-glow-cyan)" }}
              >
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {[
              ["April 2025", "cyan"],
              ["May 2024", "magenta"],
              ["June 2023", "gold"],
              ["Oct 2023", "emerald"],
            ].map(([label, color]) => (
              <div
                key={label}
                className="font-mono-ui text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md glass"
                style={{ color: `var(--${color === "emerald" ? "m2" : color})` }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <MiniStat n={totalTopics} l="Total Quests" c="cyan" />
          <MiniStat n={legendaryCount} l="Legendary" c="gold" />
          <MiniStat n={epicCount} l="Epic" c="magenta" />
          <MiniStat n={5} l="Modules" c="m2" />
        </div>
      </div>
    </header>
  );
}

function MiniStat({ n, l, c }: { n: number; l: string; c: string }) {
  return (
    <div className="glass rounded-xl p-3 relative overflow-hidden">
      <div
        className="font-display text-3xl font-bold"
        style={{ color: `var(--${c})` }}
      >
        {n}
      </div>
      <div className="font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
        {l}
      </div>
    </div>
  );
}
