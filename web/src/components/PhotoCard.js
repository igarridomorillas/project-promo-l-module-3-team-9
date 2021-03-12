import "../stylesheets/core/_mixins.scss";
import "../stylesheets/core/_variables.scss";
import "../stylesheets/layout/_resetSection.scss";
import Reset from "./Reset";
import { Link } from "react-router-dom";
import burger from "../images/burger-logo.png";
import defaultAvatar from "../images/pepino.gif";

function PhotoCard(props) {
  const {
    name,
    job,
    email,
    phone,
    photo,
    github,
    linkedin,
    palette,
  } = props.data;

  return (
    <section className="resetSection">
      <div className="resetSection__wrapper">
        <Reset handleReset={props.handleReset} />
        <article className={`js-card palette${palette}`}>
          <div className="sample">
            <div className="sample__bar"></div>
            <h3 className="sample__name js-namePreview">
              {name || "Nombre y Apellido"}
            </h3>
            <h4 className="sample__subtitle js-positionPreview">
              {job || "Front-end developer"}
            </h4>
            <div
              className="sample__photo js-profileImage"
              style={{
                backgroundImage: `url(${photo === "" ? defaultAvatar : photo})`,
              }}
            ></div>
            <nav className="social">
              <ul className="social__menu">
                <li className="social__menu--item">
                  <a
                    className="js-phonePreview"
                    href={phone === "" ? "#" : `tel:${phone}`}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a
                    className="js-emailPreview"
                    href={email === "" ? "#" : `mailto:${email}`}
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a
                    className="js-linkedinPreview"
                    href={
                      linkedin.includes("https://www.linkedin.com/")
                        ? `${linkedin}`
                        : linkedin
                        ? `https://www.linkedin.com/in/${linkedin}`
                        : `https://www.linkedin.com`
                    }
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a
                    className="js-githubPreview"
                    href={
                      github.includes("https://github.com/")
                        ? `${github}`
                        : `https://github.com/${github}`
                    }
                    target="_blank"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
                <li className="social__menu--home">
                  <Link to="/">
                    <img
                      src={burger}
                      className="social__menu--icon homeIcon filter"
                      title="thisIsMe web"
                      alt="this is me logo"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PhotoCard;
