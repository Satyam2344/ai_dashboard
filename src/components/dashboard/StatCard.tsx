import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  label: string;
  value: string;
  previous?: string;
  deltaPct?: number;
  invertGood?: boolean; // for metrics where lower = better
  hint?: string;
  highlight?: boolean;
}

export function StatCard({ label, value, previous, deltaPct, invertGood, hint, highlight }: StatCardProps) {
  const up = (deltaPct ?? 0) >= 0;
  const good = invertGood ? !up : up;
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-5 shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-gold overflow-hidden",
        highlight && "border-transparent",
      )}
    >
      {highlight && (
        <div className="absolute inset-0 bg-gradient-gold-soft pointer-events-none" />
      )}
      <div className="relative flex items-start justify-between gap-3">
        <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-medium">
          {label}
        </div>
        {deltaPct !== undefined && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded",
              good ? "text-success bg-success/10" : "text-destructive bg-destructive/10",
            )}
          >
            {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
            {Math.abs(deltaPct).toFixed(1)}%
          </span>
        )}
      </div>
      <div className="relative mt-3 font-display text-2xl lg:text-[26px] tracking-tight">{value}</div>
      {previous && (
        <div className="relative mt-1 text-[11px] text-muted-foreground">vs {previous} prev</div>
      )}
      {hint && <div className="relative mt-2 text-[11px] text-muted-foreground/80 italic">{hint}</div>}
    </div>
  );
}
