import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Collapsable() {
  return (
    <>
      <Design>
        <legend className="collapsable__header js-design">
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
      <Fill>
        <legend className="collapsable__header js-fill">
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
      <Share>
        <legend className="collapsable__header js-share">
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
