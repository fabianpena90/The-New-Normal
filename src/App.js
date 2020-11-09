import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

// Importing Components
import Navbar from "./components/Navbar"
import News from "./components/News";
import Weather from "./components/Weather";
import Events from "./components/Events";
// import Youtube from "./components/Youtube";
import Recipes from "./components/Recipes";
import Quotes from "./components/Quotes";
import Covid from "./components/Covid";

function App() {
  let [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      let res = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=YrxSelvAUjEcesUKWBypGGJC4gWF596y"
      );
      setNews(res.data.results);
    }
    getNews();
  }, []);

  return (
    <div className="">
    <Navbar />
    {/* <img className="ui fluid image" src="./img/bg.jpg" alt=""/> */}
      <Switch>
        <Route exact path="/" render={(props) => <Quotes />}></Route>
        <Route
          exact
          path="/news"
          render={(props) => <News news={news} {...props} />}
        ></Route>
        <Route
          exact
          path="/weather"
          render={(props) => <Weather {...props} />}
        ></Route>
        <Route
          path="/events"
          render={(props) => <Events {...props} />}
        ></Route>
        {/* <Route
          exact
          path="/youtube"
          render={(props) => <Youtube  />}
        ></Route> */}
        <Route
          exact
          path="/recipes"
          render={(props) => <Recipes {...props} />}
        ></Route>
        <Route
          exact
          path="/coronavirus"
          render={(props) => <Covid {...props} />}
        ></Route>
      </Switch>
      {/* <Footer /> */}
    </div>   
  );
}

export default App;
