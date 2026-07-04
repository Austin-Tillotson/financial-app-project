type NavMenuProps = {
  direction?: "row" | "column";
};

const navigationItems = [
  "Overview",
  "Accounts",
  "Transactions",
  "Investments",
  "Settings",
];

export function NavMenu({ direction = "row" }: NavMenuProps) {
  const listClassName =
    direction === "row"
      ? "flex flex-wrap gap-4 text-sm text-slate-600"
      : "grid gap-3 text-sm text-slate-600";

  return (
    <ul className={listClassName}>
      {navigationItems.map((item) => (
        <li key={item}>
          <a className="hover:text-slate-950" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}