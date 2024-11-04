import React, { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisble] = useState(false);

  const toggle = () => setIsVisble(!isVisible);

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Message</button>

      {isVisible && <p>This is a toggled message.</p>}
    </div>
  );
};

export default ToggleMessage;
