import { ResultsProps } from "../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Resultado Desbaste",
    },
  },
};

function Chart({ results }: ResultsProps) {
  const labels = results.map((result) => result.diameter);

  const data = {
    labels,
    datasets: [
      {
        label: "FT",
        data: results.map((result) => result.ft),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "FD",
        data: results.map((result) => result.fd),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "FR",
        data: results.map((result) => result.fr),
        backgroundColor: "rgba(60, 179, 113, 0.5)",
      },
    ],
  };
  return (
    <div className="col-start-4 col-end-12">
      <Bar options={options} data={data} />
    </div>
  );
}

export default Chart;
