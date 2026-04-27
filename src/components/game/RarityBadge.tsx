import type { Rarity } from "@/lib/exam-data";

const config: Record<Rarity, { label: string; gradient: string; glow: string }> = {
  legendary: {
    label: "LEGENDARY",
    gradient: "gradient-legendary",
    glow: "neon-border-gold",
  },
  epic: {
    label: "EPIC",
    gradient: "gradient-epic",
    glow: "neon-border-magenta",
  },
  rare: {
    label: "RARE",
    gradient: "gradient-rare",
    glow: "neon-border-cyan",
  },
};

export function RarityBadge({ rarity }: { rarity: Rarity }) {
  const c = config[rarity];
  return (
    <span
      className={`${c.gradient} ${c.glow} font-mono-ui text-[9px] font-bold tracking-[0.15em] px-2 py-1 rounded-md text-background`}
    >
      {c.label}
    </span>
  );
}
