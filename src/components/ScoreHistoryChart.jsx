import { Line } from "react-chartjs-2";

export default function ScoreHistoryChart() {
    const data = {
        labels: ["Baseline", "Upload parse", "Thermal fix", "Spacing rev", "Current"],
        datasets: [
            { label: "Overall", data: [48, 56, 67, 79, 84], borderColor: "#00e5a0", backgroundColor: "rgba(0,229,160,0.08)", tension: 0.4 },
            { label: "Zone 0", data: [31, 39, 48, 58, 61], borderColor: "#ff5c5c", borderDash: [4, 2], tension: 0.4 },
            { label: "Zone 1", data: [57, 64, 74, 83, 84], borderColor: "#4da8ff", borderDash: [4, 2], tension: 0.4 }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { min: 20, max: 100, ticks: { callback: v => v + "%" } }
        },
        plugins: { legend: { display: false } }
    };

    return <Line data={data} options={options} />;
}
