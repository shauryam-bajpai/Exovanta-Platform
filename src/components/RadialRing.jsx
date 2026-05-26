export default function RadialRing({ score, label, color, size = 70, textSize = 13 }) {
  const r = size * 0.35;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="ring-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: "visible" }}>
        <circle
          className="ring-track"
          cx={c}
          cy={c}
          r={r}
          strokeWidth={size * 0.1}
        />
        <circle
          className="ring-progress"
          cx={c}
          cy={c}
          r={r}
          stroke={color}
          strokeWidth={size * 0.1}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${c} ${c})`}
        />
        <text
          x={c}
          y={c}
          textAnchor="middle"
          fontSize={textSize}
          fontWeight="600"
          fill={color}
          dominantBaseline="middle"
        >
          {score}
        </text>
      </svg>
      <div className="ring-label">{label}</div>
    </div>
  );
}
