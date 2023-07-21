import React, { useState } from "react";
import axios from "axios";

import "../Styles/Search.css";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({ loaded: false });

  let form = (
    <form onSubmit={HandleSubmit}>
      <div className="gridContainer">
        <div className="searchGrid">
          <div className="searchBox">
            <input
              type="search"
              name="city"
              placeholder="Enter a city"
              onChange={UpdateCity}
              className="searchField"
            />
            <input type="submit" value="🔍" className="searchButton " />
          </div>

          <div className="currentLocation">
            <button type="button">📍</button>
          </div>
        </div>
      </div>
    </form>
  );

  function ShowCurrentWeather(response) {
    setCurrentWeather({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: response.data.time,
    });
  }

  function UpdateCity(event) {
    setCity(event.target.value);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = "e4f4205dbc58tb74afad5c9e48f3co33";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(ShowCurrentWeather);
  }

  if (currentWeather.loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>City: </strong>
            {currentWeather.city}
          </li>
          <li>
            <strong>Current Temperature: </strong>
            {Math.round(currentWeather.temperature)}°C
          </li>
          <li>
            <strong>Description: </strong> {currentWeather.description}
          </li>
          <li>
            <strong>Humidity: </strong> {currentWeather.humidity}%
          </li>
          <li>
            <strong>Wind: </strong> {Math.round(currentWeather.wind)} km/h
          </li>
          <li>
            <img src={currentWeather.icon} alt={currentWeather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "e4f4205dbc58tb74afad5c9e48f3co33";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(ShowCurrentWeather);
  }
}
