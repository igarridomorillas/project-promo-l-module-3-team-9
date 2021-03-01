import React from "react";

function Reset(props) {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <div className="trash">
      <button className="button js-reset" onClick={handleReset}>
        <i className="far fa-trash-alt"></i>
        <a className="button__reset " href="">
          Reset
        </a>
      </button>
    </div>
  );
}
export default Reset;
