import "../stylesheets/layout/_shareSection.scss";
import ShareCreated from "./ShareCreated";
import ShareFail from "./ShareFail";
import senddatatoapi from "../services/api";

const Share = (props) => {
  const userData = props.children.props.data;

  const handleButton = (ev) => {
    ev.preventDefault();

    senddatatoapi(userData).then((data) => {
      const dataURL = data.cardURL;
      if (data.success) {
        props.handleButtonLifting(dataURL);
      }
    });
  };
  const serverMessage = () => {
    let message = "";
    if (
      props.cardCreated === "" &&
      (userData = {
        palette: "1",
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: "",
      })
    ) {
      message = null;
    } else if (props.cardCreated === "") {
      message = <ShareFail />;
    } else {
      message = <ShareCreated shareCreated={props.cardCreated} />;
    }
    return message;
  };
  return (
    <>
      <fieldset className={"collapsable js-slide3 " + props.className}>
        <div>{props.children}</div>

        <div className="shareContainer js-content">
          <section className="share collapsable__hide">
            <div className="share__btn js-create-btn">
              <button className="share__btn--text" onClick={handleButton}>
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
      {serverMessage()}
    </>
  );
};
export default Share;
