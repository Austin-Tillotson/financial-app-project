import type { InfoCardHistoryPoint } from "@/data/dashboard";

type InfoCardChangeTableProps = {
  history: InfoCardHistoryPoint[];
};

function formatCurrencyChange(value: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  });

  return `${value > 0 ? "+" : ""}${formatter.format(value)}`;
}

export function InfoCardChangeTable({ history }: InfoCardChangeTableProps) {
  const changes = history.slice(1).map((point, index) => {
    const previousPoint = history[index];

    return {
      month: point.month,
      change: point.value - previousPoint.value,
    };
  });

  return (
    <div>
      <p className="border-b border-slate-100 text-sm font-medium text-slate-900">Monthly Change</p>

      <table className="w-full text-sm">
        <tbody>
          {changes.map((point) => (
            <tr className="border-b border-slate-100 last:border-0" key={point.month}>
              <td className="px-3 py-1 text-slate-500">{point.month}</td>
              <td
                className={`px-8 py-1 text-right font-medium ${
                  point.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {formatCurrencyChange(point.change)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}