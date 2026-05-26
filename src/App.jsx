import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Copilot from "./components/Copilot";
import Dashboard from "./screens/Dashboard";
import IntakeWizard from "./screens/IntakeWizard";
import Simulations from "./screens/Simulations";
import GapReport from "./screens/GapReport";
import Scorecard from "./screens/Scorecard";
import TechnicalFile from "./screens/TechnicalFile";
import Analytics from "./screens/Analytics";
import DigitalTwin from "./screens/DigitalTwin";

const TITLES = {
  dashboard: "Command Center",
  intake: "Project Intake Console",
  simulations: "Simulation Engine",
  twin: "Digital Twin",
  gaps: "Gap Report",
  scorecard: "Readiness Scorecard",
  techfile: "Technical File",
  analytics: "Analytics",
};

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="shell">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="main">
        <Topbar title={TITLES[activeView]} setActiveView={setActiveView} />
        {activeView === "dashboard" && <Dashboard />}
        {activeView === "intake" && <IntakeWizard />}
        {activeView === "simulations" && <Simulations />}
        {activeView === "gaps" && <GapReport />}
        {activeView === "scorecard" && <Scorecard />}
        {activeView === "techfile" && <TechnicalFile />}
        {activeView === "analytics" && <Analytics />}
        {activeView === "twin" && <DigitalTwin />}
      </main>
      <Copilot />
    </div>
  );
}
