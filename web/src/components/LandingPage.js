import "../stylesheets/App.scss";
import React, { useState } from "react";
import Footer from "./Footer";
import logoDelicious from "../images/logo-delicious.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [shake, setShake] = useState("shake-slow");
  const HandleShake = () => {
    if (shake === "") {
      setShake("shake-slow");
    } else {
      setShake("");
    }
  };
  return (
    <>
      <main className="main">
        <div className={`main__logo ${shake}`}>
          <img
            className="main__logo--image"
            src={logoDelicious}
            alt="Logo Delicious"
            title="logo"
            onChange={HandleShake}
          />
        </div>

        <section className="main__slogan">
          <h2 className="main__slogan--title">Crea tu tarjeta de visita</h2>
          <p className="main__slogan--text">
            Crea mejores contactos profesionales
          </p>
          <p className="main__slogan--text">de forma fácil y cómoda</p>
        </section>

        <section className="main__icons">
          <div className="main__icons--tandem">
            <i className="iconMain far fa-object-ungroup"></i>
            <span className="main__icons--sections">Diseña</span>
          </div>
          <div className="main__icons--tandem">
            <i className="iconMain far fa-keyboard"></i>
            <span className="main__icons--sections">Rellena</span>
          </div>
          <div className="main__icons--tandem">
            <i className="iconMain fas fa-share-alt"></i>
            <span className="main__icons--sections">Comparte</span>
          </div>
        </section>
        <div className="main__star">
          <div className="main__start--btn">
            <Link to="/cardpage">Comenzar</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
