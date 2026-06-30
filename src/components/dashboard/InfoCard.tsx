import type { Trend } from "@/data/dashboard";
import Card from "../ui/Card";

type InfoCardProps = {
  label: string;
  value: string;
  change: string;
  trend: Trend;
};

const trendStyles = {
  positive: "text-green-500",
  negative: "text-red-500",
  neutral: "text-yellow-500",
};

export function InfoCard({ label, value, change, trend }: InfoCardProps) {
  return (
    <Card>
      <p className="">{label}</p>

      <p className="">
        {value}
      </p>

      <p className={`${trendStyles[trend]}`}>
        {change}
      </p>
    </Card>
  );
}