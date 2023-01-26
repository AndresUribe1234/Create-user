import "./FormErrors.scss";

const FormErrors = function (props) {
  function example(event) {
    if (event.target.className === "modal") {
      props.onCloseModal();
    }
  }
  return (
    <div className="modal" onClick={example}>
      <div className="modal-container">
        <p>{props.error}</p>
        <button onClick={props.onCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default FormErrors;
