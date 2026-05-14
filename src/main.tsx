import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Overview } from "@/components/dashboard/pages/Overview";
import { ExecutiveOverview } from "@/components/dashboard/pages/ExecutiveOverview";
import { SalesReceivables } from "@/components/dashboard/pages/SalesReceivables";
import { ProfitLoss } from "@/components/dashboard/pages/ProfitLoss";
import { CashFlow } from "@/components/dashboard/pages/CashFlow";
import { Compliance } from "@/components/dashboard/pages/Compliance";
import { Ratios } from "@/components/dashboard/pages/Ratios";
import { Documents } from "@/components/dashboard/pages/Documents";
import { Alerts } from "@/components/dashboard/pages/Alerts";
import { Settings } from "@/components/dashboard/pages/Settings";
import { GenericPage } from "@/components/dashboard/pages/GenericPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/executive" element={<ExecutiveOverview />} />
          <Route path="/sales" element={<SalesReceivables />} />
          <Route path="/purchases" element={<GenericPage title="Purchases & Payables" description="Vendor spend, payables and purchase trends." sections={["Vendor mix", "Top vendors", "Ageing buckets", "Cycle time"]} />} />
          <Route path="/pnl" element={<ProfitLoss />} />
          <Route path="/balance-sheet" element={<GenericPage title="Balance Sheet Analysis" description="Assets, liabilities and net worth movement." sections={["Summary cards", "Assets section", "Liabilities section", "Working capital alerts"]} />} />
          <Route path="/cashflow" element={<CashFlow />} />
          <Route path="/inventory" element={<GenericPage title="Inventory & Working Capital" description="Stock levels, working capital cycle and gap analysis." sections={["Inventory summary", "Working capital cycle", "Stock ageing", "Reorder alerts"]} />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/ratios" element={<Ratios />} />
          <Route path="/insights" element={<GenericPage title="Insights & Reports" description="AI-generated insights and downloadable reports." sections={["AI insights", "Saved reports", "Scheduled exports"]} />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  </StrictMode>,
);
