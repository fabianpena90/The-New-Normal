import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Events.css'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Restaurants() {
  
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getEvents(){
      const apiKey = 'aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z'
      let res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=musics,sports&sort=random&dmaId=200&apikey=${apiKey}`)
      // console.log(res.data._embedded.events)
      setEvents(res.data._embedded.events)
    }
    getEvents()
  }, [])

  function showEvents(){
   return events.map((eachEvent) => {
    // let uniqueEvents = [...new Set(events)];
      return (
      <div>
        <Container className="newsContainer" fluid="md">
        <Row className="justify-content-lg-center">
          <Col sm={8}>
          <h3>{eachEvent.name}</h3>
          <Image className="eventsImg" src={eachEvent.images[1].url} fluid />
          <p className="eventsDescription">{eachEvent.pleaseNote}</p>
          </Col>
        </Row>
      </Container>
        </div>
      )
    })
  }

  
  return (
    <div>
      <h1 className="eventsHeader">Events</h1>
      {showEvents()}
    </div>
  );
}

export default Restaurants;