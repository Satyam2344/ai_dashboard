import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Download,
  Quote,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, PageHeader, SectionTitle } from "../Primitives";
import { StatCard } from "../StatCard";
import { BarsCompare, MultiLine, TrendArea } from "../Charts";

const summary = [
  { label: "Revenue (MTD)", value: "₹4.82 Cr", previous: "₹4.41 Cr", deltaPct: 9.3 },
  { label: "Revenue YTD", value: "₹38.7 Cr", previous: "₹34.2 Cr", deltaPct: 13.1, highlight: true },
  { label: "Gross Profit", value: "₹1.94 Cr", previous: "₹1.78 Cr", deltaPct: 9.0 },
  { label: "GP Margin", value: "40.2%", previous: "40.4%", deltaPct: -0.2 },
  { label: "EBITDA", value: "₹1.12 Cr", previous: "₹0.96 Cr", deltaPct: 16.6 },
  { label: "EBITDA Margin", value: "23.2%", previous: "21.8%", deltaPct: 1.4 },
  { label: "Net Profit", value: "₹78.4 L", previous: "₹64.1 L", deltaPct: 22.3, highlight: true },
  { label: "Net Margin", value: "16.3%", previous: "14.5%", deltaPct: 1.8 },
  { label: "Cash & Bank", value: "₹3.21 Cr", previous: "₹2.94 Cr", deltaPct: 9.1 },
  { label: "Net Working Capital", value: "₹6.84 Cr", previous: "₹6.52 Cr", deltaPct: 4.9 },
  { label: "Receivables", value: "₹5.12 Cr", previous: "₹4.89 Cr", deltaPct: 4.7, invertGood: true },
  { label: "Payables", value: "₹2.18 Cr", previous: "₹2.34 Cr", deltaPct: -6.8 },
  { label: "Current Ratio", value: "2.14", previous: "2.08", deltaPct: 2.9 },
  { label: "Quick Ratio", value: "1.62", previous: "1.55", deltaPct: 4.5 },
  { label: "Debt-Equity", value: "0.42", previous: "0.46", deltaPct: -8.7, invertGood: true },
  { label: "Cash Cycle (days)", value: "38", previous: "44", deltaPct: -13.6, invertGood: true },
];

const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const trend = months.map((m, i) => ({
  name: m,
  revenue: 280 + Math.round(Math.sin(i / 1.5) * 60 + i * 18),
  gp: 110 + Math.round(Math.sin(i / 1.8) * 22 + i * 7),
  ebitda: 60 + Math.round(Math.sin(i / 2) * 14 + i * 5),
  net: 35 + Math.round(Math.sin(i / 2.4) * 10 + i * 3.5),
}));

const cashTrend = months.map((m, i) => ({ name: m, cash: 180 + i * 12 + Math.round(Math.sin(i) * 25) }));

const drVsCr = months.slice(-8).map((m, i) => ({
  name: m,
  Debtors: 380 + i * 12 + Math.round(Math.sin(i) * 30),
  Creditors: 210 + Math.round(Math.cos(i) * 25),
}));

const budgetVsActual = months.slice(-6).map((m, i) => ({
  name: m,
  Budget: 420 + i * 8,
  Actual: 410 + i * 10 + Math.round(Math.sin(i) * 25),
}));

const snapshot = [
  ["Total Customers", "1,284"],
  ["Active Customers", "612"],
  ["Total Vendors", "418"],
  ["Active Vendors", "207"],
  ["Invoices Raised (MTD)", "342"],
  ["Bills Booked (MTD)", "186"],
  ["Overdue Customer Inv.", "47"],
  ["Overdue Vendor Bills", "12"],
  ["Bank Accounts", "8"],
  ["Pending Recons", "3"],
  ["Pending Compliances", "2"],
  ["Open Action Points", "9"],
] as const;

