import React, { useState } from "react";

const Notification = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div>
      <h2>Notifcations</h2>

      {hasNotifications ? (
        <p>You have new messages.</p>
      ) : (
        <p>No new notifications.</p>
      )}

      <button onClick={() => setHasNotifications(!hasNotifications)}>
        Toggle Notications
      </button>
    </div>
  );
};

export default Notification;
