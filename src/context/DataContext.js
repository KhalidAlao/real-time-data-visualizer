import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Establish data context object
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Initial state for data, interval time, and error
  const [data, setData] = useState([]);
  const [intervalTime, setIntervalTime] = useState(5000);
  const [error, setError] = useState(null);

  // Asynchronous CoinCap API request
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin');
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        price: parseFloat(response.data.data.priceUsd),
      };
      setData((prevData) => [...prevData.slice(-19), newDataPoint]); // Keep the last 20 datapoints
      setError(null);
    } catch (err) {
      setError('Failed to fetch data. Please check your connection.');
    }
  };

  useEffect(() => {
    fetchData(); // Fetch once on mount immediately
    const interval = setInterval(fetchData, intervalTime);
    return () => clearInterval(interval); // Clean up interval when needed
  }, [intervalTime]);

  return (
    <DataContext.Provider value={{ data, intervalTime, setIntervalTime, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

