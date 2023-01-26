import Card from "./../UI/Card";
import { useState } from "react";
import FormErrors from "./FormErrors";
import "./NewUser.scss";

function NewUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addNewUserHandler = function (event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setActiveModal(true);
      setErrorMessage(
        "You must enter the name of the user and its age in order to submit a new user"
      );
      return;
    }
    const newUser = { username, age, id: Math.random() };
    props.onAddUser(newUser);
    setUsername("");
    setAge("");
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
    <Card className="input">
      <form onSubmit={addNewUserHandler}>
        <div>
          <label>Username</label>
          <input onChange={usernameValueHandler} value={username}></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input onChange={ageValueHandler} value={age}></input>
        </div>
        <button type="submit">Add User</button>
        {activeModal && (
          <FormErrors error={errorMessage} onCloseModal={closeModalHandler} />
        )}
      </form>
    </Card>
  );
}

export default NewUser;
