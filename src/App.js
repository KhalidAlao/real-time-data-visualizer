import { DataProvider } from './context/DataContext';
import Chart from './components/Chart';
import Controls from './components/Controls';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Bitcoin Price Tracker</h1>
        <Controls />
        <ErrorDisplay />
        <Chart />
      </div>
    </DataProvider>
  );
}

export default App;