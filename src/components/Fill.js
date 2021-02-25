import React from "react";
import "../stylesheets/layout/_fillSection.scss";
import LittlePreview from "./LittlePreview";
import Input from "./Input";

function Fill(props) {
  return (
    <fieldset className={"collapsable js-slide2 " + props.className}>
      <div>{props.children}</div>

      <div className="collapsable__hide fill js-content">
        <Input
          name="name"
          value={props.value}
          label="Nombre completo"
          type="text"
          placeholder="Ej: Sally Jill"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="job"
          label="Puesto"
          type="text"
          placeholder="Ej: Front-end unicorn"
        />

        <label htmlFor="photo" className="form__label">
          Imagen de perfil
        </label>
        <div className="photo">
          <button className="photo__btn js-profileTrigger">
            Añadir imagen
          </button>
          <input className="hidden js-profileUploadBtn" type="file" />
          <LittlePreview />
        </div>

        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
        />
        <Input
          name="phone"
          label="Teléfono"
          type="tel"
          placeholder="Ej: 555666888"
        />
        <Input
          name="linkedin"
          label="Linkedin"
          type="text"
          placeholder="Ej: linkekin.com/in/sally..sally-hill"
        />
        <Input
          name="github"
          label="Github"
          type="text"
          placeholder="Ej: @sally-hill"
        />
      </div>
    </fieldset>
  );
}

export default Fill;
