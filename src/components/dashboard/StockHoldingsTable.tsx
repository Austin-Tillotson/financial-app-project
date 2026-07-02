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
        <h2 className="dashboard-table-header">Stock Holdings</h2>

        <table className="dashboard-table">
          <thead>
            <tr className="dashboard-table-head-row">
              <th className="dashboard-table-header-cell">Ticker</th>
              <th className="dashboard-table-header-cell">Company</th>
              <th className="dashboard-table-header-cell">Shares</th>
              <th className="dashboard-table-header-cell">Average Cost</th>
              <th className="dashboard-table-header-cell">Market Value</th>
              <th className="dashboard-table-header-cell">Day Change</th>
            </tr>
          </thead>

          <tbody>
            {stockHoldings.map((stock) => (
              <tr className="dashboard-table-row" key={stock.ticker}>
                <td className="dashboard-table-cell">{stock.ticker}</td>
                <td className="dashboard-table-cell">{stock.company}</td>
                <td className="dashboard-table-cell">{stock.shares}</td>
                <td className="dashboard-table-cell">{stock.averageCost}</td>
                <td className="dashboard-table-cell">{stock.marketValue}</td>
                <td className={trendStyles[stock.trend]}>
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