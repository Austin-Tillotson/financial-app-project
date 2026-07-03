import { stockHoldings } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";

const trendStyles = {
  positive: "text-green-500",
  negative: "text-red-500",
  neutral: "text-yellow-500",
};

export function StockHoldingsTable() {
  return (
    <Card className="overflow-x-auto">
      <section>
        <h2 className="dashboard-card-header">Stock Holdings</h2>

        <table className="dashboard-table">
          <colgroup>
            <col className="w-25" />
            <col className="w-80" />
            <col className="w-30" />
            <col className="w-40" />
            <col className="w-40" />
            <col className="w-35" />
          </colgroup>
          <thead>
            <tr className="dashboard-table-head-row">
              <th className="dashboard-table-header-cell">Ticker</th>
              <th className="dashboard-table-header-cell">Company</th>
              <th className="dashboard-table-header-cell text-right">Shares</th>
              <th className="dashboard-table-header-cell text-right">Average Cost</th>
              <th className="dashboard-table-header-cell text-right">Market Value</th>
              <th className="dashboard-table-header-cell text-right">Day Change</th>
            </tr>
          </thead>

          <tbody>
            {stockHoldings.map((stock) => (
              <tr className="dashboard-table-row" key={stock.ticker}>
                <td className="dashboard-table-cell font-medium">{stock.ticker}</td>
                <td className="dashboard-table-cell">{stock.company}</td>
                <td className="dashboard-table-cell text-right">{stock.shares}</td>
                <td className="dashboard-table-cell text-right">{stock.averageCost}</td>
                <td className="dashboard-table-cell text-right">{stock.marketValue}</td>
                <td className={`dashboard-table-cell text-right ${trendStyles[stock.trend]}`}>
                  {stock.dayChange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Card>
  );
}