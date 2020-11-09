import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'


function Navbar(props) {
  return (
  <div id="navbar" className="ui fluid large fixed inverted menu borderless">
    {/* <div className="header item"><Link to='/'>The New Normal</Link></div> */}
    {/* <div className="right menu"> */}
    <Link className="item" to="/">Home</Link>
    <Link className="item" to="/news">News</Link>
    <Link className="item" to="/events">Events</Link>
    <Link className="item" to="/weather">Weather</Link>
    {/* <Link className="item" to="/youtube">Youtube</Link> */}
    <Link className="item" to="/recipes">Recipes</Link>
    <Link className="item" to="/coronavirus">COVID-19</Link>
    {/* </div> */}
  </div> 
  );
}

export default Navbar;
