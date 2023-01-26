import { useState } from "react";

function NewUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addNewUserHandler = function (event) {
    event.preventDefault();
    const newUser = { username, age, id: Math.random() };
    props.onAddUser(newUser);
  };

  const usernameValueHandler = function (event) {
    setUsername(event.target.value);
  };

  const ageValueHandler = function (event) {
    setAge(event.target.value);
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
    </form>
  );
}

export default NewUser;
