import { Panel, PageHeader, SectionTitle } from "../Primitives";

const groups = [
  {
    title: "Liquidity",
    items: [
      { k: "Current Ratio", v: "2.14", prev: "2.08", bench: "1.5–2.5", status: "green" },
      { k: "Quick Ratio", v: "1.62", prev: "1.55", bench: "≥ 1.0", status: "green" },
      { k: "Cash Ratio", v: "0.78", prev: "0.71", bench: "0.5–1.0", status: "green" },
      { k: "Op. Cash Flow Ratio", v: "0.42", prev: "0.38", bench: "≥ 0.4", status: "green" },
    ],
  },
  {
    title: "Solvency",
    items: [
      { k: "Debt-Equity", v: "0.42", prev: "0.46", bench: "< 0.6", status: "green" },
      { k: "Debt-to-Assets", v: "0.31", prev: "0.34", bench: "< 0.4", status: "green" },
      { k: "Interest Coverage", v: "12.8x", prev: "10.4x", bench: "> 3x", status: "green" },
    ],
  },
  {
    title: "Profitability",
    items: [
      { k: "Gross Margin", v: "40.2%", prev: "40.4%", bench: "35–45%", status: "amber" },
      { k: "EBITDA Margin", v: "23.2%", prev: "21.8%", bench: "> 18%", status: "green" },
      { k: "Net Margin", v: "16.3%", prev: "14.5%", bench: "> 12%", status: "green" },
      { k: "Return on Equity", v: "21.4%", prev: "19.2%", bench: "> 15%", status: "green" },
      { k: "Return on Capital", v: "18.6%", prev: "16.8%", bench: "> 14%", status: "green" },
    ],
  },
  {
    title: "Efficiency",
    items: [
      { k: "Receivable Days", v: "62", prev: "68", bench: "< 60", status: "amber" },
      { k: "Inventory Days", v: "41", prev: "45", bench: "< 45", status: "green" },
      { k: "Payable Days", v: "65", prev: "69", bench: "45–75", status: "green" },
      { k: "Cash Conversion", v: "38d", prev: "44d", bench: "< 45d", status: "green" },
      { k: "Asset Turnover", v: "1.42x", prev: "1.36x", bench: "> 1.2x", status: "green" },
    ],
  },
];

const dot = (s: string) =>
  s === "green" ? "bg-success" : s === "amber" ? "bg-warning" : "bg-destructive";

export function Ratios() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Financial Ratios & KPIs"
        subtitle="Liquidity, solvency, profitability and efficiency ratios — benchmarked and colour-coded."
      />
      <div className="grid lg:grid-cols-2 gap-6">
        {groups.map((g) => (
          <Panel key={g.title}>
            <SectionTitle title={g.title} />
            <div className="divide-y divide-border/70">
              {g.items.map((it) => (
                <div key={it.k} className="grid grid-cols-12 gap-2 py-3 items-center">
                  <div className="col-span-5 flex items-center gap-2">
                    <span className={`size-2 rounded-full ${dot(it.status)}`} />
                    <span className="text-sm">{it.k}</span>
                  </div>
                  <div className="col-span-2 text-right font-display text-lg tabular-nums">{it.v}</div>
                  <div className="col-span-2 text-right text-xs text-muted-foreground">prev {it.prev}</div>
                  <div className="col-span-3 text-right text-[11px] text-muted-foreground italic">{it.bench}</div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
