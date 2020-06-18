import React from "react";
import icon from "../../assets/icons8-linkedin.svg";


function Footer() {
  return (
    <footer className="footer">
      <h5>Qandeel Labs</h5>
      <a target="_blank" href="https://www.linkedin.com/in/qandeel-mya/">
        <img className="icon" src={icon} alt="linkedIn icon" />
      </a>
    </footer>
  );
}

export default Footer;
