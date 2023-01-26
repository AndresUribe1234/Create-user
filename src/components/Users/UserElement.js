import "./UserElement.scss";

const UserElement = function (props) {
  return (
    <li className="user-container">
      <div>
        <p>{`${props.user.username} (${props.user.age} years old)`}</p>
      </div>
    </li>
  );
};

export default UserElement;
