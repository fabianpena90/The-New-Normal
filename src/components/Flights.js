import React, { useState } from "react";
import axios from "axios";
import "./Flights.css";

function Flights(props) {
  const [flights, setFlights] = useState([]);
  const [firstCity, setFirstCity] = useState("");
  const [secondCity, setSecondCity] = useState("");
  const [toggle, setToggle] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios({
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${firstCity}/${secondCity}/2020-10-01`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "156b1c3fbamsh04ea083f92a6891p1a659ejsnc3c816dfdb7b",
        useQueryString: true,
      },
      params: {
        inboundpartialdate: "2020-12-01",
      },
    })
      .then((response) => {
        setFlights(response.data);
        setToggle(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Function quotes
  function getQuotes() {
    return flights.Quotes?.map((quote) => {
      return (
        <div>
          <div className="flighttable">
          <table class="ui celled table">
              <thead>
                <tr>
                  <th>carrier</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {flights.Carriers.map((eachCarrier) => {
                      if (
                        eachCarrier.CarrierId ===
                        quote.OutboundLeg.CarrierIds[0]
                      ) {
                        return <p>{eachCarrier.Name}</p>;
                      }
                    })}
                  </td>
                  <td>
                    <p>${quote.MinPrice}</p>
                  </td>
                  <td>
                    <p>{quote.OutboundLeg.DepartureDate.slice(0, 10)}</p>
                  </td>
                </tr>

                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  }

  function getCitya(e) {
    setFirstCity(e.target.value);
  }

  function getCityb(e) {
    setSecondCity(e.target.value);
  }

  return (
    <div className=" ui container">
      <div>
        <img className="ui medium centered image" src="./img/skyscanner.png" alt="title" />
        <h2 className="ui header centered aligned">Book a Flight</h2>
      </div>
      <div className="ui container fluid">
      <div className="ui labeled input right">
      <div className="ui label label">From:</div>
      <input onChange={getCitya} type="text" placeholder="From"/>
      </div>
      <div className="ui labeled input">
      <div className="ui label label">To:</div>
      <input onChange={getCityb} type="text" placeholder="To"/>
      </div>
      <button onSubmit={submit} className="ui button">Search</button>
      </div>
      {toggle ? (
        <div className="flightresults">
          <h2 className="flightHeading">
            {flights.Places?.[1].CityName} to {flights.Places?.[0].CityName}
          </h2>

          {getQuotes()}
        </div>
      ) : null}
    </div>
  );
}

export default Flights;
