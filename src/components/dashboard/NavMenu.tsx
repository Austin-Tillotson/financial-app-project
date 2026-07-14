"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faChartLine,
  faChartPie,
  faFileLines,
  faGear,
  faReceipt,
  faScaleBalanced,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type NavMenuProps = {
  direction?: "row" | "column";
};

type NavigationItem = {
  label: string;
  href: string;
  icon: IconDefinition;
};

type NavigationSection = {
  title: string;
  items: NavigationItem[];
};

const navigationSections: NavigationSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/", icon: faChartPie },
      { label: "Accounts", href: "/accounts", icon: faWallet },
      { label: "Budgets", href: "/budgets", icon: faScaleBalanced },
    ],
  },
  {
    title: "Activity",
    items: [
      { label: "Transactions", href: "/transactions", icon: faReceipt },
      { label: "Investments", href: "/investments", icon: faChartLine },
      { label: "Goals", href: "/goals", icon: faBullseye },
      { label: "Reports", href: "/reports", icon: faFileLines },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "/settings", icon: faGear },
      { label: "Profile", href: "/profile", icon: faUser },
    ],
  },
];

const navigationItems = navigationSections.flatMap((section) => section.items);

function NavItem({ item }: { item: NavigationItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      className={
        isActive
          ? "flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 font-medium text-violet-700"
          : "flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 hover:bg-violet-50 hover:text-violet-700"
      }
      href={item.href}
    >
      <FontAwesomeIcon className="h-4 w-4" icon={item.icon} />
      <span>{item.label}</span>
    </Link>
  );
}

export function NavMenu({ direction = "row" }: NavMenuProps) {
  if (direction === "row") {
    return (
      <ul className="flex flex-wrap gap-4 text-sm">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid gap-6 text-sm">
      {navigationSections.map((section, index) => (
        <section
          className={index === 0 ? "" : "border-t border-slate-200 pt-3"}
          key={section.title}
        >
          <h2 className="mb-4 text-xs font-semibold uppercase text-slate-400">
            {section.title}
          </h2>

          <ul className="grid gap-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <NavItem item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}