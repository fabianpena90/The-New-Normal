import React from "react";
import { Link } from "react-router-dom";
import Quotes from "./Quotes";

function HomePage(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/news`}>News</Link>
          </li>
          <li>
            <Link to={`/events`}>Events</Link>
          </li>
          <li>
            <Link to={`/weather`}>Weather</Link>
          </li>
          <li>
            <Link to={`/flight`}>Book a Flight</Link>
          </li>
          <li>
            <Link to={`/recipes`}>Cooking Recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
