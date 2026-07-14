import type { ReactNode } from "react";
import type { Trend } from "@/data/dashboard";
import { Card } from "../ui/Card";

type InfoCardProps = {
  label: string;
  value: string;
  change: string;
  trend: Trend;
  children?: ReactNode;
};

const trendStyles = {
  positive: "text-green-600",
  negative: "text-red-600",
  neutral: "text-yellow-600",
};

export function InfoCard({
  label,
  value,
  change,
  trend,
  children,
}: InfoCardProps) {
  return (
    <Card interactive>
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-2 mb-2 text-2xl font-semibold text-slate-900">
        {value}
      </p>

      <p className={`text-sm font-medium ${trendStyles[trend]}`}>
        {change}
      </p>

      {children}
    </Card>
  );
}