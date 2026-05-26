export default function FeedItem({ actor, time, text, kind }) {
  return (
    <div className="feed-item">
      <div className={`feed-dot ${kind}`}></div>
      <div style={{ flex: 1 }}>
        <div className="feed-actor">
          {actor}{" "}
          <span style={{ fontWeight: 400, color: "var(--ink-3)", fontSize: "10px" }}>
            {time}
          </span>
        </div>
        <div className="feed-text">{text}</div>
      </div>
    </div>
  );
}
