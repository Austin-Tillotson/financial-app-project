import { Header } from "@/components/dashboard/Header";
import { InfoCardGrid } from "@/components/dashboard/InfoCardGrid";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950 px-5 py-5">
      <Header />
      <InfoCardGrid />
    </main>
  );
}