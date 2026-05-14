import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  TrendingUp,
  ShoppingCart,
  PieChart,
  Scale,
  Wallet,
  Package,
  ShieldCheck,
  Activity,
  Lightbulb,
  FileText,
  Bell,
  Settings as SettingsIcon,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/logo.png";

const nav = [
  { to: "/", label: "Overview", icon: Home },
  { to: "/executive", label: "Executive Dashboard", icon: LayoutDashboard },
  { to: "/sales", label: "Sales & Receivables", icon: TrendingUp },
  { to: "/purchases", label: "Purchases & Payables", icon: ShoppingCart },
  { to: "/pnl", label: "Profit & Loss", icon: PieChart },
  { to: "/balance-sheet", label: "Balance Sheet", icon: Scale },
  { to: "/cashflow", label: "Cash Flow & Banking", icon: Wallet },
  { to: "/inventory", label: "Inventory", icon: Package },
  { to: "/compliance", label: "Compliance & Tax", icon: ShieldCheck },
  { to: "/ratios", label: "Ratios & KPIs", icon: Activity },
  { to: "/insights", label: "Insights & Reports", icon: Lightbulb },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/alerts", label: "Alerts & Actions", icon: Bell },
  { to: "/settings", label: "Settings & Access", icon: SettingsIcon },
] as const;

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = useLocation().pathname;

  return (
    <aside
      className={cn(
        "sticky top-0 h-screen flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-[76px]" : "w-[260px]",
      )}
    >
      <div className="flex items-center gap-3 px-4 py-4 border-b border-sidebar-border">
        <div className="size-11 rounded-md bg-white flex items-center justify-center shrink-0 shadow-gold p-1">
          <img src={logo} alt="Consultara Global" className="size-full object-contain" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <div className="font-display text-[15px] leading-tight text-white truncate">Consultara Global</div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-gold-soft mt-0.5">Powered By AI</div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin py-4 px-3 space-y-0.5">
        {nav.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-all relative",
                active
                  ? "bg-gradient-gold text-black font-medium shadow-gold"
                  : "text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent",
              )}
            >
              <Icon className="size-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={onToggle}
        className="m-3 flex items-center justify-center gap-2 rounded-md border border-sidebar-border py-2 text-xs text-sidebar-foreground/60 hover:text-white hover:border-gold transition-colors"
      >
        <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
        {!collapsed && "Collapse"}
      </button>
    </aside>
  );
}
