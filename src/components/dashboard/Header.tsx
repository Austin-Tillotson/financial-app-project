const navigationItems = [
  "Overview",
  "Accounts",
  "Transactions",
  "Investments",
  "Settings",
];

export function Header() {
  return (
    <header className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Financial Dashboard
        </p>
        <h1 className="text-2xl font-semibold text-slate-950">
          Personal Finance Overview
        </h1>
      </div>

      <nav aria-label="Dashboard navigation">
        <ul className="flex flex-wrap gap-4 text-slate-500">
          {navigationItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex md:justify-end">
        <button 
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
          type="button"
        >
          Export Report
        </button>
      </div>
    </header>
  );
}