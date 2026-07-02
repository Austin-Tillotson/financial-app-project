import { transactions } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";

export function TransactionsTable() {
  return (
    <Card className="overflow-x-auto">
      <section>
        <h2 className="dashboard-table-header">Recent Transactions</h2>

        <table className="dashboard-table">
          <thead>
            <tr className="dashboard-table-head-row">
              <th className="dashboard-table-header-cell">Date</th>
              <th className="dashboard-table-header-cell">Merchant</th>
              <th className="dashboard-table-header-cell">Category</th>
              <th className="dashboard-table-header-cell">Amount</th>
              <th className="dashboard-table-header-cell">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr 
                className="dashboard-table-row"
                key={`${transaction.date}-${transaction.merchant}`}
              >
                <td className="dashboard-table-cell">{transaction.date}</td>
                <td className="dashboard-table-cell">{transaction.merchant}</td>
                <td className="dashboard-table-cell">{transaction.category}</td>
                <td className="dashboard-table-cell">{transaction.amount}</td>
                <td className="dashboard-table-cell">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Card>
  );
}