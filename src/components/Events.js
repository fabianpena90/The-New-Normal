import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Events.css'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

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
      <div className="eventsCard">
      <Card style={{ width: "50rem", margin: "auto"}}>
          <Card.Img variant="top" src={eachEvent.images[1].url} />
          <Card.Body>
            <Card.Title className="halfBody">{eachEvent.name}</Card.Title>
            <Card.Text>{eachEvent.pleaseNote}</Card.Text>
            {/* <Card.Text>{news.geo_facet[0]}</Card.Text>
            <Card.Text>{news.item_type}</Card.Text>
            <Card.Text>{news.byline}</Card.Text>
            <Card.Link href={news.short_url}>Read whole article</Card.Link> */}
          </Card.Body>
      </Card>
        </div>
      )
    })
  }

  
  return (
    <div>
      <h2 className="eventsHeader">Events</h2>
      {showEvents()}
    </div>
  );
}

export default Restaurants;