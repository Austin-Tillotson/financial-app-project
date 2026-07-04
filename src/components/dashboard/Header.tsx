"use client";

import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="rounded-lg border border-slate-200 bg-white p-4 lg:hidden">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm text-slate-500">Financial Dashboard</p>
          <h1 className="text-2xl font-semibold text-slate-950">
            Personal Finance Overview
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            className="flex w-9 items-center justify-center md:hidden"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <FontAwesomeIcon
              className="text-lg text-slate-600 hover:text-slate-950"
              icon={isMenuOpen ? faXmark : faBars}
            />
          </button>

          <button
            className="w-fit rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
            type="button"
          >
            Export Report
          </button>
        </div>
      </div>

      <nav className="mt-4 hidden md:block" aria-label="Dashboard navigation">
        <NavMenu />
      </nav>

      {isMenuOpen && (
        <nav className="mt-4 md:hidden" aria-label="Mobile dashboard navigation">
          <NavMenu direction="column" />
        </nav>
      )}
    </header>
  );
}