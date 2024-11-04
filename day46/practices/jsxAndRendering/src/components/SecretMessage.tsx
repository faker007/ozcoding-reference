import React, { useState } from "react";

const SecretMessage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h2>Welcome to the Dsahboard</h2>

      {isAdmin && <p>This is a secret message for admins only.</p>}

      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Revoke Admin" : "Make Admin"}
      </button>
    </div>
  );
};

export default SecretMessage;
