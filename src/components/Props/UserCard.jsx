const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default UserCard;
