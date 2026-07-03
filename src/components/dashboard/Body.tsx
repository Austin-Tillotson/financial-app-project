import { AllocationBreakdown } from "./AllocationBreakdown";
import { Card } from "@/components/ui/Card";
import { PerformanceChart } from "./PerformanceChart";

export function Body() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card>
        <h2 className="dashboard-card-header">Portfolio Performance</h2>
        <PerformanceChart />
      </Card>

      <Card>
        <h2 className="dashboard-card-header">Asset Allocation</h2>
        <AllocationBreakdown />
      </Card>
    </section>
  );
}