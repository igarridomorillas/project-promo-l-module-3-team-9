import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const handleInputChange = (ev) => {
    console.log("Me están cambiando", ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>

      <input
        name={props.name}
        type={props.type}
        id={props.name}
        className={"form__inputText"} //comprobar las mayusculas de cada clase, a lo mejor hay que cambiarlas
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
