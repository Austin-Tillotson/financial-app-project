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

export type PerformanceData = {
  month: string;
  balance: number;
};

export const performanceData: PerformanceData[] = [
  { month: "Jan", balance: 178000 },
  { month: "Feb", balance: 181500 },
  { month: "Mar", balance: 186200 },
  { month: "Apr", balance: 191000 },
  { month: "May", balance: 198400 },
  { month: "Jun", balance: 205654 },
];

export type AllocationData = {
  name: string;
  value: number;
};

export const allocationData: AllocationData[] = [
  { name: "Cash", value: 18000 },
  { name: "Stocks", value: 25249 },
  { name: "401(k)", value: 150634 },
  { name: "Debt", value: 11834 },
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