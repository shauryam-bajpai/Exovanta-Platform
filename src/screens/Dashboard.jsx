import { SIMULATIONS } from "../data";
import RadialRing from "../components/RadialRing";
import { LIVE_EVENTS } from "../data";
import FeedItem from "../components/FeedItem"
export default function Dashboard() {
  return (
    <section className="screen active" id="view-dashboard">
      {/* Hero */}
      <div className="hero">
        <div className="hero-copy">
          <div className="hero-eyebrow">Exovanta Platform</div>
          <h1 className="hero-h1">
            Live ATEX/IECEx readiness,<br />
            <strong>from raw design to certifiable evidence.</strong>
          </h1>
          <p className="hero-p">
            Turn the checklist behind hazardous-area certification into an operating cockpit —
            intake, parse, simulate, score, resolve gaps, and generate technical files while the
            live model keeps moving.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">9 SIM engines</span>
            <span className="hero-tag">IEC 60079-0/11</span>
            <span className="hero-tag">PDF/DOCX export</span>
            <span className="hero-tag">Zone 0 / Zone 1</span>
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Guided Intake</button>
            <button className="btn btn-ghost">View Simulations</button>
          </div>
        </div>

        <div className="hero-visual">
          <div style={{ marginBottom: "16px" }}>
            <div className="readiness-label">Current Readiness</div>
            <div className="readiness-num">
              84<span>%</span>
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <div className="flex items-center justify-between mb-8">
              <span className="fs-11 text-dim">Zone 1 path</span>
              <span className="fs-11 text-green mono">86% confidence</span>
            </div>
            <div className="prog-track">
              <div className="prog-fill prog-good" style={{ width: "84%" }}></div>
            </div>
          </div>
          <div className="grid cols-2" style={{ gap: "8px", marginTop: "14px" }}>
            <div style={{ background: "var(--bg-3)", borderRadius: "8px", padding: "10px 12px" }}>
              <div className="fs-11 text-dim">Zone 0</div>
              <div style={{ fontSize: "20px", fontWeight: 600, color: "var(--amber)" }}>61%</div>
              <div className="prog-track mt-8">
                <div className="prog-fill prog-watch" style={{ width: "61%" }}></div>
              </div>
            </div>
            <div style={{ background: "var(--bg-3)", borderRadius: "8px", padding: "10px 12px" }}>
              <div className="fs-11 text-dim">Zone 1</div>
              <div style={{ fontSize: "20px", fontWeight: 600, color: "var(--green)" }}>84%</div>
              <div className="prog-track mt-8">
                <div className="prog-fill prog-good" style={{ width: "84%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid cols-4 mb-12" style={{ marginBottom: "16px" }}>
        <div className="stat-tile">
          <div className="stat-label">Total projects</div>
          <div className="stat-value">28</div>
          <div className="stat-trend">↑ +6 this quarter</div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Simulations run</div>
          <div className="stat-value">1,247</div>
          <div className="stat-trend">↑ 91 today</div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Pass rate</div>
          <div className="stat-value">86%</div>
          <div className="stat-trend">↑ +14 pts</div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Time saved</div>
          <div className="stat-value">4,620h</div>
          <div className="stat-trend">vs manual assessment</div>
        </div>
      </div>

      <div className="grid cols-5-3">
        {/* Simulation scorecards */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Live compliance scorecard</div>
              <div className="card-title">Readiness across all simulation domains</div>
            </div>
            <span className="pill pill-watch">
              <span className="pill-dot"></span>Running
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            {SIMULATIONS.map(sim => (
              <RadialRing
                key={sim.id}
                score={sim.score}
                label={sim.id}
                color={sim.color}
              />
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-12">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1a8 8 0 100 16A8 8 0 009 1zM9 9V5"
                stroke="var(--green)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <strong className="text-green">84% overall readiness</strong>
            <span className="text-dim fs-12">5 of 9 domains complete</span>
          </div>
        </div>

        {/* Live event feed */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Recent activity</div>
              <div className="card-title">Live event stream</div>
            </div>
            <div className="live-indicator">
              <span className="live-dot"></span>Live
            </div>
          </div>
          <div>
            {LIVE_EVENTS.map((e, i) => (
              <FeedItem
                key={i}
                actor={e.actor}
                time={e.time}
                text={e.text}
                kind={e.kind}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="card mt-16">
        <div className="card-header">
          <div>
            <div className="card-eyebrow">Project timeline</div>
            <div className="card-title">Simulation execution order</div>
          </div>
          <span className="pill pill-watch">
            <span className="pill-dot"></span>Running
          </span>
        </div>
        <div className="gantt">
          <div className="gantt-seg g-complete" style={{ flex: "0 0 16%" }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Foundation · SIM-05
          </div>
          <div className="gantt-seg g-running" style={{ flex: "0 0 42%" }}>
            ⟳ Parallel · SIM-01 / 02 / 06 / 07 / 08
          </div>
          <div className="gantt-seg g-blocked" style={{ flex: "0 0 24%" }}>
            ✕ Blocked · SIM-03 / 04
          </div>
          <div className="gantt-seg g-locked" style={{ flex: "0 0 18%" }}>
            ⏸ Final · SIM-09
          </div>
        </div>
      </div>
    </section>
  );
}
