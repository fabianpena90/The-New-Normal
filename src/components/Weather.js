import React, { useState } from "react";
import axios from "axios";
import "../Weather.css"


function Weather(props) {
  const [weather, setWeather] = useState({ weather: ["description: "] }); // Weather Data
  const [city, setCity] = useState(""); // Value from input tag
  const [toggle, setToggle] = useState(false);

  async function getWeather() {
    const apiKey = "8fccd9a5790e18a0df5eb2dedd85ff19";
    const units = "imperial";
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&icon=04d`
    );
    // console.log(res.data);
    setWeather(res.data);
    setToggle(true);
  }

  function cityName(e) {
    setCity(e.target.value);
  }

  return (
    <div className=" ui container">
    <img src="./img/weatherLogo.png" class="ui medium centered image" alt="Weather"/>
    <div className="ui big fluid icon input">
    <input onChange={cityName} type="text" placeholder="Enter City..."/>
    <button 
      className="ui icon button"
      onClick={getWeather}
      >
      <i aria-hidden="true" className="search icon"></i>
      </button>
    </div>
      <div>
        {toggle ? (
          <div className="card-content">
          <div className="ui card">
          <div className="image">
          <img 
            src={`http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`} 
            alt="weatherimage"
          />
          </div>
          <div className="content">
          <div className="header">{weather.name}</div>
          <div className="description">
            <p className="weather-description">{`The actual tempeture is ${weather.main?.temp}F`}</p>{" "}
            <p className="weather-description">{`Feels like ${weather.main?.feels_like}F`}</p>{" "}
            <p className="weather-description">{`${weather.weather[0].description}`}</p>
            <p className="weather-description">
              {weather.weather[0].main}
            </p>
          </div>
          </div>
          </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;