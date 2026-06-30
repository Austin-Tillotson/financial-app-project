import { Card } from "@/components/ui/Card";

export function Body() {
  return (
    <section className="grid md:grid-cols-2">
      <Card>
        <h2>Portfolio Performance</h2>
        <div>
          todo chart
        </div>
      </Card>

      <Card>
        <h2>Asset Allocation</h2>
        <div>
          todo chart
        </div>
      </Card>
    </section>
  );
}