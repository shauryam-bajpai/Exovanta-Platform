import { SCORECARD } from "../data";
import Ring from "../components/Ring";
import { useEffect } from "react";
import Chart from "chart.js/auto";

export default function Scorecard() {
  useEffect(() => {
    const ctx = document.getElementById("scoreChart");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Baseline",
          "Upload parse",
          "Thermal fix",
          "Spacing rev",
          "Current",
        ],
        datasets: [
          {
            label: "Overall",
            data: [48, 56, 67, 79, 84],
            borderColor: "#00e5a0",
            backgroundColor: "rgba(0,229,160,0.08)",
            borderWidth: 3,
            fill: true,
            tension: 0.35,
            pointStyle: "circle",
            pointRadius: 6,
            pointBackgroundColor: "#00e5a0",
            pointBorderColor: "#00e5a0",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
          },
          {
            label: "Zone 0",
            data: [31, 39, 48, 58, 61],
            borderColor: "#ff6b6b",
            borderWidth: 2.5,
            fill: false,
            tension: 0.35,
            borderDash: [5, 5],
            pointStyle: "triangle",
            pointRadius: 6,
            pointBackgroundColor: "#ff6b6b",
            pointBorderColor: "#ff6b6b",
            pointBorderWidth: 2,
          },
          {
            label: "Zone 1",
            data: [57, 64, 74, 83, 84],
            borderColor: "#4da8ff",
            borderWidth: 2.5,
            fill: false,
            tension: 0.35,
            borderDash: [3, 3],
            pointStyle: "rectRot",
            pointRadius: 6,
            pointBackgroundColor: "#4da8ff",
            pointBorderColor: "#4da8ff",
            pointBorderWidth: 2,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          },
        },
        plugins: {
          legend: {
            align: "start",
            labels: {
              color: "#cfcfcf",
              usePointStyle: true,
              padding: 18,
              font: {
                size: 14,
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#9ca3af",
              font: { size: 14 },
            },
            grid: {
              color: "rgba(255,255,255,0.06)",
            },
          },
          y: {
            min: 20,
            max: 100,
            ticks: {
              stepSize: 10,
              color: "#9ca3af",
              callback: (value) => `${value}%`,
              font: { size: 14 },
            },
            grid: {
              color: "rgba(255,255,255,0.06)",
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <section className="screen" id="view-scorecard">
      <div
        className="grid cols-5-3"
        style={{
          gridTemplateColumns: "5fr 7fr",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        {/* Overall readiness */}
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="card-eyebrow mb-8">Overall readiness score</div>
            <div className="big-score">
              {SCORECARD.overall}
              <span>%</span>
            </div>
            <div className="text-dim fs-12 mt-8">
              Zone 0: {SCORECARD.zones.zone0}% · Zone 1:{" "}
              {SCORECARD.zones.zone1}% ready
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex gap-8">
            <button className="btn btn-ghost">Share Scorecard</button>
            <button className="btn btn-primary">Export PDF</button>
          </div>
        </div>

        {/* Certification confidence */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Certification confidence</div>
              <div className="card-title">6 compliance dimensions</div>
            </div>
          </div>

          <div className="dim-grid" id="dim-rings">
            {SCORECARD.dimensions.map((d) => (
              <Ring
                key={d.label}
                score={d.score}
                label={d.label}
                color={d.color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Score history */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-eyebrow">Score history</div>
            <div className="card-title">Improvement across iterations</div>
          </div>

          <span className="pill pill-good">
            <span className="pill-dot"></span>
            Complete
          </span>
        </div>

        <div
          className="chart-wrap"
          style={{
            height: "300px",
            width: "100%",
            padding: "12px 8px",
          }}
        >
          <canvas id="scoreChart"></canvas>
        </div>

      </div>
    </section>
  );
}