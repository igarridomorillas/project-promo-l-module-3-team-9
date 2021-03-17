const ShareFail = (props) => {
  const inputEmpty = () => {
    let message = "";
    if (props.data.name === "") {
      message = "falta tu nombre";
    } else if (props.data.job === "") {
      message = "falta tu puesto";
    } else if (props.data.photo === "") {
      message = "falta tu foto";
    } else if (props.data.email === "") {
      message = "falta tu e-mail";
    } else if (props.data.phone === "") {
      message = "falta tu teléfono";
    } else if (props.data.linkedin === "") {
      message = "falta tu usuario de Linkedin";
    } else {
      message = "falta tu usario de GitHub";
    }
    return message;
  };
  return (
    <section className="js-error created__error">
      <h4 className="created__error--title">Por favor complete los datos:</h4>
      <p className="js-consoleError created__error--title">{inputEmpty()}</p>
    </section>
  );
};

export default ShareFail;
