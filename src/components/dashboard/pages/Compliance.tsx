import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { Panel, PageHeader, SectionTitle } from "../Primitives";

const filings = [
  { name: "GSTR-1 — September", status: "Filed", date: "11 Oct 2025", color: "success" },
  { name: "GSTR-3B — September", status: "Due in 4 days", date: "20 Oct 2025", color: "warn" },
  { name: "TDS Return Q2 FY26", status: "Filed", date: "31 Oct 2025", color: "success" },
  { name: "PF / ESI — October", status: "Pending", date: "15 Nov 2025", color: "warn" },
  { name: "Advance Tax Q3", status: "Upcoming", date: "15 Dec 2025", color: "info" },
  { name: "ROC AOC-4", status: "Filed", date: "30 Sep 2025", color: "success" },
  { name: "Income Tax Audit", status: "In Progress", date: "31 Oct 2025", color: "warn" },
  { name: "GSTR-9 Annual FY25", status: "Pending", date: "31 Dec 2025", color: "info" },
];

const notices = [
  { dept: "GST", ref: "GST/MUM/2025/14872", date: "12 Sep", due: "12 Nov", owner: "S. Mehta", status: "Reply Drafted" },
  { dept: "Income Tax", ref: "ITBA/AST/19/2025-26", date: "28 Aug", due: "28 Oct", owner: "R. Asthana", status: "Submitted" },
  { dept: "PF", ref: "EPFO/MH/2025/0098", date: "02 Oct", due: "02 Nov", owner: "P. Iyer", status: "Pending" },
];

export function Compliance() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Compliance & Tax"
        subtitle="GST, TDS, payroll and statutory filings — status, due dates and pending actions."
      />

      <Panel>
        <SectionTitle title="Filing Calendar" subtitle="Key statutory filings & due dates" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filings.map(f => (
            <div key={f.name} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between">
                <div className="text-sm font-medium leading-snug">{f.name}</div>
                <div className={`size-7 rounded-md flex items-center justify-center shrink-0 ${
                  f.color === "success" ? "bg-success/10 text-success"
                  : f.color === "warn" ? "bg-warning/15 text-warning-foreground"
                  : "bg-gold/15 text-foreground"
                }`}>
                  {f.color === "success" ? <CheckCircle2 className="size-4" />
                   : f.color === "warn" ? <AlertTriangle className="size-4" />
                   : <Clock className="size-4" />}
                </div>
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">{f.status}</div>
              <div className="text-xs text-muted-foreground">{f.date}</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionTitle title="Notices & Pending Actions" subtitle="Statutory correspondence & tracking" />
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-5 py-3 font-medium">Department</th>
                <th className="px-3 py-3 font-medium">Reference No.</th>
                <th className="px-3 py-3 font-medium">Notice Date</th>
                <th className="px-3 py-3 font-medium">Due Date</th>
                <th className="px-3 py-3 font-medium">Owner</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(n => (
                <tr key={n.ref} className="border-b border-border/60 hover:bg-secondary/40">
                  <td className="px-5 py-3 font-medium">{n.dept}</td>
                  <td className="px-3 py-3 font-mono text-xs">{n.ref}</td>
                  <td className="px-3 py-3 text-muted-foreground">{n.date}</td>
                  <td className="px-3 py-3 text-muted-foreground">{n.due}</td>
                  <td className="px-3 py-3">{n.owner}</td>
                  <td className="px-5 py-3">
                    <span className="text-[11px] px-2 py-1 rounded-md font-medium bg-secondary">{n.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
