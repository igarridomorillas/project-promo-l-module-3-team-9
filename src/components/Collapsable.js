import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import React, { useState } from "react";

function Collapsable(props) {
  const [classDesign, setClassDesign] = useState("collapsable--open");
  const changeClassDesign = () => {
    if (classDesign === "collapsable--open") {
      setClassDesign("collapsable--close");
    } else {
      setClassDesign("collapsable--open");
    }
  };
  const [classFill, setClassFill] = useState("collapsable--open");
  const changeClassFill = () => {
    if (classFill === "") {
      setClassFill("collapsable--open");
    } else {
      setClassFill("");
    }
  };
  const [classShare, setClassShare] = useState("collapsable--open");
  const changeClassShare = () => {
    if (classShare === "") {
      setClassShare("collapsable--open");
    } else {
      setClassShare("");
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
          <i
            className="collapsable__header--arrow  collapsable__turn fa fa-angle-down"
            aria-hidden="true"
          ></i>
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
          <i
            className="collapsable__header--arrow  collapsable__turn fa fa-angle-down"
            aria-hidden="true"
          ></i>
        </legend>
      </Fill>
      <Share className={classShare}>
        <legend
          className="collapsable__header js-share"
          onClick={changeClassShare}
        >
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
      </Share>
    </>
  );
}

export default Collapsable;
