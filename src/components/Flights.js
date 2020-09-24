import React, { useState } from 'react';
import axios from 'axios';

function Flights(props) {
  const [flights, setFlights] = useState([])
  const [firstCity, setFirstCity] = useState('')
  const [secondCity, setSecondCity] = useState('')

  function submit(e) {
    e.preventDefault()
    axios({
      "method":"GET",
      "url":`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${firstCity}/${secondCity}/2020-10-01`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key":"156b1c3fbamsh04ea083f92a6891p1a659ejsnc3c816dfdb7b",
      "useQueryString":true
      },"params":{
      "inboundpartialdate":"2019-12-01"
      }
      })
      .then((response)=>{
        console.log(response.data)
        setFlights(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })    
  }

  function getQuotes() {
    return flights.Quotes?.map((quote) => {
      return (
        <div>
          <p>${quote.MinPrice}</p>
          <p>{quote.OutboundLeg.DepartureDate}</p>
        </div>
        )
    })
  }
  

  function getCitya(e){
    setFirstCity(e.target.value)
  }

  function getCityb(e){
    setSecondCity(e.target.value)
  }

  
  return (
    <div>
    <h1>Book a Flight</h1>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={submit}>
      <input onChange={getCitya} type="text" name="from" placeholder="City"/>
      <input onChange={getCityb} type="text" name="to" placeholder="City"/>
      <button>Submit</button>
    </form>
      <h3>{flights.Places?.[0].CityName} to {flights.Places?.[1].CityName}</h3>
     
      {getQuotes()}
    </div>
  );
}

export default Flights;