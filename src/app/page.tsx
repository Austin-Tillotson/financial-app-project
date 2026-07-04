import { Body } from "@/components/dashboard/Body";
import { Header } from "@/components/dashboard/Header";
import { InfoCardGrid } from "@/components/dashboard/InfoCardGrid";
import { StockHoldingsTable } from "@/components/dashboard/StockHoldingsTable";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950 px-5 py-5 md:py-8">
      <div  className="mx-auto grid max-w-7xl gap-4">
        <Header />
        <InfoCardGrid />
        <Body />
        <StockHoldingsTable />
        <TransactionsTable />
      </div>
    </main>
  );
}