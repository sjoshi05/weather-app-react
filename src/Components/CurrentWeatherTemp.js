import React, { useState } from "react";

export default function CurrentWeatherTemp({ celsius }) {
  const [unit, setUnit] = useState("celsius");

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
        {Math.round(celsius)}°C |{" "}
        <a href="/" onClick={showFahrenheit}>
          {" "}
          °F{" "}
        </a>
      </div>
    );
  } else {
    let fahrenheit = (celsius * 9) / 5 + 32;

    return (
      <div className="CurrentWeatherTemp">
        {Math.round(fahrenheit)}
        <a href="/" onClick={showCelsius}>
          °C
        </a>
        °F
      </div>
    );
  }
}
