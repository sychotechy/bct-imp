import { modules } from "@/lib/exam-data";

export type FilterMode = "all" | "m1" | "m2" | "m3" | "m4" | "m5";
export type ExpandState = "expanded" | "collapsed";

interface Props {
  mode: FilterMode;
  setMode: (m: FilterMode) => void;
  legendaryOnly: boolean;
  setLegendaryOnly: (v: boolean) => void;
  expandState: ExpandState;
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

export function QuestFilter({
  mode,
  setMode,
  legendaryOnly,
  setLegendaryOnly,
  expandState,
  onExpandAll,
  onCollapseAll,
}: Props) {
  const modBtn = (m: FilterMode, label: string, colorVar?: string) => {
    const active = mode === m;
    return (
      <button
        key={m}
        onClick={() => setMode(m)}
        className={`font-mono-ui text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded-lg border transition-all ${
          active
            ? "text-background font-bold"
            : "glass text-muted-foreground hover:text-foreground border-white/10"
        }`}
        style={
          active
            ? {
                background: colorVar ? `var(${colorVar})` : "var(--primary)",
                borderColor: colorVar ? `var(${colorVar})` : "var(--primary)",
                boxShadow: colorVar
                  ? `0 0 16px var(${colorVar})`
                  : "var(--shadow-glow-cyan)",
              }
            : undefined
        }
      >
        {label}
      </button>
    );
  };

  const allOnly = mode === "all";
  const expanded = expandState === "expanded";

  return (
    <section className="mb-6 md:mb-8 animate-fade-up">
      <div className="glass-strong rounded-2xl p-4 md:p-5">
        <div className="flex items-center gap-2 mb-3 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span>Quest Filter</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {modBtn("all", "All")}
          {modules.map((m) =>
            modBtn(`m${m.num}` as FilterMode, `Mod ${m.num}`, m.colorVar),
          )}

          <div className="w-px bg-white/10 mx-1 self-stretch" />

          <button
            onClick={() => setLegendaryOnly(!legendaryOnly)}
            className={`font-mono-ui text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${
              legendaryOnly
                ? "text-background font-bold gradient-legendary border-transparent"
                : "glass text-muted-foreground hover:text-foreground border-white/10"
            }`}
            style={legendaryOnly ? { boxShadow: "0 0 16px var(--gold)" } : undefined}
          >
            <span
              className={`h-3 w-3 rounded-sm border flex items-center justify-center ${
                legendaryOnly ? "bg-background/20 border-background" : "border-muted-foreground"
              }`}
            >
              {legendaryOnly && <span className="text-[9px] leading-none">✓</span>}
            </span>
            Legendary
          </button>

          <div className="w-px bg-white/10 mx-1 self-stretch" />

          <button
            onClick={onExpandAll}
            disabled={!allOnly}
            className={`font-mono-ui text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded-lg border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
              allOnly && expanded
                ? "text-background font-bold border-transparent"
                : "glass text-muted-foreground hover:text-foreground border-white/10"
            }`}
            style={
              allOnly && expanded
                ? {
                    background: "var(--cyan)",
                    borderColor: "var(--cyan)",
                    boxShadow: "0 0 16px var(--cyan)",
                  }
                : undefined
            }
          >
            ⊕ Expand
          </button>
          <button
            onClick={onCollapseAll}
            disabled={!allOnly}
            className={`font-mono-ui text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded-lg border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
              allOnly && !expanded
                ? "text-background font-bold border-transparent"
                : "glass text-muted-foreground hover:text-foreground border-white/10"
            }`}
            style={
              allOnly && !expanded
                ? {
                    background: "var(--magenta)",
                    borderColor: "var(--magenta)",
                    boxShadow: "0 0 16px var(--magenta)",
                  }
                : undefined
            }
          >
            ⊖ Collapse
          </button>
        </div>
      </div>
    </section>
  );
}
