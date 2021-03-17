const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <div className="trash">
      <button className="button js-reset button__reset " onClick={handleReset}>
        <i className="far fa-trash-alt"></i>
        Reset
      </button>
    </div>
  );
};
export default Reset;
