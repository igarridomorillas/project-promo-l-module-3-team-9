import Collapsable from "./Collapsable";

const Form = (props) => {
  return (
    <form className="form js-form form__wrapper" action="" method="POST">
      <Collapsable
        data={props.data}
        cardCreated={props.cardCreated}
        handleInputLifting={props.handleInputLifting}
        handleButtonLifting={props.handleButtonLifting}
      />
    </form>
  );
};

export default Form;
