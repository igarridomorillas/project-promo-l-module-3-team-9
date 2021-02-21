import React from "react";
import "../stylesheets/layout/_designSection.scss";

function Design(){
    return (
      <fieldset className="collapsable js-slide1">
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

        <div className="open collapsable__hide  design  js-content">
          <label htmlFOR="palette1" className="design__label">
            <div className="colors">Colores</div>
            <input
              id="palette1"
              type="radio"
              value="1"
              name="palette"
              className="design__radio js-palette"
              checked
            />

            <ul className="palette1">
              <li className="design__color color1">Color A</li>
              <li className="design__color color2">Color B</li>
              <li className="design__color color3">Color C</li>
            </ul>
          </label>

          <label htmlFOR="palette2" className="design__label">
            <input
              id="pallete2"
              type="radio"
              value="2"
              name="palette"
              className="design__radio js-palette"
            />
            <ul className="palette2">
              <li className="design__color color1">Color A</li>
              <li className="design__color color2">Color B</li>
              <li className="design__color color3">Color C</li>
            </ul>
          </label>

          <label htmlFOR="palette3" className="design__label">
            <input
              id="palette3"
              type="radio"
              value="3"
              name="palette"
              className="design__radio js-palette"
            />
            <ul className="palette3">
              <li className="design__color color1">Color A</li>
              <li className="design__color color2">Color B</li>
              <li className="design__color color3">Color C</li>
            </ul>
          </label>

          <label htmlFOR="palette4" className="design__label">
            <input
              id="palette4"
              type="radio"
              value="4"
              name="palette"
              className="design__radio js-palette"
            />
            <ul className="palette4">
              <li className="design__color color1">Color A</li>
              <li className="design__color color2">Color B</li>
              <li className="design__color color3">Color C</li>
            </ul>
          </label>
        </div>
      </fieldset>
    );
  }

export default Design;
