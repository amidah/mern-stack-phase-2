import axios from 'axios';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './types';


export const fetchWeather = city => {
    return async dispatch => {
        dispatch({ type: FETCH_WEATHER_REQUEST });

        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fcdf067ef273d9c4c5ecc2a2c1d61a7`);
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
        }
        catch(error){
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    }
}

