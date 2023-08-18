import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "./Styles/index.css";
import { App } from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>
);
