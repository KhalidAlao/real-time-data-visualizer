import { useData } from '../context/DataContext';

const ErrorDisplay = () => {
  const { error } = useData();
  return error ? <div className="error-message">{error}</div> : null;
};

export default ErrorDisplay;
