export default function Topbar({ title, setActiveView }) {
  return (
    <header className="topbar">
      <div style={{ flex: 1 }}>
        <div className="topbar-breadcrumb">Project EXO-1042 · <span>Exovanta Sentinel</span></div>
        <div className="topbar-title">{title}</div>
      </div>
      <div className="topbar-actions">
        <div className="live-indicator"><span className="live-dot"></span>Live</div>
        <button className="btn btn-primary" onClick={() => setActiveView("intake")}>
          New Intake
        </button>
      </div>
    </header>
  );
}
