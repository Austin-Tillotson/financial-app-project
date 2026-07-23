import Image from "next/image";
import { NavMenu } from "./NavMenu";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen border-r border-slate-200 bg-white p-5 lg:block">
      <div className="sticky top-5 flex min-h-[calc(100vh-2.5rem)] flex-col">
        <div className="flex items-center gap-3">
          <Image
            src="/balancepoint-mark.svg"
            alt="BalancePoint"
            width={36}
            height={36}
          />

          <div>
            <p className="text-sm text-slate-500">Financial Dashboard</p>
            <h1 className="text-xl font-semibold text-violet-700">
              BalancePoint
            </h1>
          </div>
        </div>

        <nav className="mt-8" aria-label="Dashboard navigation">
          <NavMenu direction="column" />
        </nav>

        <button
          className="mt-auto w-fit rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
          type="button"
        >
          Export Report
        </button>
      </div>
    </aside>
  );
}