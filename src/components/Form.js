import React from 'react';
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(){
    return(
        <form className="form js-form form__wrapper" action="" method="POST">
        {/* <div className="form__wrapper"> */}
            <Design />
            <Fill />
            <Share />
       {/*  </div> */}
        </form>
    )
}

export default Form;

