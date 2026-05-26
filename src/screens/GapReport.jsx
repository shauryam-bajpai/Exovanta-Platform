import { useState } from "react";
import { GAPS } from "../data";

const severityClass = {
  Critical: "pill pill-risk",
  Major: "pill pill-watch",
  Minor: "pill pill-neutral",
};

const statusClass = {
  Open: "pill pill-risk",
  "In Review": "pill pill-watch",
  Fixed: "pill pill-good",
  Verified: "pill pill-good",
};

export default function GapReport() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All" ? GAPS : GAPS.filter((g) => g.severity === filter);

  return (
    <section className="screen" id="view-gaps">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="card-eyebrow">Compliance action register</div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px" }}>
            Gap Report
          </h2>
        </div>
        <div className="flex gap-8">
          {["All", "Critical", "Major", "Minor"].map((f) => (
            <button
              key={f}
              className="btn btn-ghost"
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "7fr 4fr", gap: "16px" }}>
        {/* Gap list */}
        <div className="card">
          <div className="gap-row-head">
            <span>Simulation</span>
            <span>Clause</span>
            <span>Gap description</span>
            <span>Severity</span>
            <span>Status</span>
          </div>
          <div>
            {filtered.map((g) => (
              <button
                key={g.id}
                className="gap-row"
                onClick={() => setSelected(g)}
              >
                <span className="gap-sim">{g.sim}</span>
                <span className="gap-clause">{g.clause}</span>
                <strong className="gap-desc">{g.desc}</strong>
                <span className={severityClass[g.severity]}>{g.severity}</span>
                <span className={statusClass[g.status]}>{g.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gap detail */}
        <div className="card" style={{ alignSelf: "start", position: "sticky", top: "80px" }}>
          <div className="card-eyebrow mb-8">One-click drill-down</div>
          <div>
            {!selected ? (
              <div className="text-dim fs-12">Select a gap to see details</div>
            ) : (
              <>
                <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
                  <span className={severityClass[selected.severity]}>{selected.severity}</span>
                  <span className={statusClass[selected.status]}>{selected.status}</span>
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
                  {selected.id}
                </div>
                <div className="fs-12 text-muted mb-12" style={{ lineHeight: 1.5 }}>
                  {selected.desc}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6px",
                    fontSize: "11px",
                    marginBottom: "14px",
                  }}
                >
                  <span className="text-dim">Clause</span>
                  <span className="text-blue mono">{selected.clause}</span>
                  <span className="text-dim">Component</span>
                  <span className="fw-500">{selected.component}</span>
                  <span className="text-dim">Downstream</span>
                  <span className="mono fs-11">{selected.downstream}</span>
                </div>
                <div className="fix-box">
                  <div className="fix-title">Fix recommendation</div>
                  <div className="fix-body">{selected.fix}</div>
                  <div className="fix-margin">{selected.margin}</div>
                </div>
                <div style={{ display: "flex", gap: "4px", marginTop: "14px", flexWrap: "wrap" }}>
                  {["Open", "In Review", "Fixed", "Verified"].map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "10px",
                        padding: "3px 7px",
                        borderRadius: "5px",
                        background:
                          selected.status === s ? "rgba(0,229,160,0.15)" : "var(--bg-4)",
                        color: selected.status === s ? "var(--green)" : "var(--ink-3)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
