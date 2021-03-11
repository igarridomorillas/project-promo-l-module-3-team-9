import React from "react";
import Collapsable from "./Collapsable";

function Form(props) {
  return (
    <form className="form js-form form__wrapper" action="" method="POST">
      <Collapsable
        data={props.data}
        cardCreated={props.cardCreated}
        handleInputLifting={props.handleInputLifting}
        senddatatoapi={props.senddatatoapi}
        handleButtonLifting={props.handleButtonLifting}
      />
    </form>
  );
}

export default Form;
