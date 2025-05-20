import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedCurrencies, setSelectedCurrencies] = useState(['bitcoin']);
  const [currencyData, setCurrencyData] = useState({});
  const [intervalTime, setIntervalTime] = useState(5000);
  const [error, setError] = useState(null);

  // Wrap fetchData in useCallback to memoize it
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCurrencies.join(',')}`
      );

      const newData = response.data.reduce((acc, coin) => {
        const newDataPoint = {
          time: new Date().toLocaleTimeString(),
          price: coin.current_price,
        };
        // Use previous state via functional update
        acc[coin.id] = [...(currencyData[coin.id] || []).slice(-19), newDataPoint];
        return acc;
      }, {});

      setCurrencyData(newData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data. Check your connection.');
    }
  }, [selectedCurrencies, currencyData]); 

  useEffect(() => {
    const interval = setInterval(fetchData, intervalTime);
    return () => clearInterval(interval);
  }, [intervalTime, fetchData]); 

  return (
    <DataContext.Provider
      value={{
        currencyData,
        selectedCurrencies,
        setSelectedCurrencies,
        intervalTime,
        setIntervalTime,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);