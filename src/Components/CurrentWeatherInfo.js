import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import CurrentWeatherTemp from "./CurrentWeatherTemp.js";

export default function CurrentWeatherInfo({ data }) {
  return (
    <div className="CurrentWeatherInfo">
      <ul>
        <li>
          <strong>City: </strong>
          {data.city}
        </li>
        <li>
          <strong>Last Updated: </strong> <FormattedDate date={data.date} />
        </li>
        <li>
          <strong>Current Temperature: </strong>
          <CurrentWeatherTemp celsius={data.temperature} />
        </li>
        <li>
          <strong>Description: </strong> {data.description}
        </li>
        <li>
          <strong>Humidity: </strong> {data.humidity}%
        </li>
        <li>
          <strong>Wind: </strong> {Math.round(data.wind)} km/h
        </li>
        <li>
          <WeatherIcon code={data.icon} />
        </li>
      </ul>
    </div>
  );
}
