import type { DashboardInfoCardData } from "@/data/dashboard";
import { InfoCard } from "./InfoCard";
import { InfoCardSparkline } from "./InfoCardSparkline";

type DashboardInfoCardProps = DashboardInfoCardData;

export function DashboardInfoCard({
  label,
  value,
  change,
  trend,
  history,
}: DashboardInfoCardProps) {
  return (
    <InfoCard
      label={label}
      value={value}
      change={change}
      trend={trend}
    >
      <InfoCardSparkline data={history} trend={trend} />
    </InfoCard>
  );
}