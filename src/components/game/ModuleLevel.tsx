import type { ModuleData } from "@/lib/exam-data";
import { TopicQuest } from "./TopicQuest";

interface ModuleLevelProps {
  mod: ModuleData;
  index: number;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
  legendaryOnly?: boolean;
}

export function ModuleLevel({
  mod,
  index,
  collapsed = false,
  onToggleCollapsed,
  legendaryOnly = false,
}: ModuleLevelProps) {
  const color = `var(${mod.colorVar})`;
  const modXP = mod.topics.reduce((s, t) => s + t.freq, 0);
  const modMax = mod.topics.length * 4;
  const modPct = (modXP / modMax) * 100;
  const mustCount = mod.topics.filter((t) => t.rarity === "legendary").length;
  const visibleTopics = legendaryOnly
    ? mod.topics.filter((t) => t.rarity === "legendary" || t.rarity === "epic")
    : mod.topics;

  return (
    <section
      className="animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative rounded-2xl glass-strong p-6 md:p-8 overflow-hidden">
        {/* Glow orb */}
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: color }}
        />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center text-2xl font-display font-bold shrink-0"
              style={{
                background: `linear-gradient(135deg, ${color}, transparent)`,
                boxShadow: `0 0 24px ${color}60, inset 0 0 0 1px ${color}80`,
              }}
            >
              <span className="drop-shadow-[0_0_6px_currentColor]">{mod.icon}</span>
              <span
                className="absolute -bottom-2 -right-2 font-mono-ui text-[10px] font-bold px-1.5 py-0.5 rounded bg-background border"
                style={{ color, borderColor: `${color}80` }}
              >
                LV.{mod.num}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Module {mod.num}</span>
                <span className="h-px w-8" style={{ background: color }} />
                <span style={{ color }}>{mod.range}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mt-1">
                {mod.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{mod.subtitle}</p>
            </div>
          </div>

          <div className="md:ml-auto flex items-center gap-3 shrink-0">
            <div className="text-right">
              <div className="font-mono-ui text-[10px] uppercase tracking-wider text-muted-foreground">Must-prep</div>
              <div className="font-display text-xl font-bold text-gold">{mustCount}</div>
            </div>
            <div className="w-px bg-border h-8" />
            <div className="text-right">
              <div className="font-mono-ui text-[10px] uppercase tracking-wider text-muted-foreground">Quests</div>
              <div className="font-display text-xl font-bold" style={{ color }}>{mod.topics.length}</div>
            </div>
            {onToggleCollapsed && (
              <button
                onClick={onToggleCollapsed}
                aria-label={collapsed ? "Expand" : "Collapse"}
                className="ml-2 h-9 w-9 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                style={{ borderColor: `${color}40` }}
              >
                <span
                  className="font-mono-ui text-sm transition-transform"
                  style={{ transform: collapsed ? "rotate(0deg)" : "rotate(180deg)", color }}
                >
                  ▾
                </span>
              </button>
            )}
          </div>
        </div>

        {!collapsed && (
          <>
            {/* Module XP bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1.5 font-mono-ui text-[10px] uppercase tracking-wider">
                <span className="text-muted-foreground">Module Mastery</span>
                <span style={{ color }}>{modXP} / {modMax} XP</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden relative">
                <div
                  className="h-full rounded-full relative animate-bar"
                  style={{
                    width: `${modPct}%`,
                    background: `linear-gradient(90deg, transparent, ${color})`,
                    boxShadow: `0 0 16px ${color}`,
                  }}
                >
                  <div className="absolute inset-0 shimmer" />
                </div>
              </div>
            </div>

            {/* Topics grid */}
            {visibleTopics.length === 0 ? (
              <div className="text-center py-6 font-mono-ui text-[11px] uppercase tracking-wider text-muted-foreground">
                No legendary or epic quests in this module
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {visibleTopics.map((topic, i) => (
                  <TopicQuest key={topic.label} topic={topic} moduleVar={mod.colorVar} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
