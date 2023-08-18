import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherIcon from "./WeatherIcon.js";
import { UnitContext } from "../index.js";

export default function ForecastDay({ forecastData }) {
  const { unit, setUnit } = useContext(UnitContext);

  let maxTemp = Math.round(forecastData.temperature.maximum);
  let minTemp = Math.round(forecastData.temperature.minimum);

  function Day() {
    let date = new Date(forecastData.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <span>
        <strong> {Day()}</strong>
      </span>
      <WeatherIcon code={forecastData.condition.icon} size={36} />
      <span>
        {" "}
        <strong>{maxTemp}° </strong>|{" "}
      </span>
      <span>{minTemp}°</span>
    </div>
  );
}
