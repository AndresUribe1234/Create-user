import UserElement from "./UserElement";
import "./Users.scss";

const Users = function (props) {
  const allUsers = props.users;

  return (
    <ul className="user-list-container">
      {allUsers.map((user) => (
        <UserElement user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default Users;
