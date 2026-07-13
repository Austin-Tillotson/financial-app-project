"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  YAxis,
} from "recharts";

import type {
  InfoCardHistoryPoint,
  Trend,
} from "@/data/dashboard";

type InfoCardSparklineProps = {
  data: InfoCardHistoryPoint[];
  trend: Trend;
};

const strokeColors: Record<Trend, string> = {
  positive: "#16a34a",
  negative: "#dc2626",
  neutral: "#ca8a04",
};

const fillColors: Record<Trend, string> = {
  positive: "#dcfce7",
  negative: "#fee2e2",
  neutral: "#fef3c7",
};

export function InfoCardSparkline({ data, trend }: InfoCardSparklineProps) {
  return (
    <div className="mt-4 h-12">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Area
            dataKey="value"
            dot={false}
            fill={fillColors[trend]}
            fillOpacity={0.65}
            stroke={strokeColors[trend]}
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}