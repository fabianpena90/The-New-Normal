import React, { useState } from "react";
import axios from "axios";
import "../Weather.css";

// Bootstrap
import InputGroup from "react-bootstrap/InputGroup";

import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
    // console.log(e.target.value)
    setCity(e.target.value);
  }

  return (
    <div>
      <div className="weather">
        <h2 className="weatherHeader">Weather</h2>
        <InputGroup size="md">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">
              Enter City:{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="weatherInput"
            onChange={cityName}
            aria-label="Medium"
            aria-describedby="inputGroup-sizing-sm"
            required="true"
            placeholder="City"
          />
          <Button onClick={getWeather} variant="info">
            Search
          </Button>
        </InputGroup>
      </div>
      <div>
        {toggle ? (
          <div className="weatherData">
            <Card style={{ width: "25rem", margin: "auto" }}>
              <Card.Body>
                <Card.Title>
                  <h1 className="cardTitle">{weather.name}</h1>
                </Card.Title>
                <Card.Text>
                  <p className="weather-description">{`The actual tempeture is ${weather.main?.temp}F`}</p>{" "}
                  {/* The ? is used for Optional Chaining*/}
                  <p className="weather-description">{`Feels like ${weather.main?.feels_like}F`}</p>{" "}
                  {/* The ? is used for Optional Chaining*/}
                  <p className="weather-description">{`${weather.weather[0].description}`}</p>
                  <p className="weather-description">
                    {weather.weather[0].main}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;
