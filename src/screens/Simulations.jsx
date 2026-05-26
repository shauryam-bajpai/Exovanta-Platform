import { SIMULATIONS_CARDS } from "../data";

export default function Simulations() {
  return (
    <section className="screen" id="view-simulations">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="card-eyebrow">9 AI simulation engines</div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px" }}>
            Simulation Engine
          </h2>
        </div>
        <div className="flex gap-8">
          <button className="btn btn-ghost">⏸ Pause all</button>
          <button className="btn btn-primary">▶ Run all</button>
        </div>
      </div>

      <div className="sim-grid">
        {SIMULATIONS_CARDS.map(s => (
          <div key={s.id} className="sim-card">
            {/* Header row: ID left, status pill right */}
            <div className="sim-card-header">
              <div className="sim-id">{s.id}</div>
              <div className={`pill pill-${s.color}`}>{s.status}</div>
            </div>

            {/* Title + domain */}
            <div className="sim-name">{s.name}</div>
            <div className="sim-domain">{s.domain}</div>

            {/* Progress bar */}
            <div className="sim-progress">
              <div
                className={`sim-progress-bar ${s.status.toLowerCase().replace(" ", "-")}`}
                style={{
                  width: `${(parseInt(s.progress.split("/")[0]) /
                      parseInt(s.progress.split("/")[1])) *
                    100
                    }%`
                }}
              ></div>
            </div>

            {/* Meta info */}
            <div className="sim-meta">
              {s.progress} · {s.ref} · ETA {s.eta}
            </div>
          </div>


        ))}
      </div>
    </section>
  );
}
