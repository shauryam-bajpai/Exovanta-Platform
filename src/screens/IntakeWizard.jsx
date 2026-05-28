import { useState } from "react";

export default function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState({});

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
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
          {["Uploads", "Data packs", "Environment", "Review"].map((label, i) => (
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
                <div className="card-eyebrow mb-8">Technical uploads</div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {[
                    { name: "PDF", accept: ".pdf" },
                    { name: "XML / JSON", accept: ".xml,.json" },
                    { name: "XLSX", accept: ".xlsx" },
                    { name: "STL File", accept: ".stl" },
                    { name: "STEP File", accept: ".step,.stp" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--bg-3)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        padding: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div className="fw-600">{item.name}</div>
                        <div className="mono fs-11 text-green mt-8">
                          {uploadedFiles[i] || "No file selected"}
                        </div>
                      </div>

                      <>
                        <input
                          id={`file-${i}`}
                          type="file"
                          accept={item.accept}
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files.length > 0) {
                              setUploadedFiles((prev) => ({
                                ...prev,
                                [i]: e.target.files[0].name,
                              }));
                            }
                          }}
                        />

                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            document.getElementById(`file-${i}`).click()
                          }
                        >
                          Upload
                        </button>
                      </>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="wizard-step-panel">
                <div className="annotation">
                  Step 2: Component-level and mechanical data packs. Upload BOM, barrier
                  datasheets, certification evidence, and supporting compliance files.
                </div>
              </div>
            )}
            {step === 2 && (
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

            {step === 3 && (
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