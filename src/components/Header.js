import logoHeader from "../images/thisismeLogo@2x.png";
import "../stylesheets/layout/_header.scss";
import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
          <header className="header">
          <div className="header__wrapper">
            <img
              className="header__wrapper--brandCard"
              title="logo"
              src={logoHeader}
              alt="Logo This is me"
            />
          </div>
        </header>

      );
  }
}
export default Header;

