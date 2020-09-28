import React, { useState } from "react";
import axios from "axios";
import "../Flights.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


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
        inboundpartialdate: "2019-12-01",
      },
    })
      .then((response) => {
        console.log(response.data);
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
            <Table variant="dark" striped bordered hover>
              <thead>
                <tr>
                  <th>Carrier</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {flights.Carriers.map((eachCarrier) => {
                      if(eachCarrier.CarrierId === quote.OutboundLeg.CarrierIds[0]){
                        return(
                          <p>{eachCarrier.Name}</p>
                          )
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
            </Table>
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
    <div>
      <div>
      <img className="newNY" src="./img/skyscanner.png" alt="title"/>
        <h2 className="flightheader">Book a Flight</h2>
      </div>
      <div className="flightform">
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>From:</Form.Label>
          <Form.Control type="text" placeholder="Enter city" onChange={getCitya}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>To:</Form.Label>
          <Form.Control type="text" placeholder="Enter city" onChange={getCityb}/>
        </Form.Group>
        <Button variant="info" type="submit">Search</Button>
      </Form>
      </div>
      {toggle ? (
      <div className="flightresults">
        <h2 className="flightHeading">{flights.Places?.[1].CityName} to {flights.Places?.[0].CityName}</h2>


        
        {getQuotes()}
      </div>
      ): null }
    </div>
  );
}

export default Flights;
