"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavMenuProps = {
  direction?: "row" | "column";
};

const navigationItems = [
  { label: "Overview", href: "/" },
  { label: "Accounts", href: "/accounts" },
  { label: "Transactions", href: "/transactions" },
  { label: "Investments", href: "/investments" },
  { label: "Settings", href: "/settings" },
];

export function NavMenu({ direction = "row" }: NavMenuProps) {
  const pathname = usePathname();

  const listClassName =
    direction === "row"
      ? "flex flex-wrap gap-4 text-sm text-slate-600"
      : "grid gap-3 text-sm text-slate-600";

  return (
    <ul className={listClassName}>
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              className={
                isActive
                  ? "font-medium text-slate-950"
                  : "hover:text-slate-950"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}