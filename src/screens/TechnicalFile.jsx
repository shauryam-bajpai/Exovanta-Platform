import { TECH_SECTIONS, CITATIONS } from "../data";
import SectionRow from "../components/SectionRow";

export default function TechnicalFile() {
  return (
    <section className="screen" id="view-techfile">
      {/* Header with export buttons */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="card-eyebrow">Auto‑populated evidence document</div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px" }}>
            Explosion Protection Technical File
          </h2>
        </div>
        <div className="flex gap-8">
          <button className="btn btn-ghost">PDF</button>
          <button className="btn btn-ghost">DOCX</button>
          <button className="btn btn-primary">Export</button>
        </div>
      </div>

      {/* Grid with three cards */}
      <div className="grid" style={{ gridTemplateColumns: "4fr 6fr 3fr", gap: "16px" }}>

        {/* Section completion */}
        <div className="card" style={{ alignSelf: "start" }}>
          <div className="card-eyebrow mb-12">Section completion</div>
          <div id="tech-sections">
            {TECH_SECTIONS.map((s) => (
              <SectionRow
                key={s.name}
                name={s.name}
                evidence={s.evidence}
                progress={s.progress}
              />
            ))}
          </div>
        </div>

        {/* Live editor */}
        <div className="card">
          <div className="card-eyebrow mb-8">Live editor</div>
          <div style={{ fontSize: "13.5px", lineHeight: "1.8", color: "var(--ink-2)" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)", marginBottom: "10px" }}>
              Explosion Protection Technical File — EXO‑1042
            </h3>
            <p className="mb-8">
              The equipment is a battery‑assisted wireless sensing device intended for Zone 1 hazardous area deployment.
              The current certification path is <strong className="text-green">Ex ia IIC T4 Gb</strong>, supported by
              live simulation evidence from SIM‑01, SIM‑02, SIM‑05, SIM‑07, and SIM‑09.
            </p>
            <p className="mb-8">
              The thermal assessment links the FEM enclosure model to component‑level dissipation values and confirms
              that remaining T‑class risk is limited to the regulator shield region pending design update.
            </p>
            <p>
              Evidence from routine test protocols, dielectric assessment, and installation marking will be attached
              prior to notified body submission. The documentation completeness metric currently stands at 74% with one
              pending manager sign‑off.
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
            <button className="btn btn-ghost">Version history</button>
            <button className="btn btn-ghost">Link evidence</button>
          </div>
        </div>

        {/* Clause citations */}
        <div className="card" style={{ alignSelf: "start" }}>
          <div className="card-eyebrow mb-12">Clause citations</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {CITATIONS.map((c) => (
              <div key={c.clause} style={{ background: "var(--bg-3)", borderRadius: "7px", padding: "8px 10px" }}>
                <div className="fw-500 fs-12">{c.clause}</div>
                <div className="text-dim fs-11">{c.ref}</div>
                <span className={`pill ${c.status === "Verified" ? "pill-good" : "pill-watch"} mt-8`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
