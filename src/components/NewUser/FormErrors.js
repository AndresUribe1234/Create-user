import "./FormErrors.scss";
import ReactDom from "react-dom";
import React from "react";

const ErrorModal = (props) => {
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

const FormErrors = function (props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ErrorModal onCloseModal={props.onCloseModal} error={props.error} />,
        document.getElementById("errorModal")
      )}
    </React.Fragment>
  );
};

export default FormErrors;
