import { stockHoldings } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";

const trendStyles = {
  positive: "text-green-500",
  negative: "text-red-500",
  neutral: "text-yellow-500",
};

export function StockHoldingsTable() {
  return (
    <Card>
      <section>
        <h2>Stock Holdings</h2>

        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company</th>
              <th>Shares</th>
              <th>Average Cost</th>
              <th>Market Value</th>
              <th>Day Change</th>
            </tr>
          </thead>

          <tbody>
            {stockHoldings.map((stock) => (
              <tr key={stock.ticker}>
                <td>{stock.ticker}</td>
                <td>{stock.company}</td>
                <td>{stock.shares}</td>
                <td>{stock.averageCost}</td>
                <td>{stock.marketValue}</td>
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