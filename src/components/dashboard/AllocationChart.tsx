"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

import { allocationColors, allocationData } from "@/data/dashboard";

const formatCurrency: Formatter = (value) => {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }

  return value ?? "";
};

export function AllocationChart() {
  return (
    <div className="h-55 min-w-55">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={allocationData}
            dataKey="value"
            nameKey="name"
            innerRadius={55}
            outerRadius={85}
          >
            {allocationData.map((entry) => (
              <Cell key={entry.name} fill={allocationColors[entry.name]} />
            ))}
          </Pie>

          <Tooltip formatter={formatCurrency} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}