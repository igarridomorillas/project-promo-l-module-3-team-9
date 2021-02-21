import "../stylesheets/App.scss";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share.js";
import PhotoCard from "./PhotoCard.js";

function App() {
  /* MARTA */
  <Header/>
  /* ESTO SE QUEDA */
  const AppMain = (
    <main className="mainProfile">
      <div className="mainProfile__wrapper">
        {/* CRISTINA */}
        <PhotoCard />
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
