export default async function GoalsPage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section>
      <h2 className="dashboard-card-header">Goals</h2>
      <p>This is the goals page.</p>
    </section>
  );
}