const alerts = [
  { type: "danger", text: "₹38.4 L receivables overdue beyond 90 days", meta: "12 customers" },
  { type: "warn", text: "Vendor payments of ₹64.2 L due in next 15 days", meta: "8 vendors" },
  { type: "warn", text: "Cash balance below ₹3 Cr threshold projected by Jan 28", meta: "Forecast" },
  { type: "danger", text: "Marketing expense overshoot vs budget", meta: "+18.4%" },
  { type: "info", text: "Top customer concentration > 22% of revenue", meta: "Aurora Ltd." },
  { type: "warn", text: "GSTR-3B filing due in 4 days", meta: "Compliance" },
  { type: "info", text: "Bank reconciliation pending — HDFC Current", meta: "₹4.8 L" },
] as const;

export function ExecutiveOverview() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        title="Executive Overview"
        eyebrow="C-Suite · AI Synthesized"
        subtitle="A complete financial snapshot of Meridian Industries — performance, liquidity, working capital and key risks at a glance."
        actions={
          <>
            <Button variant="outline" className="h-9"><Download className="size-4 mr-2" /> MIS Pack</Button>
            <Button className="h-9 bg-gradient-gold text-black hover:opacity-90 shadow-gold">
              View P&L <ArrowUpRight className="size-4 ml-1" />
            </Button>
          </>
        }
      />

      {/* AI synthesis strip */}
      <Panel className="relative overflow-hidden bg-gradient-dark text-white border-transparent">
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-gradient-gold opacity-15 blur-md pointer-events-none" />
        <div className="relative flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl glass-gold flex items-center justify-center text-gold-soft shrink-0">
              <Quote className="size-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-soft mb-0.5">AI Executive Briefing · 2 min ago</div>
              <p className="text-sm text-white/85 max-w-3xl leading-relaxed">
                <span className="text-gold-soft font-medium">Net profit up 22.3% YoY</span> — driven by export momentum and improved cash cycle. Watch: marketing overshoot (+18.4%) and 90+ day receivables (₹38.4 L). Recommended action: defer ₹40 L capex; initiate collection drive on top 12 accounts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 min-w-[260px]">
            <div className="glass-gold rounded-lg p-2.5 text-center">
              <div className="text-[9px] uppercase tracking-wider text-gold-soft">Health</div>
              <div className="font-display text-lg text-white">A+</div>
            </div>
            <div className="glass-gold rounded-lg p-2.5 text-center">
              <div className="text-[9px] uppercase tracking-wider text-gold-soft">Risk</div>
              <div className="font-display text-lg text-white">Low</div>
            </div>
            <div className="glass-gold rounded-lg p-2.5 text-center">
              <div className="text-[9px] uppercase tracking-wider text-gold-soft">Trend</div>
              <div className="font-display text-lg text-emerald-300">↗ 13%</div>
            </div>
          </div>
        </div>
      </Panel>

      {/* Summary cards */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {summary.map((s, i) => (
            <div className=" animate-fade-in">
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* Charts grid */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <SectionTitle
            title="Profitability Trend"
            subtitle="Revenue, gross profit, EBITDA & net profit — last 12 months (in ₹ L)"
            action={
              <div className="flex gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-[#a6905f]" /> Revenue</span>
                <span className="flex items-center gap-1 ml-2"><span className="size-2 rounded-full bg-foreground" /> GP</span>
                <span className="flex items-center gap-1 ml-2"><span className="size-2 rounded-full bg-success" /> EBITDA</span>
                <span className="flex items-center gap-1 ml-2"><span className="size-2 rounded-full bg-warning" /> Net</span>
              </div>
            }
          />
          <MultiLine
            data={trend}
            series={[
              { key: "revenue", color: "#a6905f", label: "Revenue" },
              { key: "gp", color: "#1a1a1a", label: "GP" },
              { key: "ebitda", color: "oklch(0.55 0.13 150)", label: "EBITDA" },
              { key: "net", color: "oklch(0.75 0.15 70)", label: "Net" },
            ]}
            height={300}
          />
        </Panel>

        <Panel>
          <SectionTitle title="Cash Balance" subtitle="Closing cash & bank, last 12 months" />
          <TrendArea data={cashTrend} dataKey="cash" height={300} />
        </Panel>

        <Panel>
          <SectionTitle title="Debtors vs Creditors" subtitle="Outstanding balance trend" />
          <BarsCompare
            data={drVsCr}
            series={[
              { key: "Debtors", color: "#a6905f" },
              { key: "Creditors", color: "#1a1a1a" },
            ] as any}
            height={260}
          />
        </Panel>

        <Panel className="lg:col-span-2">
          <SectionTitle
            title="Budget vs Actual"
            subtitle="Revenue performance against budget — last 6 months"
          />
          <BarsCompare
            data={budgetVsActual}
            series={[
              { key: "Budget", color: "#c4b07a" },
              { key: "Actual", color: "#1a1a1a" },
            ] as any}
            height={260}
          />
        </Panel>
      </section>

      {/* Snapshot + Alerts */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <SectionTitle title="Business Snapshot" subtitle="Operational pulse for the current period" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {snapshot.map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-border/70 bg-secondary/40 px-3 py-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="font-display text-xl mt-1">{value}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionTitle title="Executive Alerts" subtitle="Items needing immediate attention" />
          <ul className="space-y-2.5">
            {alerts.map((a, i) => (
              <li
                key={i}
                className="flex gap-3 items-start rounded-lg border border-border/70 bg-secondary/40 p-3"
              >
                <div
                  className={`mt-0.5 size-7 rounded-md flex items-center justify-center shrink-0 ${
                    a.type === "danger"
                      ? "bg-destructive/10 text-destructive"
                      : a.type === "warn"
                      ? "bg-warning/15 text-warning-foreground"
                      : "bg-gold/15 text-gold"
                  }`}
                >
                  {a.type === "danger" ? (
                    <AlertTriangle className="size-4" />
                  ) : a.type === "warn" ? (
                    <Clock className="size-4" />
                  ) : (
                    <CheckCircle2 className="size-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-sm leading-snug">{a.text}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{a.meta}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      {/* Management commentary */}
      <section>
        <Panel className="bg-gradient-dark text-white border-transparent relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-gradient-gold pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-md bg-gradient-gold flex items-center justify-center text-black">
                <Quote className="size-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">
                  Management Commentary
                </div>
                <div className="font-display text-xl text-white">October 2025 Performance Review</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed text-white/80">
              <div>
                <div className="flex items-center gap-2 text-success mb-2 font-medium">
                  <TrendingUp className="size-4" /> Key Positive Movements
                </div>
                <ul className="list-disc list-inside space-y-1.5 marker:text-gold">
                  <li>Revenue up 9.3% MoM, driven by export orders from APAC region.</li>
                  <li>Net profit margin expanded to 16.3%, highest in the last 6 quarters.</li>
                  <li>Cash conversion cycle improved by 6 days through faster collections.</li>
                  <li>Debt-equity ratio improved to 0.42, reflecting prudent capital structure.</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-destructive mb-2 font-medium">
                  <TrendingDown className="size-4" /> Areas of Concern
                </div>
                <ul className="list-disc list-inside space-y-1.5 marker:text-gold">
                  <li>Marketing spend is 18.4% above budget; recommend review of Q3 campaigns.</li>
                  <li>Top 5 customers contribute 47% of revenue — concentration risk rising.</li>
                  <li>Receivables ageing &gt; 90 days has grown to ₹38.4 L; collections plan required.</li>
                  <li>GSTR-3B filing due in 4 days; ensure ITC reconciliation is closed.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-soft mb-2">
                Recommendation
              </div>
              <p className="text-sm text-white/90 max-w-4xl">
                Maintain liquidity headroom by deferring discretionary capex of ₹40 L to Q1 FY26.
                Initiate focused collection drive on top 12 overdue accounts and renegotiate credit
                terms with two largest customers to reduce concentration impact.
              </p>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
