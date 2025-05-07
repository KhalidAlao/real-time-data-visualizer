import { Line } from 'react-chartjs-2';
import { useData } from '../context/DataContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { data } = useData();

  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: 'Bitcoin Price (USD)',
        data: data.map((d) => d.price),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Real-time Bitcoin Price',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;