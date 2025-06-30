import { useData } from '../context/DataContext';

const currencies = ['bitcoin', 'ethereum', 'solana', 'cardano'];

const CurrencySelector = () => {
  const { selectedCurrencies, setSelectedCurrencies } = useData();

  // Add and removes a currency from selection
  const toggleCurrency = (currency) => {
    setSelectedCurrencies((prev) =>
      prev.includes(currency)
        ? prev.filter((c) => c !== currency) // Deselect
        : [...prev, currency] // Select
    );
  };

  return (
    <div className="currency-selector">
      <h3>Select Cryptocurrencies:</h3>
      {currencies.map((currency) => (
        <label key={currency}>
          <input
            type="checkbox"
            checked={selectedCurrencies.includes(currency)}
            onChange={() => toggleCurrency(currency)}
          />
          {currency.toUpperCase()}
        </label>
      ))}
    </div>
  );
};

export default CurrencySelector;