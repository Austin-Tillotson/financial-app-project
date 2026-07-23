"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
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
      <AreaChart 
        data={performanceData}
        margin={{ top: 8, right: 12, left: 0, bottom: 0 }}  
      >
        <defs>
          <linearGradient
            id="performanceLineGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#853adb" />
          </linearGradient>

          <linearGradient
            id="performanceFillGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.14} />
            <stop offset="50%" stopColor="#db2777" stopOpacity={0.12} />
            <stop offset="100%" stopColor="#853adb" stopOpacity={0.16} />
          </linearGradient>
        </defs>

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
        <Area
          dataKey="balance"
          type="monotone"
          stroke="url(#performanceLineGradient)"
          strokeWidth={3}
          fill="url(#performanceFillGradient)"
          fillOpacity={1}
          dot={false}
          activeDot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}