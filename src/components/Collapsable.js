import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import React, { useState } from "react";

function Collapsable() {
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
    if (classFill === "collapsable--open") {
      setClassFill("collapsable--close");
    } else {
      setClassFill("collapsable--open");
    }
  };
  const [classShare, setClassShare] = useState("collapsable--open");
  const changeClassShare = () => {
    if (classShare === "collapsable--open") {
      setClassShare("collapsable--close");
    } else {
      setClassShare("collapsable--open");
    }
  };

  return (
    <>
      <Design className={classDesign}>
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
            className="collapsable__header--arrow  collapsable__turn fa fa-angle-up"
            aria-hidden="true"
          ></i>
        </legend>
      </Design>
      <Fill className={classFill}>
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
            className="collapsable__header--arrow  collapsable__turn fa fa-angle-up"
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
            className="collapsable__header--arrow  collapsable__turn fa fa-angle-up"
            aria-hidden="true"
          ></i>
        </legend>
      </Share>
    </>
  );
}

export default Collapsable;
