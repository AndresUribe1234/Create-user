import UserElement from "./UserElement";

const Users = function (props) {
  const allUsers = props.users;

  return (
    <ul>
      {allUsers.map((user) => (
        <UserElement user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default Users;
