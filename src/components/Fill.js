import React from "react";
import "../stylesheets/layout/_fillSection.scss";
import Input from "./Input";

function Fill(props) {
  return (
    <fieldset className="collapsable js-slide2">
      <div>{props.children}</div>

      <div className="collapsable__hide fill js-content">
        <Input
          name="name"
          label="Nombre completo"
          fullname="full_name"
          type="text"
          placeholder="Ej: Sally Jill"
        />
        <Input
          name="job"
          label="Puesto"
          fullname="job"
          type="text"
          placeholder="Ej: Front-end unicorn"
        />

        <label htmlFOR="photo" className="form__label">
          Imagen de perfil
        </label>
        <div className="photo">
          <button className="photo__btn js-profileTrigger">
            Añadir imagen
          </button>
          <input className="hidden js-profileUploadBtn" type="file" />
          <div className="photo__preview js-inputText js-profilePreview"></div>
        </div>

        <Input
          name="email"
          label="Email"
          fullname="email"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
        />
        <Input
          name="phone"
          label="Teléfono"
          fullname="phone"
          type="tel"
          placeholder="Ej: 555666888"
        />
        <Input
          name="linkedin"
          label="Linkedin"
          fullname="linkedin"
          type="text"
          placeholder="Ej: linkekin.com/in/sally..sally-hill"
        />
        <Input
          name="github"
          label="Github"
          fullname="github"
          type="text"
          placeholder="Ej: @sally-hill"
        />
      </div>
    </fieldset>
  );
}

export default Fill;
