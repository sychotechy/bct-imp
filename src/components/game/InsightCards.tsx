const insights = [
  {
    icon: "💻",
    tag: "CODE CACHE",
    title: "Two Solidity Programs — Guaranteed Drops",
    body: "Bank contract (3/4 papers) and Voting contract (2/4) are the only two Solidity programs asked. Both are safe bets. Master both — they carry 7–8 marks each.",
    color: "var(--m5)",
  },
  {
    icon: "🧩",
    tag: "PATTERN INTEL",
    title: "Module III Always Splits Into Paxos + Bitcoin",
    body: "In 3 of 4 papers, Part B Module III splits exactly as Q15 (Paxos/consensus) and Q16 (Bitcoin mining/transaction). Prepare both as paired boss topics.",
    color: "var(--m3)",
  },
];

export function InsightCards() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {insights.map((ins, i) => (
        <div
          key={ins.title}
          className="relative rounded-2xl glass-strong p-6 overflow-hidden animate-fade-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div
            className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-30"
            style={{ background: ins.color }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center text-xl"
                style={{
                  background: `${ins.color}25`,
                  boxShadow: `inset 0 0 0 1px ${ins.color}60`,
                }}
              >
                {ins.icon}
              </div>
              <span
                className="font-mono-ui text-[10px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: ins.color }}
              >
                {ins.tag}
              </span>
            </div>
            <h4 className="font-display text-lg font-bold mb-2">{ins.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{ins.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
