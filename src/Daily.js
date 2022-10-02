import React, { useState } from "react";
import "./App.css";

export default function Daily(props) {
  let daily = props.data;
  //Updating the object
  let dailyWeather = {
    city: daily.name,
    country: daily.sys.country,
    temperature: daily.main.temp,
    description: daily.weather[0].description,
    feelsLike: daily.main.feels_like,
    humidity: daily.main.humidity,
    wind: daily.wind.speed,
  };

  console.log("daily", daily);
  return (
    <div className="Daily">
      {/*Get the current date & time of user's location*/}
      <div className="locationTimeDate">
        <span
          className="locationDate"
          id="location-Date"
        >
          Thur, Sept 01, 2022{" "}
        </span>{" "}
        <span
          className="locationTime"
          id="location-Time"
        >
          12:30PM
        </span>
      </div>

      {/*Display the City, Region, Country*/}
      <span>
        <h1
          className="location"
          id="location"
        >
          {dailyWeather.city},
        </h1>
        <span
          className="region"
          id="region"
        ></span>
        <span
          className="country"
          id="country"
        >
          {dailyWeather.country}
        </span>
      </span>

      {/*Display the current temperature*/}
      <div className="weatherForecast">
        <span
          className="temp"
          id="temperature"
        >
          {Math.round(dailyWeather.temperature)}
        </span>

        {/*Display the Units: C | F*/}
        <small className="units">
          <a
            href="/"
            className="active"
            id="celsius-link"
          >
            °C
          </a>{" "}
          |
          <a
            href="/"
            id="fahrenheit-link"
          >
            °F
          </a>
        </small>
        <br />

        {/*Display the current weather condition/status*/}
        <div className="weatherStatus">{dailyWeather.description}</div>
        <img
          src="../images/dustSand.png"
          className="weatherIcon-main"
          id="weatherIconMain"
          alt="weather Icon"
        />
      </div>

      {/*Display Feels like Temp*/}
      <div className="row p-0 mt-2">
        <div className="col p-0 just-left">
          <img
            src=""
            className="feelsLikeIcon"
            alt="thermostat"
          />
          Feels like:{" "}
          <span id="feelsLike">{Math.round(dailyWeather.feelsLike)} °C</span>
        </div>
      </div>

      <div className="row p-0">
        <div className="col p-0 just-left">
          <img
            src="/"
            className="humidityIcon"
            alt="humidity icon"
          />
          Humidity: <span id="humidity">{dailyWeather.humidity}%</span>
        </div>
      </div>
      <div className="row p-0">
        <div className="col p-0 just-left">
          <img
            src="/"
            className="windSpeedIcon"
            alt="wind speed icon"
          />
          Wind:{" "}
          <span id="windSpeed">{Math.round(dailyWeather.wind * 3.6)} km/h</span>
        </div>
      </div>
    </div>
  );
}
