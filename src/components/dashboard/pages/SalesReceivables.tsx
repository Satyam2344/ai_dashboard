import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, PageHeader, SectionTitle } from "../Primitives";
import { StatCard } from "../StatCard";
import { BarsCompare, DonutChart, TrendArea } from "../Charts";

const cards = [
  { label: "Sales (MTD)", value: "₹4.82 Cr", previous: "₹4.41 Cr", deltaPct: 9.3, highlight: true },
  { label: "Sales YTD", value: "₹38.7 Cr", previous: "₹34.2 Cr", deltaPct: 13.1 },
  { label: "Net Sales", value: "₹4.71 Cr", previous: "₹4.32 Cr", deltaPct: 9.0 },
  { label: "GST Output", value: "₹86.7 L", previous: "₹79.4 L", deltaPct: 9.2 },
  { label: "Domestic Sales", value: "₹3.62 Cr", previous: "₹3.41 Cr", deltaPct: 6.1 },
  { label: "Export Sales", value: "₹1.20 Cr", previous: "₹0.91 Cr", deltaPct: 31.8 },
  { label: "Credit Sales", value: "₹3.94 Cr", previous: "₹3.62 Cr", deltaPct: 8.8 },
  { label: "Cash Sales", value: "₹0.88 Cr", previous: "₹0.79 Cr", deltaPct: 11.4 },
];

const months = ["May","Jun","Jul","Aug","Sep","Oct"];
const salesTrend = months.map((m,i)=>({name:m,sales: 380 + i*18 + Math.round(Math.sin(i)*30)}));
const productMix = [
  { name: "Industrial Equipment", value: 38, color: "#a6905f" },
  { name: "Spare Parts", value: 24, color: "#c4b07a" },
  { name: "Consumables", value: 18, color: "#1a1a1a" },
  { name: "Service Contracts", value: 12, color: "#444" },
  { name: "Others", value: 8, color: "#888" },
];

const branchMix = months.map((m,i)=>({
  name: m,
  Mumbai: 180 + i*4,
  Delhi: 130 + Math.round(Math.sin(i)*15),
  Bengaluru: 95 + i*3,
}));

const debtors = [
  { name: "Aurora Industries Ltd.", outstanding: "₹68.4 L", overdue: "₹22.1 L", oldest: "12 Jul 25", invoices: 14, delay: "42 days", status: "Follow-up" },
  { name: "Helix Fabricators", outstanding: "₹42.7 L", overdue: "₹18.6 L", oldest: "04 Aug 25", invoices: 9, delay: "31 days", status: "Promised" },
  { name: "Stellar Engg. Pvt Ltd", outstanding: "₹38.2 L", overdue: "₹12.4 L", oldest: "18 Aug 25", invoices: 7, delay: "24 days", status: "Disputed" },
  { name: "Vector Auto Components", outstanding: "₹31.9 L", overdue: "₹9.8 L", oldest: "26 Aug 25", invoices: 6, delay: "19 days", status: "Follow-up" },
  { name: "Nimbus Power Systems", outstanding: "₹28.5 L", overdue: "₹7.2 L", oldest: "02 Sep 25", invoices: 5, delay: "15 days", status: "On track" },
  { name: "Kinetic Mechatronics", outstanding: "₹24.1 L", overdue: "₹4.8 L", oldest: "11 Sep 25", invoices: 4, delay: "11 days", status: "On track" },
  { name: "Quanta Robotics", outstanding: "₹19.8 L", overdue: "₹2.1 L", oldest: "20 Sep 25", invoices: 3, delay: "8 days", status: "On track" },
  { name: "Polaris Heavy Industries", outstanding: "₹17.4 L", overdue: "—", oldest: "28 Sep 25", invoices: 2, delay: "—", status: "Current" },
];

