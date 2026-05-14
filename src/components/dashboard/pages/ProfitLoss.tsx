import { Panel, PageHeader, SectionTitle } from "../Primitives";
import { StatCard } from "../StatCard";
import { BarsCompare, MultiLine } from "../Charts";

const cards = [
  { label: "Revenue", value: "₹4.82 Cr", deltaPct: 9.3, highlight: true },
  { label: "COGS / Direct Cost", value: "₹2.88 Cr", deltaPct: 7.4 },
  { label: "Gross Profit", value: "₹1.94 Cr", deltaPct: 11.5 },
  { label: "GP Margin", value: "40.2%", deltaPct: -0.2 },
  { label: "Employee Cost", value: "₹52.3 L", deltaPct: 4.1, invertGood: true },
  { label: "Admin Expenses", value: "₹18.7 L", deltaPct: -2.4, invertGood: true },
  { label: "Marketing", value: "₹11.2 L", deltaPct: 18.4, invertGood: true },
  { label: "EBITDA", value: "₹1.12 Cr", deltaPct: 16.6, highlight: true },
  { label: "Depreciation", value: "₹14.8 L", deltaPct: 1.2 },
  { label: "Interest", value: "₹8.6 L", deltaPct: -4.5 },
  { label: "PBT", value: "₹88.6 L", deltaPct: 22.0 },
  { label: "Net Profit", value: "₹78.4 L", deltaPct: 22.3 },
];

const months = ["May","Jun","Jul","Aug","Sep","Oct"];
const series = months.map((m,i)=>({
  name: m,
  Revenue: 420 + i*15 + Math.round(Math.sin(i)*20),
  GP: 168 + i*7,
  EBITDA: 85 + i*5 + Math.round(Math.cos(i)*8),
}));

const expBreakdown = [
  { name: "Salaries", value: 523 },
  { name: "Rent", value: 84 },
  { name: "Power", value: 62 },
  { name: "Marketing", value: 112 },
  { name: "Travel", value: 38 },
  { name: "IT", value: 47 },
  { name: "Prof. Fees", value: 31 },
  { name: "Insurance", value: 18 },
];

export function ProfitLoss() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Profit & Loss Analysis"
        subtitle="Revenue, costs, margins and bottom-line analysis with variance against budget and prior period."
      />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map(c => <StatCard key={c.label} {...c} />)}
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <Panel>
          <SectionTitle title="Revenue, GP & EBITDA" subtitle="Monthly trend (₹ L)" />
          <MultiLine
            data={series}
            series={[
              { key: "Revenue", color: "#a6905f", label: "Revenue" },
              { key: "GP", color: "#1a1a1a", label: "GP" },
              { key: "EBITDA", color: "oklch(0.55 0.13 150)", label: "EBITDA" },
            ]}
            height={280}
          />
        </Panel>
        <Panel>
          <SectionTitle title="Expense Breakdown" subtitle="Current month — major heads (₹ L)" />
          <BarsCompare
            data={expBreakdown.map(e => ({ name: e.name, Amount: e.value }))}
            series={[{ key: "Amount", color: "#a6905f" }] as any}
            height={280}
          />
        </Panel>
      </section>
    </div>
  );
}
