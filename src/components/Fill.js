import React from "react";
import "../stylesheets/layout/_fillSection.scss";
import LittlePreview from "./LittlePreview";
import Input from "./Input";

function Fill(props) {
  const handlePhoto = (ev) => {
    ev.preventDefault();
  };
  return (
    <fieldset className={"collapsable js-slide2 " + props.className}>
      <div>{props.children}</div>

      <div className="collapsable__hide fill js-content">
        <Input
          name="name"
          value={props.data.name}
          label="Nombre completo"
          type="text"
          placeholder="Ej: Sally Jill"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="job"
          value={props.data.job}
          label="Puesto"
          type="text"
          placeholder="Ej: Front-end unicorn"
          handleInputLifting={props.handleInputLifting}
        />

        <label htmlFor="photo" className="form__label">
          Imagen de perfil
        </label>
        <div className="photo">
          <button
            onClick={handlePhoto}
            className="photo__btn js-profileTrigger"
          >
            Añadir imagen
          </button>
          <input
            onChange={handlePhoto}
            className="hidden js-profileUploadBtn"
            type="file"
          />
          <LittlePreview />
        </div>

        <Input
          name="email"
          value={props.data.email}
          label="Email"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="phone"
          value={props.data.phone}
          label="Teléfono"
          type="tel"
          placeholder="Ej: 555666888"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="linkedin"
          value={props.data.linkedin}
          label="Linkedin"
          type="text"
          placeholder="Ej: linkekin.com/in/sally..sally-hill"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="github"
          value={props.data.github}
          label="Github"
          type="text"
          placeholder="Ej: @sally-hill"
          handleInputLifting={props.handleInputLifting}
        />
      </div>
    </fieldset>
  );
}

export default Fill;
