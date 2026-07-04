export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-950">
      <section className="grid gap-3 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
        <p className="text-sm text-slate-600">Loading dashboard...</p>
      </section>
    </main>
  );
}