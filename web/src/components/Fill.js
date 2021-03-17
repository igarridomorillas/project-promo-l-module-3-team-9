import "../stylesheets/layout/_fillSection.scss";
import GetAvatar from "./GetAvatar";
import Input from "./Input";

const Fill = (props) => {
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

        <GetAvatar
          data={props.data.photo}
          handleInputLifting={props.handleInputLifting}
        />

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
};

export default Fill;
