import { AllocationChart } from "./AllocationChart";
import { AllocationLegend } from "./AllocationLegend";

export function AllocationBreakdown() {
  return (
    <div className="grid gap-4">
      <AllocationChart />
      <AllocationLegend />
    </div>
  );
}