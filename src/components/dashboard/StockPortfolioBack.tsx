import { stockHoldings } from "@/data/dashboard";

const trendStyles = {
  positive: "text-green-600",
  negative: "text-red-600",
  neutral: "text-yellow-600",
};

export function StockPortfolioBack() {
  return (
    <div>
      <p className="border-b border-slate-100 text-sm font-medium text-slate-900">
        Top Movers
      </p>

      <table className="w-full text-sm">
        <tbody>
          {stockHoldings.map((stock) => (
            <tr
              className="border-b border-slate-100 last:border-0"
              key={stock.ticker}
            >
              <td className="px-3 py-1 font-medium text-slate-700">
                {stock.ticker}
              </td>
              <td
                className={`px-8 py-1 text-right font-medium ${
                  trendStyles[stock.trend]
                }`}
              >
                {stock.dayChange}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}