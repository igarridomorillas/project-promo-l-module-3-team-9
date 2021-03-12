import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const handleInput = (ev) => {
    debugger;
    props.handleInputLifting(ev.target.value, ev.target.name);
  };

  /*   const handleInput = (ev) => {
    props.handleInputLifting({
    inputName:ev.target.value
    inputValue:ev.target.value
)}; */

  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>

      <input
        name={props.name}
        value={props.value}
        type={props.type}
        id={props.name}
        className={"form__inputText"}
        placeholder={props.placeholder}
        onChange={handleInput}
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
