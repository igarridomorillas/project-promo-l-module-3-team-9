import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";

function Main() {
  const [name, setName]= useState('pepiner');
  return (
    <main className="mainProfile mainProfile__wrapper">
      {/* <div className="mainProfile__wrapper"> */}
      <PhotoCard name={name} />
      <Form name={name} />
      {/* </div> */}
    </main>
  );
}

export default Main;
