import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/julia-kim-0a8b1418b/">
        <FontAwesomeIcon className="icon" icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/juliaykim/">
        <FontAwesomeIcon className="icon" icon="fa-brands fa-instagram" />
      </a>
    </div>
  );
}

export default Footer;
