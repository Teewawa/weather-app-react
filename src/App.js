import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      {/*Bootstrap class styling to achieve card-design UI */}
      <div className="weather-container">
        <div className="row p-2 main">
          <Weather defaultCity="Guam" />
        </div>
      </div>
    </div>
  );
}
