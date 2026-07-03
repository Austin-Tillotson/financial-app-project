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
      <LineChart 
        data={performanceData}
        margin={{ top: 8, right: 12, left: 0, bottom: 0 }}  
      >
        <CartesianGrid 
          vertical={false}
          stroke="#e2e8f0"
        />
        <XAxis 
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tickMargin={8}
          tick={{ fontSize: 12, fill: "#64748b" }}
        />
        <YAxis 
          domain={yAxisDomain}
          axisLine={false}
          tickLine={false}
          tickMargin={8}
          tick={{ fontSize: 12, fill: "#64748b" }}
          tickFormatter={(value: number) => `$${value / 1000}k`}
        />
        <Tooltip formatter={formatCurrency} />
        <Line
          dataKey="balance"
          stroke="#853adb"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}