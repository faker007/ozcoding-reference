import React from "react";

const UserGreeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up</h1>;
  }
};

export default UserGreeting;
