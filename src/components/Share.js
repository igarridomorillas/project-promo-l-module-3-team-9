import "../stylesheets/layout/_shareSection.scss";
import ShareCreated from "./ShareCreated";

function Share(props) {
  return (
    <>
      <fieldset className="collapsable js-slide3">
        <div>{props.children}</div>

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
      <ShareCreated />
    </>
  );
}
export default Share;
