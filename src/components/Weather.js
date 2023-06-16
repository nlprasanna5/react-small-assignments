// WeatherApp.js
import React, { useState } from 'react';
import styles from './Weather.module.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'fd3704b405379b15b4bfb4b7d7831d7c';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); // Reset weather data to null in case of error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className={styles.weatherApp}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Get Weather
        </button>
      </form>

      {weatherData && weatherData.weather && weatherData.weather.length > 0 ? (
        <div className={styles.weatherInfo}>
          <h2>{weatherData.name}</h2>
          <div className={styles.detailsContainer}>
            <div className={styles.weatherIcon}>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
              <p>{weatherData.weather[0].description}</p>
            </div>
            <div className={styles.temperature}>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Max Temperature: {weatherData.main.temp_max}°C</p>
              <p>Min Temperature: {weatherData.main.temp_min}°C</p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
          </div>
        </div>
      ) : (
        <p>{city && "City not found"}</p>
      )}
    </div>
  );
};

export default WeatherApp;
