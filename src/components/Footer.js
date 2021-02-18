import "../stylesheets/layout/_footer.scss";
import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <footer className="footer">
        <div className="footer__wrapper">
          <small className="footer__wrapper--copy">This is me &copy; 2021</small>
          <img
            className="footer__wrapper--adalab"
            src="./assets/images/logo-adalab.png"
            alt="logo-adalab"
          />
        </div>
      </footer>

      );
  }
}
export default Footer;

