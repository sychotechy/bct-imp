export type Rarity = "legendary" | "epic" | "rare";

export interface Topic {
  label: string;
  meta: string;
  freq: number; // out of 4
  rarity: Rarity;
}

export interface ModuleData {
  id: string;
  num: number;
  name: string;
  subtitle: string;
  range: string;
  colorVar: string; // css var name e.g. --m1
  icon: string;
  topics: Topic[];
}

const rarityFor = (f: number): Rarity =>
  f >= 4 ? "legendary" : f === 3 ? "epic" : "rare";

const t = (label: string, meta: string, freq: number): Topic => ({
  label,
  meta,
  freq,
  rarity: rarityFor(freq),
});

export const modules: ModuleData[] = [
  {
    id: "m1",
    num: 1,
    name: "Cryptography Foundations",
    subtitle: "Part A Q1–Q2 · Part B Q11–Q12",
    range: "M1",
    colorVar: "--m1",
    icon: "🔐",
    topics: [
      t("Symmetric vs Asymmetric Cryptography", "Appeared in Part A of every single paper — the most consistent topic in the entire syllabus", 4),
      t("RSA Algorithm (Encryption & Decryption)", "Numerical problem in all 4 Part B sections — p, q, e, M values vary each time", 4),
      t("SHA-256 & Compression Function", "Part B in all 4 papers; diagram of compression function is always expected", 4),
      t("Elliptic Curve Cryptography (ECC)", "Part B in 2 papers (April 2025 & May 2024); key exchange, encryption & decryption", 2),
      t("AES (Advanced Encryption Standard)", "Part B in April 2025 and June 2023; state matrix transformation steps", 2),
      t("Merkle Trees & Blockchain Security", "Part A (May 2024) and Part B (Oct 2023, June 2023); benefits and diagram required", 2),
      t("Hash Function Properties & DHT", "May 2024 Part B Q11b and Oct 2023 Part A Q2", 2),
      t("Digital Signatures (Properties & Applications)", "Part A in April 2025 only", 1),
    ],
  },
  {
    id: "m2",
    num: 2,
    name: "Blockchain Fundamentals",
    subtitle: "Part A Q3–Q4 · Part B Q13–Q14",
    range: "M2",
    colorVar: "--m2",
    icon: "⛓️",
    topics: [
      t("How Blockchain Works (with Diagram)", "Part B in all 4 papers — diagram always required; generic elements + working flow", 4),
      t("Benefits, Features & Limitations of Blockchain", "Part B in May 2024, June 2023, Oct 2023; Part A Q8 in April 2025", 4),
      t("Decentralization — Ecosystem & Methods", "Part B in 3 papers; disintermediation, competition, ecosystem", 3),
      t("Types of Blockchain & Real-World Use Cases", "April 2025 Part B Q14a; Oct 2023 Part A Q4", 2),
      t("Blockchain Architecture (Layered)", "Part B in June 2023 and Oct 2023; layered diagram expected", 2),
      t("Block Header Components & Genesis Block", "Part A appearances in June 2023 (Q3) and April 2025 (Q3)", 2),
    ],
  },
  {
    id: "m3",
    num: 3,
    name: "Consensus & Bitcoin",
    subtitle: "Part A Q5–Q6 · Part B Q15–Q16",
    range: "M3",
    colorVar: "--m3",
    icon: "⚡",
    topics: [
      t("Paxos Protocol (Crash Fault Tolerance)", "Part B in April 2025, May 2024, Oct 2023 — working + benefits; heavily repeated", 3),
      t("Bitcoin Mining & Role of Miner", "Part B April 2025, June 2023, Oct 2023; mining flowchart expected; PoW diagram", 3),
      t("Bitcoin Transactions & Payment Process", "Part B in April 2025, May 2024, June 2023; UTXO; user-perspective payment flow", 3),
      t("Proof of Work (PoW) Mechanism", "Part A in May 2024 and June 2023; PoW diagram appears in scheme/answer key", 3),
      t("Proof of Stake (PoS) & PoW vs PoS", "Part B May 2024 Q15b (PoS diagram), June 2023 Q15b (comparison); April 2025 (DPoS)", 3),
      t("PBFT — Practical Byzantine Fault Tolerance", "Part B April 2025 Q16a; Part A Oct 2023 Q5; Byzantine generals problem Oct 2023", 2),
      t("Wallet Types", "Part A April 2025 Q5; Part B May 2024 Q16b", 2),
      t("RAFT Consensus Algorithm", "Part A April 2025 Q6 only", 1),
    ],
  },
  {
    id: "m4",
    num: 4,
    name: "Applications, DApps & Oracles",
    subtitle: "Part A Q7–Q8 · Part B Q17–Q18",
    range: "M4",
    colorVar: "--m4",
    icon: "🌐",
    topics: [
      t("Smart Contracts (Definition & Properties)", "Part A in all 4 papers (Q7 or Q8) — most repeated single Part A topic in Module IV", 4),
      t("Oracles — Types, Data Flow & Architecture", "Part A in May 2024 & June 2023; Part B in April 2025, May 2024, Oct 2023", 4),
      t("DApps — Design & Architecture", "Part B in all 4 papers; design diagram expected in most", 4),
      t("Blockchain in Government Sector", "Part B April 2025, May 2024 — voting, citizen ID, border control cited as examples", 2),
      t("Blockchain in Finance Sector", "Part B May 2024 Q18a and June 2023 Q17b", 2),
      t("Blockchain in Healthcare / Supply Chain / AI", "One each across June 2023, Oct 2023 — expect one application use case", 1),
      t("Legal & Ethical Implications of Blockchain", "Part B April 2025 Q18a only", 1),
    ],
  },
  {
    id: "m5",
    num: 5,
    name: "Ethereum & Solidity",
    subtitle: "Part A Q9–Q10 · Part B Q19–Q20",
    range: "M5",
    colorVar: "--m5",
    icon: "💎",
    topics: [
      t("Elements Present in Ethereum Blockchain", "Part B April 2025, May 2024, Oct 2023; Part A June 2023 Q10", 4),
      t("Ethereum Transaction Processing & Gas", "Part B in April 2025, June 2023, Oct 2023; how gas affects transaction processing", 3),
      t("Solidity Bank Contract (deposit/withdraw/balance)", "Part B in May 2024, June 2023, Oct 2023; same problem statement used repeatedly", 3),
      t("Role of EVM (Ethereum Virtual Machine)", "Part A in April 2025 Q10 and June 2023 Q9; May 2024 via DELEGATECALL", 3),
      t("Solidity Voting Contract", "Part B April 2025 Q19b and June 2023 Q20b", 2),
      t("Control Structures in Solidity", "Part B April 2025 Q19a and May 2024 Q20a", 2),
      t("Bitcoin vs Ethereum Comparison", "Part B April 2025 Q20a and June 2023 Q19a; Ethereum world state diagram", 2),
      t("Inheritance & Libraries in Solidity", "Part A April 2025 Q9 (inheritance), May 2024 Q10 (libraries via DELEGATECALL)", 2),
      t("Two Types of Ethereum Transactions", "May 2024 Part B Q19a — message call and contract creation", 1),
    ],
  },
];

