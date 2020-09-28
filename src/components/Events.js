import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Events.css'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Restaurants() {
  
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getEvents(){
      const apiKey = 'aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z'
      let res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=musics,sports&sort=random&dmaId=200&apikey=${apiKey}`)
      console.log(res.data._embedded.events)
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
            <Card.Title className="halfBody"><strong>{eachEvent.name}</strong></Card.Title>
            <Card.Text>
            <h6>Price Range</h6>
            ${eachEvent.priceRanges?.[0]?.min} - 
            ${eachEvent.priceRanges?.[0]?.max}
            </Card.Text> 
            <Card.Text>
            <h5>Location: {eachEvent._embedded.venues[0].name}</h5>
            {eachEvent._embedded.venues[0].address.line1}
            </Card.Text>
            <Button href={eachEvent.url} variant="success" type="submit">Buy Tickets</Button>
            <Card.Text></Card.Text>
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