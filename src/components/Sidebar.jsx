export default function Sidebar({ activeView, setActiveView }) {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L17 6V14L10 18L3 14V6L10 2Z"
              stroke="#051210"
              strokeWidth="1.5"
              fill="rgba(0,0,0,0.2)"
            />
            <circle cx="10" cy="10" r="3" fill="#051210" />
            <path
              d="M10 5V7M10 13V15M5 10H7M13 10H15"
              stroke="#051210"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <div className="brand-name">Exovanta</div>
          <div className="brand-sub">Pre-Compliance AI</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        {/* Platform Section */}
        <div className="nav-section">
          <div className="nav-label">Platform</div>
          <button
            className={`nav-item ${activeView === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveView("dashboard")}
            data-view="dashboard"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            Dashboard
          </button>
          <button
            className={`nav-item ${activeView === "intake" ? "active" : ""}`}
            onClick={() => setActiveView("intake")}
            data-view="intake"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1v8M5 6l3 3 3-3M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Project Intake
          </button>
          <button
            className={`nav-item ${activeView === "simulations" ? "active" : ""}`}
            onClick={() => setActiveView("simulations")}
            data-view="simulations"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path d="M6 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
            </svg>
            Simulation Engine
          </button>
        </div>

        {/* Analysis Section */}
        <div className="nav-section">
          <div className="nav-label">Analysis</div>
          <button
            className={`nav-item ${activeView === "twin" ? "active" : ""}`}
            onClick={() => setActiveView("twin")}
            data-view="twin"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 7v4M5.5 5.8l2.5 1.2 2.5-1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Digital Twin
          </button>
          <button
            className={`nav-item ${activeView === "gaps" ? "active" : ""}`}
            onClick={() => setActiveView("gaps")}
            data-view="gaps"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14.5 13H1.5L8 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              <path d="M8 6v3M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Gap Report
            <span className="nav-badge">4</span>
          </button>
          <button
            className={`nav-item ${activeView === "scorecard" ? "active" : ""}`}
            onClick={() => setActiveView("scorecard")}
            data-view="scorecard"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 8L8 4.5M8 8L10.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Readiness Scorecard
          </button>
        </div>

        {/* Delivery Section */}
        <div className="nav-section">
          <div className="nav-label">Delivery</div>
          <button
            className={`nav-item ${activeView === "techfile" ? "active" : ""}`}
            onClick={() => setActiveView("techfile")}
            data-view="techfile"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 1h6l3 3v10a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M9 1v3h3M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Technical File
          </button>
          <button
            className={`nav-item ${activeView === "analytics" ? "active" : ""}`}
            onClick={() => setActiveView("analytics")}
            data-view="analytics"
          >
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 12l3.5-4 3 2 3.5-5 2 2.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Analytics
          </button>
        </div>
      </nav>
      {/* Footer */}
      <div className="sidebar-footer">
        <div className="avatar">MR</div>
        <div>
          <div className="sidebar-user-name">Maya R.</div>
          <div className="sidebar-user-role">Compliance Manager</div>
        </div>
      </div>
    </aside>
  );
}
