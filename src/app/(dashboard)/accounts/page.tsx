export default async function AccountsPage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section>
      <h2 className="dashboard-card-header">Accounts</h2>
      <p>This is the accounts page.</p>
    </section>
  );
}