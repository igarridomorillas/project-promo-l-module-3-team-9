import React from "react";
import "../stylesheets/layout/_designSection.scss";
import Palettes from "./palettes";

function Design(props) {
  return (
    <fieldset className="collapsable js-slide1">
      <div>{props.children}</div>

      <div className="open collapsable__hide  design  js-content">

    
        <label htmlFOR="palette1" className="design__label">
          <div className="colors">Colores</div>
          <Palettes 
            id="palette1"
            type="radio"
            value="1"
            name="palette"
            className="design__radio js-palette"
            checked
          />
        

        </label>
       
        <label htmlFOR="palette2" className="design__label">
        <Palettes 
            id="pallete2"
            type="radio"
            value="2"
            name="palette"
            className="design__radio js-palette"
          />
         
        </label>

        <label htmlFOR="palette3" className="design__label">
        <Palettes 
            id="palette3"
            type="radio"
            value="3"
            name="palette"
            className="design__radio js-palette"
        />
          
        
        </label>

        <label htmlFOR="palette4" className="design__label">
          <Palettes
            id="palette4"
            type="radio"
            value="4"
            name="palette"
            className="design__radio js-palette"
          />
     
          
        </label>
      </div>
    </fieldset>
  );
}

export default Design;
