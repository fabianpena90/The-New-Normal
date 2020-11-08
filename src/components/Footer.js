import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


function Footer(props) {
  return (
    <div className="ui container">
    <footer className="footer">
      <strong>&copy; Copyrights</strong> The New Normal - 2020 by Fabian Pena{" "}
      <Link to="https://github.com/fabianpena90" target="_blank">
        <FontAwesomeIcon className="logos" icon={faGithub} size="2x" />
      </Link>{" "}
      & Matt Angel{" "}
      <Link to="https://github.com/mattangelmia" target="_blank">
        {" "}
        <FontAwesomeIcon className="logos" icon={faGithub} size="2x" />
      </Link>
    </footer>
    </div>
  );
}

export default Footer;
