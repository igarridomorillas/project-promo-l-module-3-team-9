import React from "react";

function Input(props) {
  return (
    <>
      <label htmlFOR={props.name} className="form__label">
        {props.label}
      </label>

      <input
        name={props.name}
        value=""
        type={props.type}
        id={props.name}
        className={
          "form__inputText js-" +
          props.name +
          " js-inputText js-input" +
          props.name
        } //comprobar las mayusculas de cada clase, a lo mejor hay que cambiarlas
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
