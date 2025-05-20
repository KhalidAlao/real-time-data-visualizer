// src/components/Chart.js
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

// Predefined colors for each currency
const currencyColors = {
  bitcoin: 'rgb(75, 192, 192)',
  ethereum: 'rgb(153, 102, 255)',
  solana: 'rgb(255, 159, 64)',
  cardano: 'rgb(255, 99, 132)',
  
};

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
  const { currencyData, selectedCurrencies } = useData();

  // Generate datasets for all selected currencies
  const chartData = {
    labels: currencyData[selectedCurrencies[0]]?.map((d) => d.time) || [],
    datasets: selectedCurrencies.map((currency) => ({
      label: `${currency.toUpperCase()} Price (USD)`,
      data: currencyData[currency]?.map((d) => d.price) || [],
      borderColor: currencyColors[currency],
      tension: 0.1,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Real-time Cryptocurrency Prices',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;