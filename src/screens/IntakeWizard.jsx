import { useState } from "react";

export default function IntakeWizard() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  return (
    <section className="screen" id="view-intake">
      <div style={{ maxWidth: "900px" }}>
        <div className="card-eyebrow mb-8">PDF-backed onboarding</div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 300,
            fontFamily: "var(--serif)",
            letterSpacing: "-0.5px",
            marginBottom: "20px",
          }}
        >
          Project Intake Console
        </h2>

        {/* Wizard steps */}
        <div className="wizard-steps">
          {["Upload .step", "Upload .stl", "Data packs", "Environment", "Review"].map((label, i) => (
            <div
              key={i}
              className={`wstep ${step === i ? "active" : ""}`}
              onClick={() => setStep(i)}   // <-- add this
            >
              <div className="wstep-num">{i + 1}</div>
              <div>{label}</div>
            </div>
          ))}
        </div>

        <div className="grid cols-8-4" style={{ gridTemplateColumns: "3fr 2fr" }}>
          {/* Wizard content */}
          <div id="wizard-content">
            {step === 0 && (
              <div className="wizard-step-panel">
                <div className="grid cols-2" style={{ gap: "12px" }}>
                  <div className="field">
                    <label>Product name</label>
                    <input defaultValue="Exovanta Sentinel" />
                  </div>
                  <div className="field">
                    <label>Model / family</label>
                    <input defaultValue="EXO-SEN-42" />
                  </div>
                  <div className="field">
                    <label>Target zone</label>
                    <select>
                      <option>Zone 1</option>
                      <option>Zone 0</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Gas group</label>
                    <select>
                      <option>IIC</option>
                      <option>IIB</option>
                      <option>IIA</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Temperature class</label>
                    <select>
                      <option>T4</option>
                      <option>T1</option>
                      <option>T2</option>
                      <option>T3</option>
                      <option>T5</option>
                      <option>T6</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Protection concept</label>
                    <select>
                      <option>Ex ia</option>
                      <option>Ex ib</option>
                      <option>Ex d</option>
                      <option>Ex e</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>EPL target</label>
                    <select>
                      <option>Gb</option>
                      <option>Ga</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Max non-IS supply Um (V)</label>
                    <input type="number" defaultValue="24" />
                  </div>
                </div>
                <div className="field">
                  <label>Intended use description</label>
                  <textarea style={{ height: "80px" }}>
                    Battery powered wireless gas sensor with sealed enclosure, 24V service input,
                    IIC gas group, and continuous refinery monitoring duty.
                  </textarea>
                </div>
                <div className="annotation mt-12">
                  <strong className="text-green">Zone 1 recommended</strong> — Low-energy
                  architecture, intrinsic-safety intent, and sealed enclosure evidence align with a
                  strong Zone 1 path. Confidence: 88%
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="wizard-step-panel">
                <div
                  style={{
                    border: "2px dashed var(--border)",
                    borderRadius: "12px",
                    padding: "32px",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>↑</div>
                  <div className="fw-500 mb-8">Gerber, STEP, PDF, netlist, CSV, XLSX</div>
                  <div className="text-dim fs-12">Drag files into the Exovanta parse queue</div>
                </div>
                {/* Example parsed files */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div className="parsed-file">
                    <span className="mono fs-11 text-green">PCB</span>
                    <div style={{ flex: 1 }}>
                      <div className="fw-500 fs-12">sensor-v42.GBR</div>
                      <div className="text-dim fs-11">6 layers, min track 0.18mm</div>
                    </div>
                    <span className="pill pill-good">Parsed</span>
                  </div>
                  <div className="parsed-file">
                    <span className="mono fs-11 text-amber">3D</span>
                    <div style={{ flex: 1 }}>
                      <div className="fw-500 fs-12">enclosure.step</div>
                      <div className="text-dim fs-11">112mm × 64mm × 28mm detected</div>
                    </div>
                    <span className="pill pill-watch">Parsing</span>
                  </div>
                  <div className="parsed-file">
                    <span className="mono fs-11 text-blue">PDF</span>
                    <div style={{ flex: 1 }}>
                      <div className="fw-500 fs-12">exovanta-plan.pdf</div>
                      <div className="text-dim fs-11">IEC 60079-0 Cl.24 section found</div>
                    </div>
                    <span className="pill pill-good">Parsed</span>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="wizard-step-panel">
                <div className="annotation">
                  Step 3: Component-level and mechanical data packs. Upload BOM, barrier datasheets,
                  and STEP/IGES enclosure files.
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="wizard-step-panel">
                <div className="grid cols-2" style={{ gap: "12px" }}>
                  <div className="field"><label>Ambient min (°C)</label><input type="number" defaultValue="-20" /></div>
                  <div className="field"><label>Ambient max (°C)</label><input type="number" defaultValue="55" /></div>
                  <div className="field"><label>Humidity</label><input defaultValue="Damp with intermittent condensation" /></div>
                  <div className="field"><label>Altitude band</label><input defaultValue="0–2000 m" /></div>
                  <div className="field"><label>Vibration / shock</label><input defaultValue="IEC 60068-2-6 light industrial" /></div>
                  <div className="field"><label>Gas / dust description</label><input defaultValue="Hydrogen-rich, no dust zone declared" /></div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="wizard-step-panel">
                <div className="grid cols-2" style={{ gap: "12px", marginBottom: "16px" }}>
                  <div style={{ background: "var(--bg-3)", borderRadius: "10px", padding: "14px" }}>
                    <div className="fs-11 text-dim">Project</div>
                    <div className="fw-600 mt-8">Exovanta Sentinel</div>
                    <div className="fs-12 text-muted mt-8">EXO-SEN-42 / Zone 1 / Ex ia / Gb</div>
                  </div>
                  <div style={{ background: "var(--bg-3)", borderRadius: "10px", padding: "14px" }}>
                    <div className="fs-11 text-dim">Environment</div>
                    <div className="fw-600 mt-8">-20°C to 55°C</div>
                    <div className="fs-12 text-muted mt-8">Damp with condensation</div>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 1l5 3v6l-5 3-5-3V4l5-3z" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                  Queue Exovanta Simulation Run
                </button>
              </div>
            )}
          </div>

          {/* Sidebar checklist */}
          <div className="card" style={{ alignSelf: "start", position: "sticky", top: "80px" }}>
            <div className="card-eyebrow mb-8">Input readiness</div>
            <div className="card-title mb-12">Checklist coverage</div>
            <div
              style={{
                position: "relative",
                height: "6px",
                background: "var(--bg-4)",
                borderRadius: "4px",
                marginBottom: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "72%",
                  background: "var(--green)",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
            <div className="flex items-center justify-between mb-12">
              <span className="fw-600 text-green">28/38</span>
              <span className="fs-11 text-dim">required inputs</span>
            </div>
            {/* Checklist items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div className="check-item">
                <span className="fs-12">Project & Zone</span>
                <span className="pill pill-good">6/6</span>
              </div>
              <div className="check-item">
                <span className="fs-12">Electrical</span>
                <span className="pill pill-good">3/4</span>
              </div>
              <div className="check-item">
                <span className="fs-12">Components</span>
                <span className="pill pill-watch">3/6</span>
              </div>
              <div className="check-item">
                <span className="fs-12">Mechanical</span>
                <span className="pill pill-watch">2/4</span>
              </div>
              <div className="check-item">
                <span className="fs-12">Environment</span>
                <span className="pill pill-good">6/6</span>
              </div>
              <div className="check-item">
                <span className="fs-12">Documentation</span>
                <span className="pill pill-risk">2/4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-16">
        <button className="btn btn-ghost" onClick={prevStep}>
          ← Back
        </button>

        <button className="btn btn-primary" onClick={nextStep} style={{ marginRight: "60px" }}>
          Continue →
        </button>
      </div>
    </section>
  );
}