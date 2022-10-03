import React, { useState } from "react";
import "./App.css";
import feelsLikeIcon from "./images/feelsLikeTemp.png";
import humidityIcon from "./images/humidity.png";
import windSpeedIcon from "./images/windSpeed.png";

export default function Daily(props) {
  //Updating the object
  let dailyWeather = {
    city: props.data.name,
    country: props.data.sys.country,
    temperature: props.data.main.temp,
    description: props.data.weather[0].description,
    feelsLike: props.data.main.feels_like,
    humidity: props.data.main.humidity,
    wind: props.data.wind.speed,
  };
  console.log(props.data);

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
            src={feelsLikeIcon}
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
            src={humidityIcon}
            className="humidityIcon"
            alt="humidity icon"
          />
          Humidity: <span id="humidity">{dailyWeather.humidity}%</span>
        </div>
      </div>
      <div className="row p-0">
        <div className="col p-0 just-left">
          <img
            src={windSpeedIcon}
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
