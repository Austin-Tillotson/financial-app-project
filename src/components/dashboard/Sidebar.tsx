import { NavMenu } from "./NavMenu";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen border-r border-slate-200 bg-white p-5 lg:block">
      <div className="sticky top-5 flex min-h-[calc(100vh-2.5rem)] flex-col">
        <div>
          <p className="text-sm text-slate-500">Financial Dashboard</p>
          <h1 className="text-xl font-semibold text-slate-950">
            Personal Finance
          </h1>
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