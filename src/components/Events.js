import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'


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

        <div className="ui relaxed items">
        <div className="item">
        <div className="ui medium image">
          <img src={eachEvent.images[1].url} alt="events"/>
        </div>
        <div className="content">
          <Link to={eachEvent.url} className="header">{eachEvent.name}</Link>
        <div className="meta"><span className="cinema">IFC</span></div>
        <div className="description">
        <h4 className="ui header">Price Range</h4>
          ${eachEvent.priceRanges?.[0]?.min} - 
          ${eachEvent.priceRanges?.[0]?.max}
        </div>
        <div className="description">
          <h5 className="ui header">Location: {eachEvent._embedded.venues[0].name}</h5>
          {eachEvent._embedded.venues[0].address.line1}
        </div>
        <div className="extra">
          <button className="ui secondary right floated button">
            <NavLink to={eachEvent.url} target="_blank">
              Buy Tickets
            </NavLink><i aria-hidden="true" className="right chevron icon"></i>
          </button>
        </div>
        </div>
        </div>
        </div>
      )
    })
  }

  
  return (
    <div className=" ui container" fluid>
      <img className="ui medium centered image" src="./img/ticketmasterLogo.png" alt="Ticketmaster" />
      {showEvents()}
    </div>
  );
}

export default Restaurants;