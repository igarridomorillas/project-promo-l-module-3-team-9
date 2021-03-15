import "../stylesheets/layout/_footer.scss";
import logoAdalab from "../images/logo-adalab.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <small className="footer__wrapper--copy">
          Delicious Code &copy; 2021
        </small>
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
};

export default Footer;
