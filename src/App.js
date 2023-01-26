import "./App.scss";
import NewUser from "./components/NewUser/NewUser";

import { useState } from "react";
import Users from "./components/Users/Users";
import FormErrors from "./components/NewUser/FormErrors";

const usersInit = [];

function App() {
  const [users, setUsers] = useState(usersInit);

  const addUserHandler = function (newUser) {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div className="App">
      <div>Hello world!</div>
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
