import { transactions } from "@/data/dashboard";
import { Card } from "@/components/ui/Card";

export function TransactionsTable() {
  return (
    <Card>
      <section>
        <h2>Recent Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Merchant</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={`${transaction.date}-${transaction.merchant}`}>
                <td>{transaction.date}</td>
                <td>{transaction.merchant}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Card>
  );
}