export default async function TransactionsPage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section>
      <h2 className="dashboard-card-header">Transactions</h2>
      <p>This is the transactions page.</p>
    </section>
  );
}