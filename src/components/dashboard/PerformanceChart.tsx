"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

import { performanceData } from "@/data/dashboard";

const formatCurrency: Formatter = (value) => {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }

  return value ?? "";
};

const balances = performanceData.map((dataPoint) => dataPoint.balance);

const minBalance = Math.min(...balances);
const maxBalance = Math.max(...balances);

const balanceRange = maxBalance - minBalance;
const axisPadding = Math.max(balanceRange * 0.15, 1000);

const yAxisDomain: [number, number] = [
  Math.floor((minBalance - axisPadding) / 1000) * 1000,
  Math.ceil((maxBalance + axisPadding) / 1000) * 1000,
];

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={performanceData}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis 
            domain={yAxisDomain}
            tickFormatter={(value: number) => `$${value / 1000}k`} 
        />
        <Tooltip formatter={formatCurrency} />
        <Line
          dataKey="balance"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}