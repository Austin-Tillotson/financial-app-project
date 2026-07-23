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

import { performanceData } from "@/data/dashboard";

const monthNames: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
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

type TooltipPayload = {
  payload: {
    month: string;
    balance: number;
  };
};

type PerformanceTooltipProps = {
  active?: boolean;
  payload?: TooltipPayload[];
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function PerformanceTooltip({ active, payload }: PerformanceTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const currentPoint = payload[0].payload;
  const currentIndex = performanceData.findIndex(
    (point) => point.month === currentPoint.month
  );

  const previousPoint = performanceData[currentIndex - 1];
  const monthlyChange = previousPoint
    ? currentPoint.balance - previousPoint.balance
    : 0;

  const changePercent = previousPoint
    ? (monthlyChange / previousPoint.balance) * 100
    : 0;

  const isPositive = monthlyChange >= 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-slate-400">
        {monthNames[currentPoint.month]} 2026
      </p>

      <div className="mt-1 flex items-center gap-2">
        <p className="text-sm font-semibold text-slate-950">
          {formatCurrency(currentPoint.balance)}
        </p>

        {previousPoint && (
          <p
            className={`text-xs font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : "-"}{Math.abs(changePercent).toFixed(1)}%
          </p>
        )}
      </div>
    </div>
  );
}

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
        <Tooltip
          content={<PerformanceTooltip />}
          cursor={{
            stroke: "#c4b5fd",
            strokeDasharray: "3",
            strokeWidth: 1,
          }}
        />
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