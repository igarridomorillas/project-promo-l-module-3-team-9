import "../stylesheets/App.scss";
import Footer from "./Footer";
import logoThisIsMe from "../images/thisismeLogo@2x.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <main className="main">
        <div className="shake-slow shake-constant main__logo">
          <img
            className="main__logo--image"
            src={logoThisIsMe}
            alt="Logo This is me"
            title="logo"
          />
        </div>

        <section className="main__slogan">
          <h2 className="main__slogan--title">Crea tu tarjeta de visita</h2>
          <p className="main__slogan--text">Tienes mucho que ofrecer</p>
          <p className="main__slogan--text">¡Preséntate al mundo!</p>
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
            <Link to="/CardPage">Comenzar</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
