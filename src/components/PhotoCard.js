import React from "react";
import logoCard from "../images/logo-card.png";
import "../stylesheets/core/_mixins.scss";
import "../stylesheets/core/_variables.scss";
import "../stylesheets/layout/_resetSection.scss";
import Reset from "./Reset";

function PhotoCard(props) {
  return (
    <section className="resetSection">
      <div className="resetSection__wrapper">
        <Reset handleReset={props.handleReset} />
        <article className={`js-card palette${props.palette}`}>
          <div className="sample">
            <div className="sample__bar"></div>
            <h3 className="sample__name js-namePreview">
              {props.name || "Nombre y Apellido"}
            </h3>
            <h4 className="sample__subtitle js-positionPreview">
              {props.job || "Front-end developer"}
            </h4>
            <div className="sample__photo js-profileImage"></div>
            <nav className="social">
              <ul className="social__menu">
                <li className="social__menu--item">
                  <a
                    className="js-phonePreview"
                    href={props.phone === "" ? "#" : `tel:${props.phone}`}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a
                    className="js-emailPreview"
                    href={props.email === "" ? "#" : `mailto:${props.email}`}
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a
                    className="js-linkedinPreview"
                    href={
                      props.linkedin.includes("https://www.linkedin.com/in/")
                        ? `${props.linkedin}`
                        : `https://www.linkedin.com/in/${props.linkedin}`
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
                      props.github.includes("https://github.com/")
                        ? `${props.github}`
                        : `https://github.com/${props.github}`
                    }
                    target="_blank"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
                <li className="social__menu--home">
                  <a
                    className=""
                    href="http://beta.adalab.es/project-promo-l-module-2-team-2/"
                    target="_blank"
                  >
                    <img
                      src={logoCard}
                      className="social__menu--icon homeIcon filter"
                      title="thisIsMe web"
                      alt="this is me logo"
                    />
                  </a>
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
