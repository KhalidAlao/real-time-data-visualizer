import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Establish data context object
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [intervalTime, setIntervalTime] = useState(5000);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        price: parseFloat(response.data.bitcoin.usd),
      };
      setData((prevData) => [...prevData.slice(-19), newDataPoint]);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Please check your connection.');
    }
  };

  useEffect(() => {
    fetchData(); // Fetch once on mount immediately
    const interval = setInterval(fetchData, intervalTime);
    return () => clearInterval(interval);
  }, [intervalTime]);

  return (
    <DataContext.Provider value={{ data, intervalTime, setIntervalTime, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
