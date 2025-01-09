// src/components/Weather.js
import React, { useState } from 'react';
import fetchWeather from '../services/weatherService';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeather(city);
    setWeather(data);
    setCity('');
  };

  return (
    <div>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
