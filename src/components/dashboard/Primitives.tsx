import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  subtitle,
  actions,
  className,
  eyebrow = "AI Dashboard",
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
  eyebrow?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant", className)}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gradient-gold opacity-20 blur-md pointer-events-none" />
      <div className="relative flex flex-wrap items-end justify-between gap-4 p-5 sm:p-6">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-gold font-semibold mb-2 px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20">
            <Sparkles className="size-3" /> {eyebrow}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2 flex-wrap">{actions}</div>}
      </div>
    </div>
  );
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-3 mb-4 flex-wrap">
      <div>
        <h3 className="font-display text-lg tracking-tight flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gradient-gold" />
          {title}
        </h3>
        {subtitle && <p className="text-xs text-muted-foreground mt-0.5 ml-3.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-elegant",
        className,
      )}
    >
      {children}
    </div>
  );
}
