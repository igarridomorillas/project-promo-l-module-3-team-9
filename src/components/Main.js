import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";

function Main() {
  const [data, setData] = useState({
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  /*   const [palette, setPalettes] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState(""); */

  const handleInputLifting = (inputValue, inputName) => {
    //data[inputName] = inputValue; NO VALE

    setData({
      ...data,
      [inputName]: inputValue,
    });

    /*  if (inputName === "name") {
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
    } */

    saveInLocalStorage();
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    localStorage.clear();
    /* setName("");
    setJob("");
    setPalettes("1");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub(""); */
  };

  // localStorage.setItem('name', 'Ana');

  // function resetInfo() {
  //   localStorage.clear();
  // }
  // resetButtonElement.addEventListener('click', resetInfo);
  function saveInLocalStorage() {
    // obtengo los valores de todos los campos
    const userData = data;
    // lo convierto a string porque local storage solo admite strings
    const userDataInString = JSON.stringify(userData);
    // lo guardo en el local storage en el campo que me apetece
    localStorage.setItem("userData", userDataInString);
  }
  // al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
  function getFromLocalStorage() {
    // obtengo los datos desde el local storage
    const userDataInString = localStorage.getItem("userData");
    // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
    console.log(userDataInString);
    if (userDataInString !== null) {
      const userData2 = JSON.parse(userDataInString);

      // actualizo los inputs del formulario
      //setData = [inputName]: inputValue;
      setData({
        palette: userData2.palette,
        name: userData2.name,
        job: userData2.job,
        phone: userData2.phone,
        email: userData2.email,
        linkedin: userData2.linkedin,
        github: userData2.github,
        photo: userData2.photo,

        // ...userData2,
        // [inputName]: inputValue,
      });
      console.log(userData2);

      // actualizo la variable global de la foto
      // photo = userData.photo; NO OLVIDAR!!!!
      // actualizo la paleta, para ello
      // - Recorro las 3 paletas
      // - Compruebo cuál tiene el valor que tengo en el local storage
      // - A la paleta que tiene el valor correcto le hago un .checked = true para activarla
      // const paletteElements = document.querySelectorAll(".js-palette");
      // for (const paletteElement of paletteElements) {
      //   if (paletteElement.value === userData.palette) {
      //     paletteElement.checked = true;
      //   }
      // }
    }
  }

  return (
    <main className="mainProfile mainProfile__wrapper">
      {/* <div className="mainProfile__wrapper"> */}
      <PhotoCard data={data} handleReset={handleReset} />
      <Form data={data} handleInputLifting={handleInputLifting} />
      {/* </div> */}
    </main>
  );
}

export default Main;
