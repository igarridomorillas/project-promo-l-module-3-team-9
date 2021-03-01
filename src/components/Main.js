import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";

function Main() {
  const [palette, setPalettes] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleInputLifting = (inputValue, inputName) => {
    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "job") {
      setJob(inputValue);
    } else if (inputName === "palette") {
      setPalettes(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "phone") {
      setPhone(inputValue);
    } else if (inputName === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputName === "github") {
      setGithub(inputValue);
    }
  };

  const handleReset = () => {
    setName("");
    setJob("");
    setPalettes("1");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
  };

  return (
    <main className="mainProfile mainProfile__wrapper">
      {/* <div className="mainProfile__wrapper"> */}
      <PhotoCard
        palette={palette}
        name={name}
        job={job}
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
        handleReset={handleReset}
      />
      <Form
        palette={palette}
        name={name}
        job={job}
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
        handleInputLifting={handleInputLifting}
      />
      {/* </div> */}
    </main>
  );
}

export default Main;
