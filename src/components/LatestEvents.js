import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LatestEvents(props) {
  // console.log(props.events.events)
  // console.log(props.events._embedded)
//  for( let i = 0; i < 5; i++ ) {
//    console.log(props._embedded.events[i].name)
//  }
  // let newEvents = props._embedded.events.map((event) => {
  //   console.log(event)
  //   return (
  //     {event}
  //   )
  // })
  let [events, setEvents] = useState([])
  useEffect(() => {
    async function getEvents() {
      const apiKey = 'aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z'
      let res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&apikey=${apiKey}`);
      setEvents(res.data._embedded)
      
      for(let i = 0; i < 10; i++) {
        return (
          <div>
          <ul>
            <li>{events.events[i].name}</li>
          </ul>
          </div>
          
          )
      }
    }
    getEvents();
  }, []);


  return (
    <div>
    {events}
    </div>
  );
}

export default LatestEvents;

