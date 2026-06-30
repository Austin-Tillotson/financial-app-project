import { InfoCard } from "@/components/dashboard/InfoCard";
import { infoCards } from "@/data/dashboard";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950 px-5 py-5">
      <section className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="text-center">
          <p className="font-semibold uppercase">
            Financial Dashboard
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-4">
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
    </main>
  );
}