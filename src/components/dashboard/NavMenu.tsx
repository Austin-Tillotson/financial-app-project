"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartPie,
  faGear,
  faReceipt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavMenuProps = {
  direction?: "row" | "column";
};

const navigationItems = [
  { label: "Overview", href: "/", icon: faChartPie },
  { label: "Accounts", href: "/accounts", icon: faWallet },
  { label: "Transactions", href: "/transactions", icon: faReceipt },
  { label: "Investments", href: "/investments", icon: faChartLine },
  { label: "Settings", href: "/settings", icon: faGear },
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
                  ? "flex items-center gap-2 font-medium text-slate-950"
                  : "flex items-center gap-2 hover:text-slate-950"
              }
              href={item.href}
            >
              <FontAwesomeIcon className="h-4 w-4" icon={item.icon} />
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}