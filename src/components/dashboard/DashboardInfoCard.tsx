"use client";

import { useState } from "react";
import type { DashboardInfoCardData } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";
import { InfoCard } from "./InfoCard";
import { InfoCardChangeTable } from "./InfoCardChangeTable";
import { InfoCardSparkline } from "./InfoCardSparkline";
import { StockPortfolioBack } from "./StockPortfolioBack";

type DashboardInfoCardProps = DashboardInfoCardData;

export function DashboardInfoCard({
  label,
  value,
  change,
  trend,
  history,
}: DashboardInfoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className="h-full cursor-pointer transition-transform duration-200 ease-out perspective-[1000px] hover:scale-[1.1] hover:rotate-3"
      role="button"
      tabIndex={0}
      onClick={() => setIsFlipped((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          setIsFlipped((current) => !current);
        }
      }}
    >
      <div
        className={`relative min-h-46 transition-transform duration-500 transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 backface-hidden">
          <InfoCard label={label} value={value} change={change} trend={trend}>
            <InfoCardSparkline data={history} trend={trend} />
          </InfoCard>
        </div>

        <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
          <Card className="h-full">
            {label === "Stock Portfolio" ? (
              <StockPortfolioBack />
            ) : (
              <InfoCardChangeTable history={history} />
            )}
          </Card>
        </div>
      </div>
    </article>
  );
}