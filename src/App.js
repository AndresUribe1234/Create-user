import "./App.scss";
import NewUser from "./components/NewUser/NewUser";

import { useState } from "react";
import Users from "./components/Users/Users";

const usersInit = [];

function App() {
  const [users, setUsers] = useState(usersInit);

  const addUserHandler = function (newUser) {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
