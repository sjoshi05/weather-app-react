import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import CurrentWeatherTemp from "./CurrentWeatherTemp.js";
import "../Styles/CurrentWeatherInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeatherInfo({ data }) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="container">
        <div className="row currentWeatherGrid ">
          <div className="col-12 city text-start">
            {data.city}, {data.country}{" "}
          </div>

          <div className="col-3 currentIcon text-end pt-2 pe-0">
            <WeatherIcon code={data.icon} size={52} />
          </div>
          <div className="col-3 currentTemp text-start ps-2 pe-0">
            <CurrentWeatherTemp celsius={data.temperature} />
          </div>

          <div className="col-sm-6">
            <ul className="currentSummary text-start ps-3">
              <li>
                <FormattedDate date={data.date} />
              </li>
              <li>
                <strong>Weather:</strong> {data.description}
              </li>
              <li>
                <strong>Humidity:</strong> {data.humidity}%
              </li>
              <li>
                <strong>Wind:</strong> {Math.round(data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
