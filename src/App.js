import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import axios from 'axios';
import News from './components/News'
import Weather from './components/Weather'


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
      </Switch>
    </div>
  );
}

export default App;
