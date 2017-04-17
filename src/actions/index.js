import axios from 'axios';

const API_KEY = 'db282c16a930c84e89fd4aab4e281ec4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nl`;
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
