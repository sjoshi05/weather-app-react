import React, { createContext, useState } from "react";
import "bootstrap";
import Search from "./Components/Search";

export const UnitContext = createContext();

export default function App() {
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="App">
      <main>
        <UnitContext.Provider value={{ unit, setUnit }}>
          <Search defaultCity="Atlanta" />
        </UnitContext.Provider>
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
  );
}
