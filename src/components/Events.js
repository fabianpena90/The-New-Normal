import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Restaurants() {
  
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getRestaurants(){
      const apiKey = 'aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z'
      let res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&apikey=${apiKey}`)
      console.log(res.data._embedded.events)
      setEvents(res.data._embedded.events)
    }
    getRestaurants()
  }, [])

  function showEvents(){
   return events.map((eachEvent) => {
      return (
        <div>
        <h3>{eachEvent.name}</h3> 
        <img style={{width:'400px'}} src={eachEvent.images[1].url} alt="events"/>
        <p>{eachEvent.pleaseNote}</p>
        </div>
      )
    })
  }

  
  return (
    <div>
      {showEvents()}
    </div>
  );
}

export default Restaurants;