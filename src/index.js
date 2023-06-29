import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import Search from "./Components/Search";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <main>
        <h1>Weather App </h1>
        <Search />
      </main>
      <footer className="footer">
        <a
          href="https://github.com/sjoshi05/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by Sandhya Joshi
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
