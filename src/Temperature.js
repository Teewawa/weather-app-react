import React, { useState } from "react";
import "./App.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span
          className="temp"
          id="temperature"
        >
          {Math.round(props.celsius)}
        </span>
        {/*Display the Units: C | F*/}
        <small className="units">
          <p
            className="active"
            id="celsius-link"
          >
            °C
          </p>{" "}
          |{" "}
          <a
            href="/"
            id="fahrenheit-link"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span
          className="temp"
          id="temperature"
        >
          {Math.round(props.celsius)}
        </span>
        {/*Display the Units: C | F*/}
        <small className="units">
          <a
            href="/"
            id="celsius-link"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          |{" "}
          <p
            className="active"
            id="fahrenheit-link"
          >
            °F
          </p>
        </small>
      </div>
    );
  }
}
