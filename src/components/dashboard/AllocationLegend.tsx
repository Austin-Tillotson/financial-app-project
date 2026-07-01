import { allocationData } from "@/data/dashboard";

const totalAllocation = allocationData.reduce((total, item) => {
  return total + item.value;
}, 0);

export function AllocationLegend() {
  return (
    <ul>
      {allocationData.map((item) => {
        const percentage = Math.round((item.value / totalAllocation) * 100);

        return (
          <li key={item.name}>
            <span>{item.name}</span>
            <span>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}