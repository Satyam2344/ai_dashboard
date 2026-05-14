
import {
  Activity,
  ArrowUpRight,
  Bot,
  Brain,
  Cpu,
  Gauge,
  LineChart as LineIcon,
  Package,
  Radar as RadarIcon,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, PageHeader, SectionTitle } from "../Primitives";
import { StatCard } from "../StatCard";
import {
  BarsCompare,
  DonutChart,
  GoalRadial,
  MultiLine,
  PerformanceRadar,
  TrendArea,
} from "../Charts";
const logo = "/logo.png";

/* ---------- fake data ---------- */
const headline = [
  { label: "Total Revenue", value: "₹38.7 Cr", previous: "₹34.2 Cr", deltaPct: 13.1, highlight: true },
  { label: "Net Profit", value: "₹78.4 L", previous: "₹64.1 L", deltaPct: 22.3, highlight: true },
  { label: "Cash & Bank", value: "₹3.21 Cr", previous: "₹2.94 Cr", deltaPct: 9.1 },
  { label: "Active Clients", value: "612", previous: "548", deltaPct: 11.6 },
];

const months = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];

const revenueTrend = months.map((m, i) => ({
  name: m,
  revenue: 280 + Math.round(Math.sin(i / 1.5) * 60 + i * 18),
}));

const incomeVsExpense = months.slice(-8).map((m, i) => ({
  name: m,
  Income: 420 + i * 14 + Math.round(Math.sin(i) * 30),
  Expense: 310 + i * 9 + Math.round(Math.cos(i) * 25),
}));

const profitability = months.map((m, i) => ({
  name: m,
  GP: 110 + Math.round(Math.sin(i / 1.8) * 22 + i * 7),
  EBITDA: 60 + Math.round(Math.sin(i / 2) * 14 + i * 5),
  Net: 35 + Math.round(Math.sin(i / 2.4) * 10 + i * 3.5),
}));

const revenueMix = [
  { name: "Products", value: 48, color: "#c4b07a" },
  { name: "Services", value: 27, color: "#1a1a1a" },
  { name: "Exports", value: 17, color: "#a6905f" },
  { name: "Others", value: 8, color: "#6b6b6b" },
];

const radarData = [
  { metric: "Liquidity", value: 86, benchmark: 70 },
  { metric: "Profitability", value: 78, benchmark: 65 },
  { metric: "Efficiency", value: 72, benchmark: 68 },
  { metric: "Solvency", value: 81, benchmark: 60 },
  { metric: "Growth", value: 90, benchmark: 72 },
  { metric: "Risk", value: 65, benchmark: 75 },
];

const goalData = [
  { name: "Revenue", value: 88, fill: "#c4b07a" },
  { name: "Margin", value: 72, fill: "#a6905f" },
  { name: "Collection", value: 64, fill: "#1a1a1a" },
];

const aiInsights = [
  { tag: "Opportunity", color: "from-emerald-400/20 to-emerald-400/0", text: "Receivables turnover improved 18% — cash conversion cycle shortened by 6 days.", impact: "+₹42 L" },
  { tag: "Anomaly", color: "from-amber-400/20 to-amber-400/0", text: "Marketing spend in October exceeded forecast by 23% with no proportional pipeline lift.", impact: "−₹8.2 L" },
  { tag: "Forecast", color: "from-sky-400/20 to-sky-400/0", text: "Q4 revenue projected at ₹14.2 Cr (+11% YoY) based on order book and historical seasonality.", impact: "94% conf." },
  { tag: "Action", color: "from-rose-400/20 to-rose-400/0", text: "3 statutory filings due within 7 days. Auto-prepared drafts ready for review.", impact: "3 items" },
];

const liveActivity = [
  { time: "12:42", text: "AI reconciled 184 bank transactions", kind: "ok" },
  { time: "12:31", text: "Invoice #INV-2841 flagged: GSTIN mismatch", kind: "warn" },
  { time: "12:18", text: "Cash flow forecast updated for Nov 2025", kind: "ok" },
  { time: "11:54", text: "New high-value debtor: Orion Tech (+₹18 L)", kind: "ok" },
  { time: "11:30", text: "Predictive model retrained on Q2 data", kind: "ai" },
];

const modules = [
  { icon: TrendingUp, label: "Sales", value: "₹4.82 Cr", note: "MTD revenue" },
  { icon: Wallet, label: "Cash Flow", value: "₹3.21 Cr", note: "Net liquidity" },
  { icon: Users, label: "Customers", value: "1,284", note: "612 active" },
  { icon: Package, label: "Inventory", value: "₹2.14 Cr", note: "stock value" },
];

