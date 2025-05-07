import { DataProvider } from './context/DataContext';
import Chart from './components/Chart';
import Controls from './components/Controls';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="container">
        <h1>Bitcoin Price Tracker</h1>
        <div className="card">
          <Controls />
          <ErrorDisplay />
          <Chart />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
