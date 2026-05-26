export default function Ring({ score, label, color }) {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="ring-wrap">
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ overflow: "visible" }}>
                {/* Track */}
                <circle
                    className="ring-track"
                    cx="40"
                    cy="40"
                    r={radius}
                    strokeWidth="8"
                    stroke="rgba(255,255,255,0.1)"
                    fill="none"
                />
                {/* Progress */}
                <circle
                    className="ring-progress"
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke={color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 40 40)"
                />
                {/* Centered number */}
                <text
                    x="40"
                    y="40"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill={color}
                >
                    {score}
                </text>
            </svg>
            <div className="ring-label">{label}</div>
        </div>
    );
}
