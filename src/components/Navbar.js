import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
  <div id="navbar" class="ui stackable large fixed inverted menu borderless">
    <div class="header item">The New Normal</div>
    <div class="right menu">
    <Link class="item" to="/">Home</Link>
    <Link class="item" to="/news">News</Link>
    <Link class="item" to="/events">Events</Link>
    <Link class="item" to="/weather">Weather</Link>
    <Link class="item" to="/flight">Search Flights</Link>
    <Link class="item" to="/recipes">Recipes</Link>
    <Link class="item" to="/coronavirus">COVID-19</Link>
    </div>
  </div> 
  );
}

export default Navbar;
