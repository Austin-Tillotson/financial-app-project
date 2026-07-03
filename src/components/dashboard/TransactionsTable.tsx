import { transactions } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";

const statusStyles = {
  Completed: "text-green-600",
  Pending: "text-yellow-600",
  Scheduled: "text-blue-600",
};

export function TransactionsTable() {
  return (
    <Card className="overflow-x-auto">
      <section>
        <h2 className="dashboard-card-header">Recent Transactions</h2>

        <table className="dashboard-table">
          <colgroup>
            <col className="w-25" />
            <col className="w-100" />
            <col className="w-62.5" />
            <col className="w-31.25" />
            <col className="w-31.25" />
          </colgroup>
          <thead>
            <tr className="dashboard-table-head-row">
              <th className="dashboard-table-header-cell">Date</th>
              <th className="dashboard-table-header-cell">Merchant</th>
              <th className="dashboard-table-header-cell">Category</th>
              <th className="dashboard-table-header-cell">Status</th>
              <th className="dashboard-table-header-cell text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr 
                className="dashboard-table-row"
                key={`${transaction.date}-${transaction.merchant}`}
              >
                <td className="dashboard-table-cell">{transaction.date}</td>
                <td className="dashboard-table-cell font-medium">{transaction.merchant}</td>
                <td className="dashboard-table-cell">{transaction.category}</td>
                <td className={`dashboard-table-cell ${statusStyles[transaction.status]}`}>
                  {transaction.status}
                </td>
                <td className="dashboard-table-cell text-right">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Card>
  );
}