import { Body } from "@/components/dashboard/Body";
import { Header } from "@/components/dashboard/Header";
import { InfoCardGrid } from "@/components/dashboard/InfoCardGrid";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StockHoldingsTable } from "@/components/dashboard/StockHoldingsTable";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

export default async function Home() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className="bg-slate-50 text-slate-950">
      <div className="lg:grid lg:grid-cols-[300px_1fr]">
        <Sidebar />

        <div className="min-w-0 px-5 py-5 md:py-8">
          <div className="mx-auto grid max-w-7xl gap-4">
            <Header />
            <InfoCardGrid />
            <Body />
            <StockHoldingsTable />
            <TransactionsTable />
          </div>
        </div>
      </div>
    </main>
  );
}