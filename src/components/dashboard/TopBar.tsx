import { Bell, Download, HelpCircle, Menu, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const logo = "/logo.png";

export function TopBar({ onMenu }: { onMenu?: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 h-16">
        {/* Mobile menu */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden size-9 shrink-0"
          onClick={onMenu}
        >
          <Menu className="size-5" />
        </Button>

        {/* Mobile compact brand */}
        <div className="lg:hidden flex items-center gap-2 min-w-0">
          <div className="size-8 rounded-md bg-white shrink-0 p-1 shadow-gold">
            <img src={logo} alt="Consultara Global" className="size-full object-contain" />
          </div>
          <span className="font-display text-sm truncate">Consultara Global</span>
        </div>

        {/* Desktop: client + filters */}
        <div className="hidden lg:flex flex-col leading-tight mr-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Client</span>
          <span className="text-sm font-medium">Meridian Industries Pvt. Ltd.</span>
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <Select defaultValue="fy26">
            <SelectTrigger className="h-9 w-[110px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="fy26">FY 2025-26</SelectItem>
              <SelectItem value="fy25">FY 2024-25</SelectItem>
              <SelectItem value="fy24">FY 2023-24</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="oct">
            <SelectTrigger className="h-9 w-[110px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"].map(m => (
                <SelectItem key={m} value={m.toLowerCase()}>{m} 2025</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[120px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              <SelectItem value="mum">Mumbai</SelectItem>
              <SelectItem value="del">Delhi</SelectItem>
              <SelectItem value="blr">Bengaluru</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tablet: compact period selector */}
        <div className="hidden md:flex xl:hidden">
          <Select defaultValue="oct">
            <SelectTrigger className="h-9 w-[120px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"].map(m => (
                <SelectItem key={m} value={m.toLowerCase()}>{m} 2025</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1" />

        <div className="hidden xl:flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-success animate-pulse" />
          Synced 2 min ago
        </div>

        <div className="hidden xl:block relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            placeholder="Search ledgers, invoices…"
            className="h-9 w-[200px] pl-8 pr-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        {/* Mobile search icon */}
        <Button variant="ghost" size="icon" className="xl:hidden size-9 shrink-0">
          <Search className="size-4" />
        </Button>

        <Button variant="ghost" size="icon" className="hidden sm:inline-flex size-9 shrink-0">
          <RefreshCw className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden md:inline-flex size-9 shrink-0">
          <HelpCircle className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-9 shrink-0 relative">
          <Bell className="size-4" />
          <span className="absolute top-2 right-2 size-1.5 rounded-full bg-gold" />
        </Button>
        <Button className="hidden sm:inline-flex h-9 bg-gradient-gold text-black hover:opacity-90 shadow-gold shrink-0">
          <Download className="size-4 sm:mr-2" />
          <span className="hidden md:inline">Export</span>
        </Button>

        <div className="ml-1 flex items-center gap-2 pl-2 sm:pl-3 border-l border-border">
          <div className="size-9 aspect-square shrink-0 rounded-full bg-gradient-gold flex items-center justify-center text-black font-semibold text-sm ring-2 ring-gold/30 ring-offset-2 ring-offset-background overflow-hidden">
            RA
          </div>
          <div className="hidden 2xl:block leading-tight">
            <div className="text-sm font-medium">Rohan Asthana</div>
            <div className="text-[11px] text-muted-foreground">CFO</div>
          </div>
        </div>
      </div>
    </header>
  );
}
