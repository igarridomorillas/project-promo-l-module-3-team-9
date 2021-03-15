import logoHeader from "../images/logo-delicious.png";
import "../stylesheets/layout/_header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img
            className="header__wrapper--brandCard"
            title="logo"
            src={logoHeader}
            alt="Logo This is me"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
