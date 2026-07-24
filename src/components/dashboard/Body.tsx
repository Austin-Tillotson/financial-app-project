import { AllocationBreakdown } from "./AllocationBreakdown";
import { Card } from "@/components/ui/Card";
import { PerformanceChart } from "./PerformanceChart";

export function Body() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card className="flex min-h-105 flex-col xl:min-h-0">
        <h2 className="dashboard-card-header">Portfolio Performance</h2>

        <div className="mt-auto xl:mt-0">
          <PerformanceChart />
        </div>
      </Card>

      <Card>
        <h2 className="dashboard-card-header">Asset Allocation</h2>
        <AllocationBreakdown />
      </Card>
    </section>
  );
}