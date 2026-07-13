import { dashboardInfoCards } from "@/data/dashboard";
import { DashboardInfoCard } from "./DashboardInfoCard";

export function InfoCardGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardInfoCards.map((card) => (
        <DashboardInfoCard key={card.label} {...card} />
      ))}
    </section>
  );
}