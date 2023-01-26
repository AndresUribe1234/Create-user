import "./App.scss";
import NewUser from "./components/NewUser/NewUser";

import { useState } from "react";

const usersInit = [];

function App() {
  const [users, setUsers] = useState(usersInit);

  const addUserHandler = function (newUser) {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  console.log(users);
  return (
    <div className="App">
      <div>Hello world!</div>
      <NewUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
