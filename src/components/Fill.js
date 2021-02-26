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
          //value={props.name} //cambiado value por name
          label="Nombre completo"
          type="text"
          placeholder="Ej: Sally Jill"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="job"
          //value={props.job} //cambiado value por job
          label="Puesto"
          type="text"
          placeholder="Ej: Front-end unicorn"
          handleInputLifting={props.handleInputLifting}
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
          //value={props.email} //cambiado value por email
          label="Email"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="phone"
          //value={props.phone} //cambiado value por phone
          label="Teléfono"
          type="tel"
          placeholder="Ej: 555666888"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="linkedin"
          //value={props.linkedin} //cambiado value por linkedin
          label="Linkedin"
          type="text"
          placeholder="Ej: linkekin.com/in/sally..sally-hill"
          handleInputLifting={props.handleInputLifting}
        />
        <Input
          name="github"
          //value={props.github} //cambiado value por github
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
