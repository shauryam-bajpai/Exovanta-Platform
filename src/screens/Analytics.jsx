import { useEffect } from "react";
import Chart from "chart.js/auto";

export default function Analytics() {
  useEffect(() => {
    // Portfolio overview (bar chart)
    const ctxOverview = document.getElementById("analyticsChart");

    new Chart(ctxOverview, {
      type: "bar",
      data: {
        labels: [
          "Wireless sensor",
          "Inspection robot",
          "Handheld",
          "Motor driver",
        ],
        datasets: [
          {
            label: "Readiness %",
            data: [84, 72, 91, 68],
            backgroundColor: [
              "rgba(0, 229, 160, 0.72)",
              "rgba(197, 151, 56, 0.72)",
              "rgba(0, 229, 160, 0.82)",
              "rgba(214, 82, 82, 0.72)",
            ],
            borderRadius: {
              topLeft: 5,
              topRight: 5,
              bottomLeft: 5,
              bottomRight: 5,
            },
            borderSkipped: false,
            barThickness: 60
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false,
            position: "top", // horizontal above chart
            labels: {
              boxWidth: 12,
              color: "#8d9b9f",
              font: { size: 12 }
            }
          }
        },
        layout: {
          padding: {
            top: 10,
            right: 0,
            left: 0,
          }
        },

        scales: {
          x: {
            grid: {
              color: "rgba(255,255,255,0.025)",
              drawBorder: false
            },
            ticks: {
              color: "#8d9b9f",
              font: {
                size: 11,
                weight: 500
              },
              padding: 5,
              maxRotation: 0,
              minRotation: 0
            }
          },

          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10,
              autoSkip: false,
              color: "#8d9b9f",
              callback: (v) => `${v}%`,
              font: {
                size: 12
              }
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
              drawBorder: false
            }
          }
        }
      }
    });

    // Industry benchmark (horizontal bar chart)
    const ctxBenchmark = document.getElementById("benchmarkChart");
    new Chart(ctxBenchmark, {
      type: "bar",
      data: {
        labels: ["Your product", "Wireless sensors", "IIC portfolio", "Top quartile"],
        datasets: [
          {
            label: "Readiness %",
            data: [85, 72, 78, 80],
            backgroundColor: [
              "rgba(0, 229, 160, 0.6)",
              "rgba(156, 163, 175, 0.6)",
              "rgba(197, 151, 56, 0.6)",
              "rgba(77, 168, 255, 0.6)"
            ],
            borderRadius: 8,      // round all corners
            borderSkipped: false,  // ensures left edges are rounded too
            barThickness: 25
          }
        ]
      },
      options: {
        indexAxis: "y", // horizontal bars
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,        // increments of 20
              callback: (v) => `${v}%`
            },
            grid: { color: "rgba(255,255,255,0.05)", drawBorder: false }
          },
          y: {
            ticks: {
              color: "#8d9b9f",
              font: { size: 10 }
            },
            grid: { display: false }
          }
        }
      }
    });


    // Gap trend (stacked area chart)
    const ctxGap = document.getElementById("gapTrendChart");

    new Chart(ctxGap, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Project A",
            data: [18, 15, 12, 8, 6],
            fill: true,
            borderColor: "#4da8ff",
            backgroundColor: "rgba(77,168,255,0.18)",
            tension: 0.25,
            pointRadius: 4,
            pointBackgroundColor: "#4da8ff",
            pointBorderWidth: 0,
          },
          {
            label: "Project B",
            data: [19, 14, 11, 8, 6],
            fill: true,
            borderColor: "#9b8cff",
            backgroundColor: "rgba(155,140,255,0.12)",
            tension: 0.25,
            pointRadius: 4,
            pointStyle: "rectRot",
            pointBackgroundColor: "#9b8cff",
            pointBorderWidth: 0,
          },
          {
            label: "Project C",
            data: [12, 11, 9, 7, 5],
            fill: true,
            borderColor: "#d9ac45",
            backgroundColor: "rgba(217,172,69,0.14)",
            tension: 0.25,
            pointRadius: 4,
            pointStyle: "triangle",
            pointBackgroundColor: "#d9ac45",
            pointBorderWidth: 0,
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false
          }
        },

        scales: {
          x: {
            ticks: {
              color: "#8d9b9f",
              font: { size: 12 }
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
              drawBorder: false
            }
          },

          y: {
            min: 4,
            max: 20,
            ticks: {
              stepSize: 2,
              color: "#8d9b9f",
              font: { size: 12 }
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
              drawBorder: false
            }
          }
        },

        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }, []);

  return (
    <section className="screen active" id="view-analytics">
      <div className="card-eyebrow mb-8">Portfolio intelligence</div>
      <h2 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px", marginBottom: "16px" }}>
        Analytics
      </h2>

      <div className="grid cols-2" style={{ gap: "16px", marginBottom: "16px" }}>
        {/* Portfolio overview */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Portfolio overview</div>
              <div className="card-title">Readiness by product type</div>
            </div>
          </div>
          <div
            className="chart-wrap"
            style={{
              height: "200px",
              width: "400px",
              padding: "0 0 0 0"
            }}
          >
            <canvas id="analyticsChart"></canvas>
          </div>
        </div>

        {/* Industry benchmark */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Industry benchmark</div>
              <div className="card-title">Anonymised comparison</div>
            </div>
          </div>
          <div className="chart-wrap"
            style={{
              height: "220px",
              width: "95%"
            }}>
            <canvas id="benchmarkChart"></canvas>
          </div>
        </div>

        {/* Gap trend */}
        <div
          className="card"
          style={{
            gridColumn: "1 / -1",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <div className="card-header">
            <div>
              <div className="card-eyebrow">Gap trend</div>
              <div className="card-title">Learning curve across projects</div>
            </div>
          </div>

          <div
            className="chart-wrap"
            style={{
              height: "220px",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              padding: "0 10px"
            }}
          >
            <canvas id="gapTrendChart"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
