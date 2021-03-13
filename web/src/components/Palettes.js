import React from "react";

function Palettes(props) {
  const PaletteItems = ["light", "medium", "dark"];

  const paintList = PaletteItems.map((item, index) => (
    <li key={index} className={"design__color color" + (index + 1)}>
      color{item}
    </li>
  ));

  const handleInput = (ev) => {
    props.handleInputLifting(ev.target.value, ev.target.name);
  };

  return (
    <label htmlFor={props.htmlFor} className="design__label">
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        name={props.name}
        className="design__radio js-palette"
        onChange={handleInput}
        checked={props.checked}
      />
      <ul className={"palette" + props.value}>{paintList}</ul>
    </label>
  );
}

export default Palettes;
