export default async function BudgetsPage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="hidden gap-2 lg:grid">
      <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">
            Budgets
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            This is the budgets page.
          </p>
        </div>
      </div>
    </section>
  );
}