import React from "react";

function Input(props) {
  return (
    <>
      <label htmlFOR={props.name} className="form__label">
        {props.label}
      </label>

      <input
        name={props.fullname} //cambiando el name del nombre podemos hacer que esta sea props.name y eliminar fullname de cada input en fill
        value=""
        type={props.type}
        id={props.name}
        className={
          "form__inputText js-" +
          props.name +
          " js-inputText js-input" +
          props.name
        }
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
