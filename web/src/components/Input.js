import PropTypes from "prop-types";

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleInputLifting(ev.target.value, ev.target.name);
  };

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
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
