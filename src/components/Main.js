import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";

function Main() {
  const [name, setName] = useState("pepiner");
  const handleInputLifting = (inputValue) => {
    setName(inputValue);
    console.log("Me están cambiando", inputValue);
  };
  return (
    <main className="mainProfile mainProfile__wrapper">
      {/* <div className="mainProfile__wrapper"> */}
      <PhotoCard name={name} />
      <Form name={name} handleInputLifting={handleInputLifting} />
      {/* </div> */}
    </main>
  );
}

export default Main;
