import React, { useState } from 'react';
import axios from 'axios';



function Weather(props) {

  const [weather, setWeather] = useState([]); // Weather Data
  const [city, setCity] = useState('') // Value from input tag


    async function getWeather(e) {
      const apiKey = '8fccd9a5790e18a0df5eb2dedd85ff19'
      const units = 'imperial'
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&icon=04d`);
      // console.log(res.data); 
      setWeather(res.data);
    }



  function cityName(e) {
    // console.log(e.target.value)
    setCity(e.target.value)
  }

  
  return (
    <div>
       <input onChange={cityName} type="text" name="search" />
       <button onClick={getWeather}>Submit</button>
       {weather.name}
    </div>
  );
}

export default Weather;


