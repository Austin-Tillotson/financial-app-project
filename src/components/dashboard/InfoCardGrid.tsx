import { infoCards } from "@/data/dashboard";
import { InfoCard } from "./InfoCard";

export function InfoCardGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {infoCards.map((card) => (
        <InfoCard
          key={card.label}
          label={card.label}
          value={card.value}
          change={card.change}
          trend={card.trend}
        />
      ))}
    </section>
  );
}