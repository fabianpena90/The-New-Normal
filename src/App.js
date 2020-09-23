import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import axios from 'axios';
import News from './components/News'
import Weather from './components/Weather'
import LatestEvents from './components/LatestEvents.js'


function App() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews() {
      let res = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=YrxSelvAUjEcesUKWBypGGJC4gWF596y');
      // console.log(res.data.results); 
      setNews(res.data.results);
    }
    getNews();    
  }, []);

  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getEvents() {
      const apiKey = 'aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z'
      let res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&apikey=${apiKey}`);
      console.log(res.data)
      setEvents(res.data)
    }
    getEvents();
  }, [])

 
  return (
    <div className="App">
    <HomePage />
      <h1>The New Normal - News</h1>
      <Switch>
          <Route path="/news" render={(props) => <News news={news} {...props} />}></Route>
          <Route path="/weather" render={(props) => <Weather {...props} />}></Route>
          <Route path="/events" render={(props) => <LatestEvents events={events}{...props} />}></Route>
      </Switch>
    </div>
  );
}

export default App;
