import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UnitContext } from "./App";

export default function CurrentWeatherTemp({ celsius }) {
  const { unit, setUnit } = useContext(UnitContext);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentWeatherTemp">
        {Math.round(celsius)}
        <span className="fs-6 align-text-top p-1 ">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (celsius * 9) / 5 + 32;

    return (
      <div className="CurrentWeatherTemp">
        {Math.round(fahrenheit)}
        <span className="fs-6 align-text-top p-1 ">
          {""}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
