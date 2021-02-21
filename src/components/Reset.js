import React from "react";

function Reset(params) {
  return (
    <div className="trash">
      <button className="button js-reset">
        <i className="far fa-trash-alt"></i>
        <a className="button__reset " href="">
          Reset
        </a>
      </button>
    </div>
  );
}
export default Reset;
