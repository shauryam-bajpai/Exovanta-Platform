export default function DigitalTwin() {
  return (
    <section className="screen" id="view-twin">
      <div className="card-eyebrow mb-8">3D / PCB live overlay</div>
      <h2 className="screen-title">Digital Twin</h2>

      <div className="grid cols-2 gap-12">
        {/* Left panel: Thermal map */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">3D enclosure thermal map</div>
              <div className="card-title">CAD-based digital twin</div>
            </div>
            <span className="pill pill-watch">Running</span>
          </div>

          <svg
            viewBox="0 0 480 280"
            style={{ width: "100%", borderRadius: "8px", background: "#0d1a17" }}
          >
            <defs>
              <linearGradient id="heatGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#1fa87a" stopOpacity="0.3" />
                <stop offset="0.6" stopColor="#f0b040" stopOpacity="0.4" />
                <stop offset="1" stopColor="#ff5c5c" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Board layers */}
            <rect x="20" y="20" width="440" height="240" rx="8" fill="#0d2318" />
            <rect x="40" y="40" width="400" height="200" rx="6" fill="#1a3d2e" />
            <rect x="40" y="40" width="400" height="200" rx="6" fill="url(#heatGrad)" />

            {/* >>> Green PCB traces <<< */}
            <g stroke="#2df0a8" strokeWidth="6" strokeLinecap="round" opacity="0.7">
              <path d="M80 80 H200 V130 H310 V200 H420" fill="none" />
              <path d="M88 190 H170 V155 H260 V90 H400" fill="none" />
            </g>

            {/* Components */}
            <rect x="170" y="108" width="64" height="44" rx="5" fill="#0d1a17" />
            <rect
              x="170"
              y="108"
              width="64"
              height="44"
              rx="5"
              fill="none"
              stroke="#2df0a8"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <text x="202" y="130" fontSize="9" fill="#2df0a8" textAnchor="middle">
              U3
            </text>

            <rect x="308" y="72" width="56" height="38" rx="5" fill="#0d1a17" />
            <rect
              x="308"
              y="72"
              width="56"
              height="38"
              rx="5"
              fill="none"
              stroke="#4da8ff"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <text x="336" y="91" fontSize="9" fill="#4da8ff" textAnchor="middle">
              RF
            </text>

            {/* Hot spot */}
            <circle cx="225" cy="115" r="16" fill="#ff5c5c" opacity="0.7" />
            <circle cx="225" cy="115" r="10" fill="#ff5c5c" opacity="0.9" />
            <text
              x="225"
              y="119"
              fontSize="8"
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              HOT
            </text>

            {/* Separation line */}
            <line
              x1="234"
              y1="130"
              x2="308"
              y2="91"
              stroke="#f0b040"
              strokeWidth="2"
              strokeDasharray="4,3"
              opacity="0.8"
            />
            <text x="271" y="104" fontSize="9" fill="#f0b040">
              +0.4mm needed
            </text>
          </svg>

          <div className="flex gap-8 mt-12">
            <span className="pill pill-risk">U3 hotspot 132.8°C</span>
            <span className="pill pill-watch">RF module 96.4°C</span>
            <span className="pill pill-good">Sensor bridge 74.1°C</span>
          </div>
        </div>

        {/* Right panel: Node map */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Spark energy node map</div>
              <div className="card-title">Risk-scaled schematic nodes</div>
            </div>
          </div>

          <svg viewBox="0 0 440 260" style={{ width: "100%" }}>
            <g stroke="rgba(255,255,255,0.12)" strokeWidth="2">
              <line x1="80" y1="100" x2="190" y2="65" />
              <line x1="190" y1="65" x2="300" y2="110" />
              <line x1="300" y1="110" x2="390" y2="70" />
              <line x1="190" y1="65" x2="240" y2="190" />
            </g>

            <circle cx="80" cy="100" r="28" fill="#ff5c5c" opacity="0.85" />
            <text x="80" y="95" fontSize="9" fill="white" textAnchor="middle">
              N-24V
            </text>
            <text x="80" y="106" fontSize="8" fill="rgba(255,255,255,0.7)" textAnchor="middle">
              Critical
            </text>

            <circle cx="190" cy="65" r="20" fill="#f0b040" opacity="0.85" />
            <text x="190" y="65" fontSize="9" fill="white" textAnchor="middle">
              U3.OUT
            </text>

            <circle cx="300" cy="110" r="15" fill="#4da8ff" opacity="0.85" />
            <text x="300" y="110" fontSize="9" fill="white" textAnchor="middle">
              SENS+
            </text>

            <circle cx="390" cy="70" r="12" fill="#00e5a0" opacity="0.85" />
            <text x="390" y="70" fontSize="9" fill="#051210" textAnchor="middle">
              GND
            </text>

            <circle cx="240" cy="190" r="17" fill="#a78bfa" opacity="0.85" />
            <text x="240" y="190" fontSize="9" fill="white" textAnchor="middle">
              RF
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
