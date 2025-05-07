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
        <option value={1000}>1 Second</option>
        <option value={5000}>5 Seconds</option>
        <option value={10000}>10 Seconds</option>
      </select>

        </div>
    )


}

export default Controls;