import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Import Components
import HomePage from './components/HomePage'
import News from './components/News'
import Weather from './components/Weather'
import Events from './components/Events'
import Flights from './components/Flights'


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
 
  return (
    <div className="App">
    <HomePage />
      <h1>The New Normal - News</h1>
      <Switch>
          <Route path="/news" render={(props) => <News news={news} {...props} />}></Route>
          <Route path="/weather" render={(props) => <Weather {...props} />}></Route>
          <Route path="/events" render={(props) => <Events {...props} />}></Route>
          <Route path="/flight" render={(props) => <Flights {...props} />}></Route>
      </Switch>
    </div>
  );
}

export default App;
