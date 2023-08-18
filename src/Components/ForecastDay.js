import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherIcon from "./WeatherIcon.js";
import { UnitContext } from "./App.js";

export default function ForecastDay({ forecastData }) {
  const { unit } = useContext(UnitContext);

  let celsiusMaxTemp = Math.round(forecastData.temperature.maximum);
  let celsiusMinTemp = Math.round(forecastData.temperature.minimum);

  let fahrenheitMaxTemp = Math.round(
    (forecastData.temperature.maximum * 9) / 5 + 32
  );
  let fahrenheitMinTemp = Math.round(
    (forecastData.temperature.minimum * 9) / 5 + 32
  );

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

  if (unit === "celsius") {
    return (
      <div className="ForecastDay">
        <span>
          <strong> {Day()}</strong>
        </span>
        <WeatherIcon code={forecastData.condition.icon} size={36} />
        <span>
          {" "}
          <strong>{celsiusMaxTemp}° </strong>|{" "}
        </span>
        <span>{celsiusMinTemp}°</span>
      </div>
    );
  } else {
    return (
      <div className="ForecastDay">
        <span>
          <strong> {Day()}</strong>
        </span>
        <WeatherIcon code={forecastData.condition.icon} size={36} />
        <span>
          {" "}
          <strong>{fahrenheitMaxTemp}° </strong>|{" "}
        </span>
        <span>{fahrenheitMinTemp}°</span>{" "}
      </div>
    );
  }
}