const ageing = [
  { bucket: "0–30 days", amt: "₹2.84 Cr", pct: 55.5, customers: 142, invoices: 318, color: "bg-success" },
  { bucket: "31–60 days", amt: "₹1.12 Cr", pct: 21.9, customers: 64, invoices: 138, color: "bg-gold" },
  { bucket: "61–90 days", amt: "₹68.4 L", pct: 13.4, customers: 38, invoices: 81, color: "bg-warning" },
  { bucket: "91–120 days", amt: "₹24.6 L", pct: 4.8, customers: 18, invoices: 32, color: "bg-orange-500" },
  { bucket: "121–180 days", amt: "₹14.8 L", pct: 2.9, customers: 11, invoices: 19, color: "bg-destructive/80" },
  { bucket: "180+ days", amt: "₹7.4 L", pct: 1.5, customers: 6, invoices: 9, color: "bg-destructive" },
];

export function SalesReceivables() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Sales & Receivables"
        subtitle="Complete visibility into sales performance, customer-wise debtors, ageing buckets and collection efficiency."
        actions={
          <>
            <Button variant="outline" className="h-9"><Download className="size-4 mr-2" /> Ageing Report</Button>
            <Button className="h-9 bg-gradient-gold text-black hover:opacity-90 shadow-gold">
              Explore All Debtors <ArrowUpRight className="size-4 ml-1" />
            </Button>
          </>
        }
      />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => <StatCard key={c.label} {...c} />)}
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <SectionTitle title="Sales Trend" subtitle="Monthly sales — last 6 months (₹ L)" />
          <TrendArea data={salesTrend} dataKey="sales" height={280} />
        </Panel>
        <Panel>
          <SectionTitle title="Product Mix" subtitle="Revenue share by category" />
          <DonutChart data={productMix} height={220} />
          <div className="mt-3 space-y-1.5">
            {productMix.map(p => (
              <div key={p.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-sm" style={{ background: p.color }} />
                  {p.name}
                </span>
                <span className="font-medium">{p.value}%</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="lg:col-span-3">
          <SectionTitle title="Branch-wise Sales" subtitle="Mumbai, Delhi & Bengaluru — last 6 months (₹ L)" />
          <BarsCompare
            data={branchMix}
            series={[
              { key: "Mumbai", color: "#a6905f" },
              { key: "Delhi", color: "#1a1a1a" },
              { key: "Bengaluru", color: "#c4b07a" },
            ] as any}
            height={260}
          />
        </Panel>
      </section>

      {/* Top debtors table */}
      <Panel>
        <SectionTitle
          title="Top 10 Outstanding Debtors"
          subtitle="Click any row to drill into invoice-level detail"
          action={<Button variant="ghost" size="sm">Explore All <ExternalLink className="size-3.5 ml-1" /></Button>}
        />
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-3 py-3 font-medium text-right">Outstanding</th>
                <th className="px-3 py-3 font-medium text-right">Overdue</th>
                <th className="px-3 py-3 font-medium">Oldest Inv.</th>
                <th className="px-3 py-3 font-medium text-center">Invoices</th>
                <th className="px-3 py-3 font-medium">Avg. Delay</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {debtors.map((d) => (
                <tr key={d.name} className="border-b border-border/60 hover:bg-secondary/40 transition-colors cursor-pointer">
                  <td className="px-5 py-3 font-medium">{d.name}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{d.outstanding}</td>
                  <td className="px-3 py-3 text-right tabular-nums text-destructive">{d.overdue}</td>
                  <td className="px-3 py-3 text-muted-foreground">{d.oldest}</td>
                  <td className="px-3 py-3 text-center">{d.invoices}</td>
                  <td className="px-3 py-3 text-muted-foreground">{d.delay}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`text-[11px] px-2 py-1 rounded-md font-medium ${
                        d.status === "Disputed"
                          ? "bg-destructive/10 text-destructive"
                          : d.status === "Follow-up"
                          ? "bg-warning/15 text-foreground"
                          : d.status === "Promised"
                          ? "bg-gold/15 text-foreground"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Ageing */}
      <Panel>
        <SectionTitle title="Debtor Ageing" subtitle="Outstanding split across ageing buckets" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ageing.map((b) => (
            <div key={b.bucket} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{b.bucket}</div>
                <div className={`size-2 rounded-full ${b.color}`} />
              </div>
              <div className="font-display text-2xl mt-1">{b.amt}</div>
              <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className={`h-full ${b.color}`} style={{ width: `${b.pct}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                <span>{b.pct}% of total</span>
                <span>{b.customers} customers · {b.invoices} inv.</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
