import "../stylesheets/layout/_shareSection.scss";
import ShareCreated from "./ShareCreated";
import ShareFail from "./ShareFail";
import senddatatoapi from "../services/api";
import React, { useState } from "react";

const Share = (props) => {
  const userData = props.children.props.data;

  const [cardCreated, setCardCreated] = useState("");

  const handleButton = (ev) => {
    ev.preventDefault();
    senddatatoapi(userData).then((data) => {
      const dataError = data.error;
      const dataSuccess = data.success;
      console.log(data);
      setCardCreated(dataError);
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
      {userData.name !== "" &&
      userData.job !== "" &&
      userData.photo !== "" &&
      userData.email !== "" &&
      userData.phone !== "" &&
      userData.linkedin !== "" &&
      userData.github !== "" ? null : (
        <ShareFail data={userData} />
      )}
    </>
  );
};
export default Share;
