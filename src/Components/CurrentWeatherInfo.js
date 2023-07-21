import React from "react";
import FormattedDate from "./FormattedDate.js";

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
          {Math.round(data.temperature)}°C
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
          <img src={data.icon} alt={data.description} />
        </li>
      </ul>
    </div>
  );
}
