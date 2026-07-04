export default async function InvestmentsPage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section>
      <h2 className="dashboard-card-header">Investments</h2>
      <p>This is the investments page.</p>
    </section>
  );
}