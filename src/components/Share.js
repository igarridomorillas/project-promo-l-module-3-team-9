import "../stylesheets/layout/_shareSection.scss";
import ShareCreated from "./ShareCreated";
import ShareFail from "./ShareFail";
import sendDataToApi from "../services/api";
import React, { useState } from "react";

function Share(props) {
  const [cardCreated, setCardCreated] = useState("");

  const handleButton = () => {
    sendDataToApi().then((data) => {
      const dataURL = data.url;
      console.log(data);
      setCardCreated(dataURL);
    });
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
      {cardCreated === "" ? null : <ShareCreated />}
      {props.data.name !== "" && props.data.job !== "" ? null : <ShareFail />}
    </>
  );
}
export default Share;
