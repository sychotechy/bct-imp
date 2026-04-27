import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroHeader } from "@/components/game/HeroHeader";
import { ModuleLevel } from "@/components/game/ModuleLevel";
import { QuestFilter, type FilterMode } from "@/components/game/QuestFilter";
import { Top10Scroll } from "@/components/game/Top10Scroll";
import { InsightCards } from "@/components/game/InsightCards";
import { modules } from "@/lib/exam-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Blockchain Exam Quest · CST428 Gamified Analysis" },
      {
        name: "description",
        content:
          "A futuristic gamified dashboard for CST428 Blockchain Technologies exam topic analysis across 4 question papers, 5 modules, with rarity tiers and XP bars.",
      },
    ],
  }),
});

function Index() {
  const [mode, setMode] = useState<FilterMode>("all");
  const [legendaryOnly, setLegendaryOnly] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [expandState, setExpandState] = useState<"expanded" | "collapsed">("expanded");

  const visibleModules =
    mode === "all" ? modules : modules.filter((m) => `m${m.num}` === mode);

  const onExpandAll = () => {
    setCollapsed(Object.fromEntries(modules.map((m) => [m.id, false])));
    setExpandState("expanded");
  };
  const onCollapseAll = () => {
    setCollapsed(Object.fromEntries(modules.map((m) => [m.id, true])));
    setExpandState("collapsed");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <HeroHeader />

      <QuestFilter
        mode={mode}
        setMode={setMode}
        legendaryOnly={legendaryOnly}
        setLegendaryOnly={setLegendaryOnly}
        expandState={expandState}
        onExpandAll={onExpandAll}
        onCollapseAll={onCollapseAll}
      />

      <div className="space-y-6 md:space-y-8 mb-10">
        {visibleModules.map((mod, i) => (
          <ModuleLevel
            key={mod.id}
            mod={mod}
            index={i}
            collapsed={mode === "all" ? !!collapsed[mod.id] : false}
            onToggleCollapsed={
              mode === "all"
                ? () =>
                    setCollapsed((c) => ({ ...c, [mod.id]: !c[mod.id] }))
                : undefined
            }
            legendaryOnly={legendaryOnly}
          />
        ))}
      </div>

      <div className="mb-8">
        <Top10Scroll />
      </div>

      <InsightCards />

      <footer className="mt-16 pt-8 border-t border-border text-center">
        <p className="font-mono-ui text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          End of Transmission · Good Luck, Scholar
        </p>
      </footer>
    </main>
  );
}
