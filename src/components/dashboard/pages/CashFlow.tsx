import { Panel, PageHeader, SectionTitle } from "../Primitives";
import { StatCard } from "../StatCard";
import { TrendArea } from "../Charts";

const cards = [
  { label: "Closing Cash", value: "₹3.21 Cr", deltaPct: 9.1, highlight: true },
  { label: "Operating Cash Flow", value: "₹92.4 L", deltaPct: 14.2 },
  { label: "Investing Outflow", value: "₹28.6 L", deltaPct: 4.5, invertGood: true },
  { label: "Financing Outflow", value: "₹36.8 L", deltaPct: -8.0 },
  { label: "Net Cash Movement", value: "₹27.0 L", deltaPct: 22.0 },
  { label: "Forecast (30d)", value: "₹3.46 Cr", deltaPct: 7.8 },
];

const months = ["May","Jun","Jul","Aug","Sep","Oct","Nov(F)","Dec(F)"];
const cashTrend = months.map((m,i)=>({name: m, cash: 240 + i*12 + Math.round(Math.sin(i)*25)}));

const banks = [
  { bank: "HDFC Current — Mumbai", acc: "•••• 4521", book: "₹1.42 Cr", stmt: "₹1.46 Cr", diff: "₹4.0 L", recon: "12 Oct" },
  { bank: "ICICI Current — Delhi", acc: "•••• 8810", book: "₹68.4 L", stmt: "₹68.4 L", diff: "—", recon: "14 Oct" },
  { bank: "Axis OD — Bengaluru", acc: "•••• 2274", book: "₹52.6 L", stmt: "₹52.6 L", diff: "—", recon: "14 Oct" },
  { bank: "SBI Current — Treasury", acc: "•••• 9032", book: "₹38.4 L", stmt: "₹38.4 L", diff: "—", recon: "13 Oct" },
  { bank: "Kotak FD Sweep", acc: "•••• 1108", book: "₹19.6 L", stmt: "₹19.6 L", diff: "—", recon: "10 Oct" },
];

export function CashFlow() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Cash Flow & Banking"
        subtitle="Movement of cash, bank balances, reconciliations and short-term liquidity forecast."
      />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map(c => <StatCard key={c.label} {...c} />)}
      </section>

      <Panel>
        <SectionTitle title="Cash Trend & Forecast" subtitle="Closing cash balance — actuals + 60-day forecast" />
        <TrendArea data={cashTrend} dataKey="cash" height={300} />
      </Panel>

      <Panel>
        <SectionTitle title="Bank Balances & Reconciliation" subtitle="Live status across all connected accounts" />
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-5 py-3 font-medium">Bank</th>
                <th className="px-3 py-3 font-medium">Account</th>
                <th className="px-3 py-3 font-medium text-right">Book Balance</th>
                <th className="px-3 py-3 font-medium text-right">Statement</th>
                <th className="px-3 py-3 font-medium text-right">Difference</th>
                <th className="px-5 py-3 font-medium">Last Recon.</th>
              </tr>
            </thead>
            <tbody>
              {banks.map(b => (
                <tr key={b.bank} className="border-b border-border/60 hover:bg-secondary/40">
                  <td className="px-5 py-3 font-medium">{b.bank}</td>
                  <td className="px-3 py-3 font-mono text-xs text-muted-foreground">{b.acc}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{b.book}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{b.stmt}</td>
                  <td className={`px-3 py-3 text-right tabular-nums ${b.diff !== "—" ? "text-warning-foreground font-medium" : "text-muted-foreground"}`}>{b.diff}</td>
                  <td className="px-5 py-3 text-muted-foreground">{b.recon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
