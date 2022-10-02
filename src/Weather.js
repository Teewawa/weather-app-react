import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Daily from "./Daily";

export default function Weather(props) {
  const [dataStatus, setDataStatus] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});

  //Handle api response
  function handleResponse(response) {
    setDataStatus(true);
    setWeatherData(response.data);
  }

  //Search for weather data for the default city & search inputs
  function search() {
    const apiKey = "a0ba5ae0dd4ffae6cc80c17468df9ce7";
    let units = "metric";
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${endpoint}?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //Prevent page reload upon submitting search input, run search function
  //And clears search bar after submit
  function handleSubmit(event) {
    event.preventDefault();
    search();
    event.target.reset();
  }

  //Update state: city to search input
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //If status is ready, display weather data
  //Else search the default city & set status to ready
  if (dataStatus) {
    return (
      <div className="Weather">
        {/*Column 1: "Card 1" - displays on the left hand side */}
        <div className="col-sm-3 p-0">
          <div className="card p-3 h-100 bg-card-left">
            <div className="row p-0">
              {/*Search Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city..."
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>

              <Daily data={weatherData} />
            </div>
          </div>
        </div>

        {/*Hourly forecast - note bootstrap */}
        {/*Weekly forecast - note bootstrap */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
