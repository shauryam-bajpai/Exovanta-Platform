export default function SectionRow({ name, evidence, progress }) {
    const value = parseInt(progress, 10);

    // choose bar + text color
    let barClass = "prog-fill prog-good";
    let textClass = "fs-11 fw-500 text-green";

    if (value < 60) {
        barClass = "prog-fill prog-risk";
        textClass = "fs-11 fw-500 text-red";
    } else if (value < 80) {
        barClass = "prog-fill prog-watch";
        textClass = "fs-11 fw-500 text-amber";
    }

    return (
        <div className="section-row" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ flex: 1 }}>
                <div className="fw-500 fs-12">{name}</div>
                <div className="text-dim fs-11 mono">{evidence}</div>
                <div className="prog-track mt-8">
                    <div className={barClass} style={{ width: `${value}%` }}></div>
                </div>
            </div>
            <span className={textClass}>{progress}</span>
        </div>
    );
}
