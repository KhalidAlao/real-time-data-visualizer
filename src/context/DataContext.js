import {createContext, UseState, UseEffect, useContext} from 'react';
import axios from 'axios';

// Establish data context
const DataContext = createContext();

export const DataProvider = ({children}) => {
    // Inital State for data, time and error
    const [date, SetDate] = useState([]);
    const [intervalTime, setIntervalTime] = useState(5000); 
    const [error, setError] = useState(null);


    // CoinCap API
}