import React from "react";
import "../stylesheets/layout/_fillSection.scss";
import LittlePreview from "./LittlePreview";

function Fill(props) {
  return (
    <fieldset className="collapsable js-slide2">
      <div>{props.children}</div>

      <div className="collapsable__hide fill js-content">
        <label htmlFOR="name" className="form__label">
          Nombre completo
        </label>

        <input
          name="full_name"
          value=""
          type="text"
          id="name"
          className="form__inputText js-name js-inputText js-inputName"
          placeholder="Ej: Sally Jill"
        />

        <label htmlFOR="job" className="form__label">
          Puesto
        </label>
        <input
          name="job"
          value=""
          type="text"
          id="job"
          className="form__inputText js-position js-inputText js-inputJob"
          placeholder="Ej: Front-end unicorn "
        />

        <label htmlFOR="photo" className="form__label">
          Imagen de perfil
        </label>
        <div className="photo">
          <button className="photo__btn js-profileTrigger">
            Añadir imagen
          </button>
          <input className="hidden js-profileUploadBtn" type="file" />
          <LittlePreview />
        </div>

        <label htmlFOR="email" className="form__label">
          Email
        </label>
        <input
          name="email"
          value=""
          id="email"
          type="email"
          className="js-email form__inputText js-inputText js-inputEmail"
          placeholder="Ej: sally-hill@gmail.com "
        />

        <label htmlFOR="phone" className="form__label">
          Teléfono
        </label>
        <input
          name="phone"
          value=""
          id="phone"
          type="tel"
          className="form__inputText js-phone js-inputText js-inputPhone"
          placeholder="Ej: 555666888"
        />

        <label htmlFOR="linkedin" className="form__label">
          Linkedin
        </label>
        <input
          name="linkedin"
          value=""
          id="linkedin"
          type="text"
          className="js-linkedin form__inputText js-inputText js-inputLinkedin"
          placeholder="Ej: linkekin.com/in/sally..sally-hill"
        />

        <label htmlFOR="github" className="form__label">
          Github
        </label>
        <input
          name="github"
          value=""
          id="github"
          type="text"
          className="form__inputText js-github js-inputText js-inputGithub"
          placeholder="Ej: @sally-hill"
        />
      </div>
    </fieldset>
  );
}

export default Fill;
