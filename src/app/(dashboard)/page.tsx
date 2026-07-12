import { Body } from "@/components/dashboard/Body";
import { InfoCardGrid } from "@/components/dashboard/InfoCardGrid";
import { StockHoldingsTable } from "@/components/dashboard/StockHoldingsTable";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

export default async function Home() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <section className="hidden gap-2 lg:grid">
        <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">
              Dashboard
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Track balances, portfolio movement, spending activity, and account health from one place.
            </p>
          </div>

          <p className="text-sm text-slate-500">Updated today</p>
        </div>
      </section>

      <InfoCardGrid />
      <Body />
      <StockHoldingsTable />
      <TransactionsTable />
    </>
  );
}