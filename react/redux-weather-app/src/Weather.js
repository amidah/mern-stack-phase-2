import React from 'react';

function Weather({ loading, weatherData, error }){

    if(loading){
       return  <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    if(!weatherData){
        return null;
    }

    const { name, main } = weatherData;

    return (
        <div>
            <h2>{name}</h2>
            <p>Current temperature: {main.temp}°F</p>
            <p>Feels like: {main.feels_like}°F</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Pressure: {main.pressure}hPa</p>
        </div>
    );
}

export default Weather;