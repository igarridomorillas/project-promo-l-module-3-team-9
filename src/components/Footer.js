import "../stylesheets/layout/_footer.scss";
import React from "react";
import logoAdalab from "../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <small className="footer__wrapper--copy">This is me &copy; 2021</small>
        <a href="https://adalab.es/" target="_blank">
          <img
            className="footer__wrapper--adalab"
            src={logoAdalab}
            alt="logo-adalab"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
