import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import LoginControl from "./components/LoginControl";
import Notification from "./components/Notification";
import Panel from "./components/Panel";
import Profile from "./components/Profile";
import SecretMessage from "./components/SecretMessage";
import ToggleMessage from "./components/ToggleMessage";
import Weclome from "./components/Welcome";
import VeicleStatus from "./components/VehicleStatus";

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
      <Calculator />

      <Weclome username={"faker337"} />

      <ToggleMessage />

      <LoginControl />

      <Notification />

      <SecretMessage />

      <Panel role={"admin"} />

      <Profile user={user} />

      <VeicleStatus status="available" />
    </div>
  );
}

export default App;
