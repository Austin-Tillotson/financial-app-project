import { allocationColors, allocationData } from "@/data/dashboard";

const totalAllocation = allocationData.reduce((total, item) => {
  return total + item.value;
}, 0);

export function AllocationLegend() {
  return (
    <ul className="grid gap-2 text-sm">
      {allocationData.map((item) => {
        const percentage = Math.round((item.value / totalAllocation) * 100);

        return (
          <li className="flex items-center gap-2" key={item.name}>
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: allocationColors[item.name] }}
            />
            <span>{item.name}</span>
            <span>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}