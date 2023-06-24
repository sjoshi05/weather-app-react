import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  let form = (
    <form onSubmit={HandleSubmit}>
      <input
        type="search"
        name="city"
        placeholder="Enter a city"
        onChange={UpdateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  function ShowWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
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

    axios.get(apiUrl).then(ShowWeather);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>Current Temperature:</strong>
            {Math.round(weather.temperature)}°C
          </li>
          <li>
            <strong>Description:</strong> {weather.description}
          </li>
          <li>
            <strong>Humidity:</strong> {weather.humidity}%
          </li>
          <li>
            <strong>Wind:</strong> {Math.round(weather.wind)} km/h
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
