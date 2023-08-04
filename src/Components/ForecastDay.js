import React from "react";

import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay({ forecastData }) {
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
      <div> {Day()}</div>
      <WeatherIcon code={forecastData.condition.icon} />
      <span>{maxTemp}° | </span>
      <span>{minTemp}°</span>
    </div>
  );
}
