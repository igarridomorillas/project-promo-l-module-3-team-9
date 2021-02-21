import "../stylesheets/App.scss";
import logoHeader from "../images/thisismeLogo@2x.png";
import logoCard from "../images/logo-card.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Design from "./Design";
import Fill from "./Fill";


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
            <fieldset className="collapsable js-slide3">
              <legend className="collapsable__header js-share">
                <i
                  className="collapsable__header--icon fa fa-share-alt"
                  aria-hidden="true"
                ></i>
                <span className="collapsable__title">Comparte</span>
                <i
                  className="collapsable__header--arrow  collapsable__turn fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </legend>

              <div className="shareContainer js-content">
                <section className="share collapsable__hide">
                  <div className="share__btn js-create-btn">
                    <button className="share__btn--text">
                      <i
                        className="share__btn--icon fa fa-address-card-o"
                        aria-hidden="true"
                      ></i>
                      Crear tarjeta
                    </button>
                  </div>
                </section>
              </div>
            </fieldset>
            <section className="created js-created created--hidden">
              <h3 className="created__title">La tarjeta ha sido creada:</h3>
              <a className="created__url js-card-result" href=""></a>
              <button className="created__btnTwitter">
                <a
                  href="https://twitter.com/?lang=es"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i> Compartir
                  en twitter
                </a>
              </button>
            </section>
            <section className="js-error created__error created--hidden">
              <h4 className="created__error--title">
                Por favor complete los datos:
              </h4>
              <p className="js-consoleError"></p>
            </section>
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
