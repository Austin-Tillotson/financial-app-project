import { AllocationBreakdown } from "./AllocationBreakdown";
import { Card } from "@/components/ui/Card";
import { PerformanceChart } from "./PerformanceChart";

export function Body() {
  return (
    <section className="grid md:grid-cols-2">
      <Card>
        <h2>Portfolio Performance</h2>
        <PerformanceChart />
      </Card>

      <Card>
        <h2>Asset Allocation</h2>
        <AllocationBreakdown />
      </Card>
    </section>
  );
}