export type Trend = "positive" | "negative" | "neutral";

export type InfoCardData = {
  label: string;
  value: string;
  change: string;
  trend: Trend;
};

export type InfoCardHistoryPoint = {
  month: string;
  value: number;
};

export type DashboardInfoCardData = InfoCardData & {
  history: InfoCardHistoryPoint[];
};

export const dashboardInfoCards: DashboardInfoCardData[] = [
  {
    label: "Net Worth",
    value: "$205,654",
    change: "+3.8% this month",
    trend: "positive",
    history: [
      { month: "Jan", value: 178000 },
      { month: "Feb", value: 181500 },
      { month: "Mar", value: 186200 },
      { month: "Apr", value: 191000 },
      { month: "May", value: 198400 },
      { month: "Jun", value: 205654 },
    ],
  },
  {
    label: "Debt",
    value: "$11,834",
    change: "+0.6% weekly",
    trend: "neutral",
    history: [
      { month: "Jan", value: 12800 },
      { month: "Feb", value: 12450 },
      { month: "Mar", value: 12100 },
      { month: "Apr", value: 11950 },
      { month: "May", value: 11760 },
      { month: "Jun", value: 11834 },
    ],
  },
  {
    label: "Stock Portfolio",
    value: "$25,249",
    change: "-1.2% this week",
    trend: "negative",
    history: [
      { month: "Jan", value: 22100 },
      { month: "Feb", value: 23600 },
      { month: "Mar", value: 24400 },
      { month: "Apr", value: 26100 },
      { month: "May", value: 25550 },
      { month: "Jun", value: 25249 },
    ],
  },
  {
    label: "401(k) Balance",
    value: "$150,634",
    change: "+0.9% this month",
    trend: "positive",
    history: [
      { month: "Jan", value: 137500 },
      { month: "Feb", value: 140200 },
      { month: "Mar", value: 143100 },
      { month: "Apr", value: 146800 },
      { month: "May", value: 149200 },
      { month: "Jun", value: 150634 },
    ],
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

export type AllocationName = "Cash" | "Stocks" | "401(k)" | "Debt";

export type AllocationData = {
  name: AllocationName;
  value: number;
};

export const allocationColors: Record<AllocationName, string> = {
  Cash: "#2563eb",
  Stocks: "#16a34a",
  "401(k)": "#9333ea",
  Debt: "#dc2626",
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

export type StockHoldingData = {
  ticker: string;
  company: string;
  shares: number;
  averageCost: string;
  marketValue: string;
  dayChange: string;
  trend: Trend;
};

export const stockHoldings: StockHoldingData[] = [
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    shares: 24,
    averageCost: "$168.42",
    marketValue: "$5,124.96",
    dayChange: "+1.2%",
    trend: "positive",
  },
  {
    ticker: "MSFT",
    company: "Microsoft Corp.",
    shares: 18,
    averageCost: "$312.75",
    marketValue: "$8,214.30",
    dayChange: "+0.8%",
    trend: "positive",
  },
  {
    ticker: "NVDA",
    company: "NVIDIA Corp.",
    shares: 10,
    averageCost: "$89.10",
    marketValue: "$1,245.60",
    dayChange: "-1.4%",
    trend: "negative",
  },
  {
    ticker: "VTI",
    company: "Vanguard Total Stock Market ETF",
    shares: 32,
    averageCost: "$221.30",
    marketValue: "$8,902.40",
    dayChange: "+0.3%",
    trend: "positive",
  },
];