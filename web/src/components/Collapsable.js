import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import React, { useState } from "react";
import topBurguer from "../images/top.png";
import middleBurguer from "../images/middle.png";
import bottomBurguer from "../images/bottom.png";

function Collapsable(props) {
  const [shake, setShake] = useState("shake-slow");
  const HandleShake = () => {
    if (shake === "") {
      setShake("shake-slow");
    } else {
      setShake("");
    }
  };
  const [classDesign, setClassDesign] = useState("collapsable--close");
  const changeClassDesign = () => {
    if (classDesign === "collapsable--open") {
      setClassDesign("collapsable--close");
    } else {
      setClassDesign("collapsable--open");
    }
  };
  const [classFill, setClassFill] = useState("collapsable--close");
  const changeClassFill = () => {
    if (classFill === "collapsable--close") {
      setClassFill("collapsable--open");
    } else {
      setClassFill("collapsable--close");
    }
  };
  const [classShare, setClassShare] = useState("collapsable--close");
  const changeClassShare = () => {
    if (classShare === "collapsable--close") {
      setClassShare("collapsable--open");
    } else {
      setClassShare("collapsable--close");
    }
  };

  return (
    <>
      <Design
        data={props.data}
        className={classDesign}
        handleInputLifting={props.handleInputLifting}
      >
        <legend
          className="collapsable__header js-design"
          onClick={changeClassDesign}
        >
          <i
            className="collapsable__header--icon fa fa-object-ungroup"
            aria-hidden="true"
          ></i>
          <span className="collapsable__title">Diseña</span>
          <img
            src={topBurguer}
            className={`collapsable__header--arrow  collapsable__turn ${shake}`}
            onChange={HandleShake}
          ></img>
        </legend>
      </Design>
      <Fill
        data={props.data}
        className={classFill}
        handleInputLifting={props.handleInputLifting}
        /* name={props.name} */ //value={props.value} //cambiado value por name
      >
        <legend
          className="collapsable__header js-fill"
          onClick={changeClassFill}
        >
          <i
            className="collapsable__header--icon fa fa-keyboard-o"
            aria-hidden="true"
          ></i>
          <span className="collapsable__title">Rellena</span>
          <img
            src={middleBurguer}
            className={`collapsable__header--arrow  collapsable__turn ${shake}`}
            onChange={HandleShake}
          ></img>
        </legend>
      </Fill>
      <Share
        data={props.data}
        className={classShare}
        cardCreated={props.cardCreated}
        handleButtonLifting={props.handleButtonLifting}
      >
        <legend
          className="collapsable__header js-share"
          onClick={changeClassShare}
          data={props.data}
        >
          <i
            className="collapsable__header--icon fa fa-share-alt"
            aria-hidden="true"
          ></i>
          <span className="collapsable__title">Comparte</span>
          <img
            src={bottomBurguer}
            className={`collapsable__header--arrow  collapsable__turn  ${shake}`}
            onChange={HandleShake}
          ></img>
        </legend>
      </Share>
    </>
  );
}

export default Collapsable;
