"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  type PieSectorShapeProps,
} from "recharts";
import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

import { allocationColors, allocationData } from "@/data/dashboard";

const formatCurrency: Formatter = (value) => {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }

  return value ?? "";
};

function getActiveColor(hex: string, amount: number) {
  const value = hex.replace("#", "");

  const r = Math.max(0, Number.parseInt(value.slice(0, 2), 16) - amount);
  const g = Math.max(0, Number.parseInt(value.slice(2, 4), 16) - amount);
  const b = Math.max(0, Number.parseInt(value.slice(4, 6), 16) - amount);

  return `rgb(${r}, ${g}, ${b})`;
}

function AllocationSlice(props: PieSectorShapeProps) {
  const fill =
    props.isActive && typeof props.fill === "string"
      ? getActiveColor(props.fill, 25)
      : props.fill;

  return (
    <Sector
      {...props}
      fill={fill}
      innerRadius={props.isActive ? props.innerRadius - 3 : props.innerRadius}
      outerRadius={props.isActive ? props.outerRadius + 3 : props.outerRadius}
    />
  );
}

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
            shape={AllocationSlice}
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