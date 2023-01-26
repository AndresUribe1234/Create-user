const UserElement = function (props) {
  return (
    <li>
      <div>
        <p>{`${props.user.username} (${props.user.age} years old)`}</p>
      </div>
    </li>
  );
};

export default UserElement;
