import { AllocationChart } from "./AllocationChart";
import { AllocationLegend } from "./AllocationLegend";

export function AllocationBreakdown() {
  return (
    <div className="grid gap-4 sm:items-center  sm:grid-cols-[1fr_auto] xl:grid-cols-[1fr_auto_50px]">
      <AllocationChart />
      <AllocationLegend />
    </div>
  );
}