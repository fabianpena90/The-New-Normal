import React from 'react';
import { Link } from 'react-router-dom';


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
      </ul>
      </nav>
    </div>
  );
}

export default HomePage;