import { Body } from "@/components/dashboard/Body";
import { InfoCardGrid } from "@/components/dashboard/InfoCardGrid";
import { StockHoldingsTable } from "@/components/dashboard/StockHoldingsTable";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

export default async function Home() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <InfoCardGrid />
      <Body />
      <StockHoldingsTable />
      <TransactionsTable />
    </>
  );
}