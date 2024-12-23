import React, { useState } from "react";
import UserGreeting from "./UserGreeting";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Sign in.</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      <UserGreeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default LoginControl;
