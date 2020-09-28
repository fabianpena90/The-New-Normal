import React from "react";
import "../App.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGithub,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  return (
    <div className="footer">
      <strong>&copy; Copyrights</strong> The New Normal - 2020 by Fabian Pena{" "}
      <a href="https://github.com/fabianpena90">
        <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} size="2x" />
      </a>{" "}
      & Matt Angel{" "}
      <a href="https://github.com/mattangelmia">
        {" "}
        <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
