"use client";

import { useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  type PieSectorShapeProps,
} from "recharts";

import { allocationColors, allocationData } from "@/data/dashboard";

const totalAllocation = allocationData.reduce((total, item) => {
  return total + item.value;
}, 0);

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

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
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = allocationData[activeIndex];

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
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {allocationData.map((entry) => (
              <Cell key={entry.name} fill={allocationColors[entry.name]} />
            ))}
          </Pie>

          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-500 text-xs"
          >
            {activeItem.name}
          </text>

          <text
            x="50%"
            y="56%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-950 text-sm font-semibold"
          >
            {formatCurrency(activeItem.value)}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}