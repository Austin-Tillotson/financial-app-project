"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

import { allocationData } from "@/data/dashboard";

const formatCurrency: Formatter = (value) => {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }

  return value ?? "";
};

const colors = ["blue", "green", "purple", "red"];

export function AllocationChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={allocationData}
          dataKey="value"
          nameKey="name"
        >
          {allocationData.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index]} />
          ))}
        </Pie>

        <Tooltip formatter={formatCurrency} />
      </PieChart>
    </ResponsiveContainer>
  );
}