/* ---------- page ---------- */
export function Overview() {
  return (
    <div className="space-y-8">
      {/* HERO ============================================================ */}
      <div className="relative overflow-hidden rounded-2xl glass-dark text-white glow-gold">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 radial-gold pointer-events-none" />
        {/* orbiting ring */}
        <div className="absolute -right-24 -top-24 size-[420px] rounded-full border border-gold/15 spin-slow pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-gradient-gold shadow-gold" />
        </div>
        <div className="absolute -right-40 -top-40 size-[560px] rounded-full border border-gold/10 spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "26s" }} />

        <div className="relative p-7 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="flex items-center gap-5 max-w-2xl">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-gold blur-xl opacity-50" />
                <div className="relative size-20 rounded-2xl bg-white/95 flex items-center justify-center p-2 shadow-gold float-y">
                  <img src={logo} alt="Consultara Global" className="size-full object-contain" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass-gold text-[10px] uppercase tracking-[0.25em] text-gold-soft mb-2">
                  <Sparkles className="size-3" /> Powered By AI
                  <span className="size-1 rounded-full bg-emerald-400 ml-1 pulse-ring" />
                </div>
                <h1 className="font-display text-3xl lg:text-5xl text-gradient-platinum leading-[1.05]">
                  Consultara Global Dashboard
                </h1>
                <p className="text-sm text-white/65 mt-2">
                  An intelligent control room for your business — predictive analytics, real-time insights, autonomous reconciliation.
                </p>

                {/* AI command bar */}
                <div className="mt-5 flex items-center gap-2 rounded-xl glass-gold pl-3 pr-1.5 py-1.5 max-w-xl">
                  <Bot className="size-4 text-gold-soft" />
                  <input
                    placeholder="Ask AI: ‘Why did margins drop last month?’"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <Button size="sm" className="h-8 bg-gradient-gold text-black hover:opacity-90">
                    <Wand2 className="size-3.5 mr-1" /> Ask
                  </Button>
                </div>
              </div>
            </div>

            {/* right side: live AI tiles */}
            <div className="grid grid-cols-2 gap-3 min-w-[260px]">
              {[
                { icon: Cpu, label: "AI Health", value: "98.4%", sub: "models online" },
                { icon: Activity, label: "Live Sync", value: "2 min", sub: "last refresh" },
                { icon: Brain, label: "Insights", value: "27", sub: "this week" },
                { icon: Gauge, label: "Risk Score", value: "Low", sub: "stable" },
              ].map((t) => {
                const I = t.icon;
                return (
                  <div key={t.label} className="glass-gold rounded-xl p-3">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gold-soft">
                      <I className="size-3" /> {t.label}
                    </div>
                    <div className="font-display text-xl text-white mt-1">{t.value}</div>
                    <div className="text-[10px] text-white/50">{t.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA strip */}
          <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-6 text-xs text-white/55">
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live data feed</span>
              <span className="hidden sm:flex items-center gap-2"><Zap className="size-3 text-gold-soft" /> 184 events / hr</span>
              <span className="hidden md:flex items-center gap-2"><LineIcon className="size-3 text-gold-soft" /> 13 modules synced</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-9 text-white/80 hover:bg-white/5 hover:text-white">
                <RadarIcon className="size-4 mr-1.5" /> Diagnostics
              </Button>
              <Button className="h-10 bg-gradient-gold text-black hover:opacity-90 shadow-gold font-medium">
                Open Executive Dashboard <ArrowUpRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PageHeader
        title="Business Overview"
        subtitle="Every module, every metric — synthesized by AI into a single intelligent view."
      />

      {/* HEADLINE KPIs ==================================================== */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {headline.map((s, i) => (
          <div className=" animate-fade-in">
            <StatCard {...s} />
          </div>
        ))}
      </section>

      {/* MODULE QUICK VIEW ================================================ */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-elegant hover:shadow-gold transition-all hover:-translate-y-0.5 animate-fade-in">
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
              <div className="relative flex items-center gap-4">
                <div className="size-12 rounded-xl bg-gradient-dark flex items-center justify-center text-gold-soft ring-gold-soft">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  <div className="font-display text-xl">{m.value}</div>
                  <div className="text-[11px] text-muted-foreground">{m.note}</div>
                </div>
              </div>
              <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/3 shimmer rounded-full" />
              </div>
            </div>
          );
        })}
      </section>

      {/* AI INSIGHTS ====================================================== */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-gradient-gold opacity-10 blur-md pointer-events-none" />
          <SectionTitle
            title="AI Insights & Recommendations"
            subtitle="Generated 2 minutes ago · GPT-Finance v4"
            action={
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold font-medium px-2 py-1 rounded-full bg-gold/10">
                <Brain className="size-3" /> Live
              </span>
            }
          />
          <div className="grid sm:grid-cols-2 gap-3 relative">
            {aiInsights.map((ins, i) => (
              <div className="relative rounded-xl border border-border p-4 hover:border-gold/40 transition-colors group animate-fade-in">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${ins.color} opacity-60 pointer-events-none`} />
                <div className="relative flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-foreground/70">{ins.tag}</span>
                  <span className="text-[11px] font-display text-gold">{ins.impact}</span>
                </div>
                <p className="relative text-sm leading-relaxed text-foreground/90">{ins.text}</p>
              </div>
            ))}
          </div>
        </Panel>

        {/* Live activity */}
        <Panel className="relative overflow-hidden">
          <SectionTitle title="Live Activity" subtitle="Autonomous agents · realtime" />
          <div className="space-y-3">
            {liveActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="flex flex-col items-center pt-1">
                  <span className={`size-2 rounded-full ${
                    a.kind === "warn" ? "bg-warning" : a.kind === "ai" ? "bg-gold" : "bg-success"
                  } ${i === 0 ? "pulse-ring" : ""}`} />
                  {i < liveActivity.length - 1 && <span className="w-px flex-1 bg-border mt-1 h-6" />}
                </div>
                <div className="flex-1 pb-2">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.time}</div>
                  <div className="text-sm text-foreground/90">{a.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* CHARTS ROW 1 ===================================================== */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
          <SectionTitle
            title="Revenue Trend"
            subtitle="Last 12 months · ₹ Lakhs"
            action={
              <div className="flex gap-1 rounded-lg bg-muted p-0.5 text-[10px]">
                {["1M","3M","6M","1Y"].map((t,i)=>(
                  <button key={t} className={`px-2.5 py-1 rounded-md ${i===3?"bg-card shadow text-foreground font-medium":"text-muted-foreground"}`}>{t}</button>
                ))}
              </div>
            }
          />
          <TrendArea data={revenueTrend} dataKey="revenue" height={300} />
        </Panel>
        <Panel>
          <SectionTitle title="Revenue Mix" subtitle="Share by stream" />
          <DonutChart data={revenueMix} height={220} />
          <div className="mt-4 space-y-2 text-xs">
            {revenueMix.map((r) => (
              <div key={r.name} className="flex items-center gap-2">
                <span className="size-2.5 rounded-sm" style={{ background: r.color }} />
                <span className="text-muted-foreground">{r.name}</span>
                <span className="ml-auto font-medium font-display">{r.value}%</span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* CHARTS ROW 2 ===================================================== */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <SectionTitle title="Income vs Expense" subtitle="Monthly comparison · ₹ L" />
          <BarsCompare
            data={incomeVsExpense}
            series={[
              { key: "Income", color: "#c4b07a", label: "Income" },
              { key: "Expense", color: "#1a1a1a", label: "Expense" },
            ]}
            height={280}
          />
        </Panel>
        <Panel className="relative overflow-hidden">
          <SectionTitle title="Goal Progress" subtitle="Quarterly targets" />
          <GoalRadial data={goalData} height={220} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {goalData.map((g) => (
              <div key={g.name}>
                <div className="font-display text-base" style={{ color: g.fill }}>{g.value}%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{g.name}</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* CHARTS ROW 3: profitability + radar ============================== */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <SectionTitle
            title="Profitability Trend"
            subtitle="Gross profit, EBITDA and net profit · last 12 months"
            action={
              <div className="flex gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-[#c4b07a]" /> GP</span>
                <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-foreground" /> EBITDA</span>
                <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-success" /> Net</span>
              </div>
            }
          />
          <MultiLine
            data={profitability}
            series={[
              { key: "GP", color: "#c4b07a", label: "GP" },
              { key: "EBITDA", color: "#1a1a1a", label: "EBITDA" },
              { key: "Net", color: "oklch(0.55 0.13 150)", label: "Net" },
            ]}
            height={300}
          />
        </Panel>
        <Panel>
          <SectionTitle title="Performance Radar" subtitle="You vs industry benchmark" />
          <PerformanceRadar data={radarData} height={280} />
          <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-[#c4b07a]" /> You</span>
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-foreground" /> Benchmark</span>
          </div>
        </Panel>
      </section>
    </div>
  );
}
