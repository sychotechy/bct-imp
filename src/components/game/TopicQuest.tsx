import type { Topic } from "@/lib/exam-data";
import { RarityBadge } from "./RarityBadge";

interface Props {
  topic: Topic;
  moduleVar: string;
  index: number;
}

export function TopicQuest({ topic, moduleVar, index }: Props) {
  const pct = (topic.freq / 4) * 100;
  const accent = `var(${moduleVar})`;

  return (
    <div
      className="group relative overflow-hidden rounded-xl glass p-4 transition-all hover:bg-white/[0.04] hover:-translate-y-0.5 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r"
        style={{ background: accent, boxShadow: `0 0 16px ${accent}` }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <RarityBadge rarity={topic.rarity} />
            <span className="font-mono-ui text-[10px] text-muted-foreground uppercase tracking-wider">
              Quest #{String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h4 className="mt-2 font-display font-semibold text-foreground leading-snug">
            {topic.label}
          </h4>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
            {topic.meta}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="relative">
            <div
              className="font-display text-2xl font-bold"
              style={{ color: accent }}
            >
              {topic.freq}
              <span className="text-sm text-muted-foreground font-normal">/4</span>
            </div>
          </div>
          <div className="text-[9px] font-mono-ui uppercase tracking-wider text-muted-foreground">
            papers
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full animate-bar relative"
            style={{
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${accent}, ${accent})`,
              boxShadow: `0 0 12px ${accent}`,
            }}
          >
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>
        <span className="font-mono-ui text-[10px] text-muted-foreground w-10 text-right">
          {pct.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}
