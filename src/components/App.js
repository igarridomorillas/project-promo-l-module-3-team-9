import "../stylesheets/App.scss";
import logoHeader from "../images/thisismeLogo@2x.png";
import logoCard from "../images/logo-card.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share.js";

function App() {
  /* MARTA */
  <Header/>
  /* ESTO SE QUEDA */
  const AppMain = (
    <main className="mainProfile">
      <div className="mainProfile__wrapper">
        {/* CRISTINA */}
        <section className="resetSection">
          <div className="resetSection__wrapper">
            <div className="trash">
              <button className="button js-reset">
                <i className="far fa-trash-alt"></i>
                <a className="button__reset " href="">
                  Reset
                </a>
              </button>
            </div>
            <article className="js-card">
              <div className="sample">
                <div className="sample__bar"></div>
                <h3 className="sample__name js-namePreview">Nombre Apellido</h3>
                <h4 className="sample__subtitle js-positionPreview">
                  Front-end developer
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
        {/* ESTO SE QUEDA */}
        <form className="form js-form" action="" method="POST">
          <div className="form__wrapper">
            {/* MERCHE */}
            <Design />
            {/* NOBODY */}
            <Fill />
            {/* NATALIA */}
            <Share />
            {/* ESTO SE QUEDA */}
          </div>
        </form>
      </div>
    </main>
  );
  /* MARTA */
  <Footer/>

  const AppReturn = (
    <div className="App">
      <Header/> {AppMain} <Footer/>
    </div>
  );
  return AppReturn;
}

export default App;

/* function App() {
  <div className="App">
    <Header/>
    <Card-preview/>
    <Form>
      <Design/>
      <Fill/>
      <Share/>
    </Form>
    <Footer/>
  </div>
} */
