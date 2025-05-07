import { useData } from '../context/DataContext';

const Controls = () => {
  const { intervalTime, setIntervalTime } = useData();

  return (
    <div className="controls">
      <label>Update Interval: </label>
      <select
        value={intervalTime}
        onChange={(e) => setIntervalTime(Number(e.target.value))}
      >
        <option value={15000}>15 Seconds</option>
        <option value={30000}>30 Seconds</option>
        <option value={45000}>45 Seconds</option>
      </select>
    </div>
  );
};

export default Controls;
