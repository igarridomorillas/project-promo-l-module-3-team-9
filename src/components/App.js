import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import getDataFromApi from "../services/api";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
