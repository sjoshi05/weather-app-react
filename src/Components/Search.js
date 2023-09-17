import React, { useState } from "react";
import axios from "axios";

import "../Styles/Search.css";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import Forecast from "./Forecast";
/*import GetCurrentLocation from "./CurrentLocation";*/

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [currentWeather, setCurrentWeather] = useState({ loaded: false });

  function ShowCurrentWeather(response) {
    setCurrentWeather({
      city: response.data.city,
      country: response.data.country,
      latitude: response.data.coordinates.latitude,
      longitude: response.data.coordinates.longitude,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      loaded: true,
    });
  }

  function UpdateCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    let apiKey = "e4f4205dbc58tb74afad5c9e48f3co33";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios
      .get(apiUrl)
      .then(ShowCurrentWeather)
      .catch((error) => {
        console.log(error);
      });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

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
            <button type="button" /*onClick={GetCurrentLocation}*/>📍</button>
          </div>
        </div>
      </div>
    </form>
  );

  if (currentWeather.loaded) {
    return (
      <div className="Search">
        {form}
        <CurrentWeatherInfo data={currentWeather} />
        <Forecast data={currentWeather} />
      </div>
    );
  } else {
    Search();
    return <p>"Loading..."</p>;
  }
}
