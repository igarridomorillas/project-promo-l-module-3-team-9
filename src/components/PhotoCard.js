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
        <Reset />
        <article className="js-card">
          <div className="sample">
            <div className="sample__bar"></div>
            <h3 className="sample__name js-namePreview">{props.name}</h3>
            <h4 className="sample__subtitle js-positionPreview">
              {props.position}
            </h4>
            <div className="sample__photo js-profileImage"></div>
            <nav className="social">
              <ul className="social__menu">
                <li className="social__menu--item">
                  <a href="" className="js-phonePreview">
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a className="js-emailPreview" href="">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a className="js-linkedinPreview" href="" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="social__menu--item">
                  <a className="js-githubPreview" href="" target="_blank">
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

//Le paso props y pinto name y position con el render de PhotoCard (incrustándolas con {} en el JSX). Pero como su madre -Main, en este caso- realmente no las ha definido, con default props puedo elegir cuáles quiero que tenga por defecto. CUIDADO porque si en Main pongo esto <PhotoCard name="" position=""/>, las defaultProps interpretarán que le está pasando a su hija un string vacío, y no se "activarán".
PhotoCard.defaultProps = {
  name: "Nombre Apellido",
  position: "Front-End Developer",
};

export default PhotoCard;
