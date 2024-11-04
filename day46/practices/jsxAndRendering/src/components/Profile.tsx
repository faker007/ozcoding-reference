import React, { useState } from "react";

const Profile = ({ user }) => {
  if (!user.name) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      {user.isAdmin && <p>Administrator Access Granted.</p>}
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
