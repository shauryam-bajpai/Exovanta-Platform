// src/components/Copilot.jsx
import { useState } from "react";

export default function Copilot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Ask anything about Exovanta, ATEX/IECEx standards, or the current project workflow."
    }
  ]);
  const [input, setInput] = useState("");

  const replies = {
    gap: "Use the Gap Report to sort by severity and work from Critical to Major. Each gap includes the affected component, fix recommendation, and downstream impact. After applying the design change, rerun the linked SIM engine.",
    thermal: "Moving the regulator 6mm from the sealed rib should recover ~5.8°C of T4 headroom. Attach the updated STEP file to SIM-02 and rerun.",
    zone: "The readiness scorecard combines simulation completion, gap severity, and evidence coverage. Zone 1 path shows 84% confidence with the current design.",
    default: "Exovanta is organised around: Intake → Twin → Simulations → Gaps → Scorecard → Technical File. Ask about a specific feature or compliance term and I will guide you to the right workflow."
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    // add user message
    setMessages([...messages, { role: "user", text: input }]);
    const t = input.toLowerCase();
    const reply =
      t.includes("gap") || t.includes("fix")
        ? replies.gap
        : t.includes("thermal") || t.includes("heat")
          ? replies.thermal
          : t.includes("zone") || t.includes("score")
            ? replies.zone
            : replies.default;
    setInput("");
    // add AI reply after short delay
    setTimeout(() => {
      setMessages(m => [...m, { role: "ai", text: reply }]);
    }, 600);
  };

  return (
    <>
      <button className="fab" onClick={() => setOpen(!open)} title="AI Copilot">
        ✦
      </button>
      {open && (
        <div className="copilot-panel open">
          <div className="copilot-header">
            <div className="copilot-header-dot"></div>
            <div className="copilot-title">Exovanta AI Copilot</div>
            <button className="btn-icon" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="copilot-msgs">
            {messages.map((m, i) => (
              <div key={i} className={`msg msg-${m.role}`}>{m.text}</div>
            ))}
          </div>
          <div className="copilot-input-row">
            <input
              className="copilot-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about a feature, gap, or standard…"
              onKeyDown={e => { if (e.key === "Enter") sendMessage(); }}
            />
            <button className="copilot-send" onClick={sendMessage}>→</button>
          </div>
        </div>
      )}
    </>
  );
}
