import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from "./actions";
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";

function App(){
  const weatherData = useSelector(state => state.weatherData);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleSubmit = city => {
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSubmit={handleSubmit}/>
      <Weather loading={loading} weatherData={weatherData} error={error}/>
    </div>
  )

}
export default App;