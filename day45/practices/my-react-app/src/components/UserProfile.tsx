const UserProfile = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>나이: {props.age}</p>
      <p>취미: {props.hobby}</p>
    </div>
  );
};

export default UserProfile;
