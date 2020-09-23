import React, { useState } from 'react';
import axios from 'axios';



function Weather(props) {

  const [weather, setWeather] = useState({ weather: ['description: ']}); // Weather Data
  const [city, setCity] = useState('') // Value from input tag
  const [toggle, setToggle] = useState(false)

    async function getWeather() {
      const apiKey = '8fccd9a5790e18a0df5eb2dedd85ff19'
      const units = 'imperial'
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&icon=04d`);
      console.log(res.data); 
      setWeather(res.data);
      setToggle(true)
    }

  function cityName(e) {
    // console.log(e.target.value)
    setCity(e.target.value)
  }

  
  return (
    <div>
      <label for="search">Enter city name: </label>
      <input onChange={cityName} type="text" name="search" placeholder="City" required="" />
      <button style={{margin: '0 10px'}} onClick={getWeather}>Submit</button>
      {toggle ? (
    <div>
      <p>{`The wheather in ${weather.name}`}</p>
      <p>{`The actual tempeture is ${weather.main?.temp}F`}</p> {/* The ? is used for Optional Chaining*/}
      <p>{`Feels like ${weather.main?.feels_like}F`}</p> {/* The ? is used for Optional Chaining*/}
      <p>{`${weather.weather[0].description}`}</p> 
      <p>{weather.weather[0].main}</p> 
    </div>
      ): null }
    </div>
  );
}


export default Weather;


