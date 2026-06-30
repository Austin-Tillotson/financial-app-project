export type Trend = "positive" | "negative" | "neutral";

export type InfoCardData = {
  label: string;
  value: string;
  change: string;
  trend: Trend;
};

export const infoCards: InfoCardData[] = [
  {
    label: "Net Worth",
    value: "$205,654",
    change: "+3.8% this month",
    trend: "positive",
  },
  {
    label: "Debt",
    value: "$11,834",
    change: "+0.6% weekly",
    trend: "neutral",
  },
  {
    label: "Stock Portfolio",
    value: "$25,249",
    change: "-1.2% this week",
    trend: "negative",
  },
  {
    label: "401(k) Balance",
    value: "$150,634",
    change: "+0.9% this month",
    trend: "positive",
  },
];