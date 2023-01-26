import { useState } from "react";
import FormErrors from "./FormErrors";

function NewUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addNewUserHandler = function (event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setActiveModal(true);
      setErrorMessage("You must enter the name of the user and its age");
      return;
    }
    const newUser = { username, age, id: Math.random() };
    props.onAddUser(newUser);
  };

  const usernameValueHandler = function (event) {
    setUsername(event.target.value);
  };

  const ageValueHandler = function (event) {
    setAge(event.target.value);
  };

  const closeModalHandler = function () {
    setActiveModal(false);
  };

  return (
    <form onSubmit={addNewUserHandler}>
      <div>
        <label>Username</label>
        <input onChange={usernameValueHandler}></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input onChange={ageValueHandler}></input>
      </div>
      <button type="submit">Add User</button>
      {activeModal && (
        <FormErrors error={errorMessage} onCloseModal={closeModalHandler} />
      )}
    </form>
  );
}

export default NewUser;
