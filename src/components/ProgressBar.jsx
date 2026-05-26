export default function ProgressBar({ value, status }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${value}%`,
          backgroundColor: status,
        }}
      ></div>
      <span className="progress-label">{Math.round(value)}%</span>
    </div>
  );
}
