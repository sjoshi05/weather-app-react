import React, { useState } from "react";
import axios from "axios";

import "../Styles/Forecast.css";
import ForecastDay from "./ForecastDay.js";

export default function Forecast({ data }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function ShowForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col">
                  <ForecastDay forecastData={dailyForecast} />;{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let city = data.city;
    let units = "metric";
    let apiKey = "e4f4205dbc58tb74afad5c9e48f3co33";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(ShowForecast);

    return null;
  }
}
