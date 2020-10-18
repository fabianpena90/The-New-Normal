import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


function Footer(props) {
  return (
    <div className="footer">
      <strong>&copy; Copyrights</strong> The New Normal - 2020 by Fabian Pena{" "}
      <a href="https://github.com/fabianpena90" target="_blank">
        <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} size="2x" />
      </a>{" "}
      & Matt Angel{" "}
      <a href="https://github.com/mattangelmia" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
