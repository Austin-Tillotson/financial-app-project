const navigationItems = [
  "Overview",
  "Accounts",
  "Transactions",
  "Investments",
  "Settings",
];

export function Header() {
  return (
    <header className="grid md:grid-cols-3">
      <div>
        <p>Financial Dashboard</p>
        <h1>Personal Finance Overview</h1>
      </div>

      <nav aria-label="Dashboard navigation">
        <ul className="flex gap-4">
          {navigationItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex md:justify-end">
        <button type="button">Export Report</button>
      </div>
    </header>
  );
}