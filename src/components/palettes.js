import React from 'react';

function Palettes(props){

const PaletteItems =["A", "B", "C"];


const paintList = PaletteItems.map((item, index) => {
return (
      <li key={index} className={"design__color color" + (index + 1)}>
        color{item}
      </li>
    );
  });
return (
<label htmlFOR={props.htmlFOR} className="design__label">
    <input
     id={props.id}
      type={props.type}
      value={props.value}
      name={props.name}
      className="design__radio js-palette"
      checked
    />
      <ul className={"palette" + props.value}>{paintList}</ul>
    
    </label>
  );
  }



export default Palettes;