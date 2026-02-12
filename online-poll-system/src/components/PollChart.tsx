import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

type Option = {
  id: number;
  text: string;
  votes: number;
};

type PollChartProps = {
  options: Option[];
};

function PollChart({ options}: PollChartProps) {
  const data = {
    labels: options.map((option) => option.text),
    datasets: [
      {
        label: "Votes",
        data: options.map((option) =>option.votes),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return <Bar data={data} />;
}

export default PollChart;