export const totalTopics = modules.reduce((s, m) => s + m.topics.length, 0);
export const legendaryCount = modules.reduce(
  (s, m) => s + m.topics.filter((t) => t.rarity === "legendary").length, 0
);
export const epicCount = modules.reduce(
  (s, m) => s + m.topics.filter((t) => t.rarity === "epic").length, 0
);

// Player XP: count freq points
export const totalXP = modules.reduce(
  (s, m) => s + m.topics.reduce((ss, t) => ss + t.freq, 0), 0
);
export const maxXP = totalTopics * 4;

export const top10: { title: string; module: number }[] = [
  { title: "Symmetric vs Asymmetric Cryptography", module: 1 },
  { title: "RSA Algorithm with numerical", module: 1 },
  { title: "SHA-256 Compression Function", module: 1 },
  { title: "How Blockchain Works (diagram)", module: 2 },
  { title: "Smart Contracts (definition + properties)", module: 4 },
  { title: "Oracles and generic data flow", module: 4 },
  { title: "DApps design and architecture", module: 4 },
  { title: "Ethereum Blockchain Elements", module: 4 },
  { title: "Ethereum Transaction Processing + Gas", module: 5 },
  { title: "Solidity Bank Contract (deposit/withdraw/balance)", module: 5 },
];
