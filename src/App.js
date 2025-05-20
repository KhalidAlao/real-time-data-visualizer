import { DataProvider } from './context/DataContext';
import Chart from './components/Chart';
import Controls from './components/Controls';
import CurrencySelector from './components/CurrencySelector';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="container">
        <h1>Crytocurrency Price Tracker</h1>
        <div className="card">
        <CurrencySelector />
          <Controls />
          <ErrorDisplay />
          <Chart />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
