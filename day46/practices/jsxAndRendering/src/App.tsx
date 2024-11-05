import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import LoginControl from "./components/LoginControl";
import Notification from "./components/Notification";
import Panel from "./components/Panel";
import Profile from "./components/Profile";
import SecretMessage from "./components/SecretMessage";
import ToggleMessage from "./components/ToggleMessage";
import UserList from "./components/UserList";
import VeicleStatus from "./components/VehicleStatus";
import Weclome from "./components/Welcome";

function App() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    isAdmin: boolean;
    age: number;
  }>({
    name: "",
    email: "",
    isAdmin: false,
    age: -1,
  });

  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => setShowMessage(!showMessage);

  useEffect(() => {
    // Simulate API fetching
    setTimeout(() => {
      setUser({
        name: "Charile",
        email: "charile@example.com",
        isAdmin: true,
        age: 23,
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Conditional Rendering Practice</h1>

      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>

      {showMessage && <p>This is a conditionally rendered message.</p>}

      {/* <Calculator />

      <Weclome username={"faker337"} />

      <ToggleMessage />

      <LoginControl />

      <Notification />

      <SecretMessage />

      <Panel role={"admin"} />

      <Profile user={user} />

      <VeicleStatus status="available" />

      <UserList /> */}
    </div>
  );
}

export default App;
