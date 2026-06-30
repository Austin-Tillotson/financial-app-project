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

export type TransactionData = {
  date: string;
  merchant: string;
  category: string;
  amount: string;
  status: "Completed" | "Pending" | "Scheduled";
};

export const transactions: TransactionData[] = [
  {
    date: "Jun 24",
    merchant: "ETrade",
    category: "Investment",
    amount: "$500.00",
    status: "Completed",
  },
  {
    date: "Jun 23",
    merchant: "Mortgage Payment",
    category: "Housing",
    amount: "$1,850.00",
    status: "Completed",
  },
  {
    date: "Jun 22",
    merchant: "Electric Utility",
    category: "Bills",
    amount: "$142.38",
    status: "Pending",
  },
  {
    date: "Jun 21",
    merchant: "Payroll Deposit",
    category: "Income",
    amount: "$3,250.00",
    status: "Completed",
  },
];