import React, { useState } from "react";
import axios from "axios";
import "../Flights.css";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { ListGroupItem } from "react-bootstrap";

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
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>${quote.MinPrice}</p>
                  </td>
                  <td>
                    <p>{quote.OutboundLeg.DepartureDate}</p>
                  </td>
                </tr>

                <tr></tr>
              </tbody>
            </Table>
          </div>
          {/* <ListGroup>
            <ListGroup.Item>
              {" "}
              <p>${quote.MinPrice}</p>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup> */}
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
        <h2 className="flightheader">Book a Flight</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flightform">
      <form >
      <Form onSubmit={submit}>
          <InputGroup size="md">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Enter City:{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={getCityb}
              className="weatherInput"
              aria-label="Medium"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="From"
              required="true"
            />
            <InputGroup.Text id="inputGroup-sizing-lg">
              Enter City:{" "}
            </InputGroup.Text>
            <FormControl
              placeholder="To"
              onChange={getCitya}
              className="weatherInput"
              aria-label="Medium"
              aria-describedby="inputGroup-sizing-sm"
              require="true"
            />
            <Button variant="info" type="submit">Search</Button>
          </InputGroup>
        </Form>
      </form>
       
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
