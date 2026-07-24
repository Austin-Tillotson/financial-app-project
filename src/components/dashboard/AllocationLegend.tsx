import { allocationColors, allocationData } from "@/data/dashboard";

const totalAllocation = allocationData.reduce((total, item) => {
  return total + item.value;
}, 0);

export function AllocationLegend() {
  return (
    <ul className="grid w-full min-w-40 text-sm">
      {allocationData.map((item) => {
        const percentage = Math.round((item.value / totalAllocation) * 100);

        return (
          <li
            className="flex items-center justify-between gap-6 border-b border-dashed border-slate-200 py-2 last:border-0"
            key={item.name}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: allocationColors[item.name] }}
              />

              <span className="text-slate-700">{item.name}</span>
            </div>

            <span className="font-medium text-slate-900">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}