import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-slate-50 text-slate-950">
      <div className="lg:grid lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <div className="min-w-0 px-5 py-5 md:py-8">
          <div className="mx-auto grid max-w-7xl gap-4">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}