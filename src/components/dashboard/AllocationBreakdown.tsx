import { AllocationChart } from "./AllocationChart";
import { AllocationLegend } from "./AllocationLegend";

export function AllocationBreakdown() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(220px,1fr)_minmax(160px,50%)] xl:items-center">
      <AllocationChart />
      <AllocationLegend />
    </div>
  );
}