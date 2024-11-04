import "./App.css";
import Calculator from "./components/Calculator";
import LoginControl from "./components/LoginControl";
import Notification from "./components/Notification";
import Panel from "./components/Panel";
import SecretMessage from "./components/SecretMessage";
import ToggleMessage from "./components/ToggleMessage";
import Weclome from "./components/Welcome";

function App() {
  return (
    <div>
      <Calculator />

      <Weclome username={"faker337"} />

      <ToggleMessage />

      <LoginControl />

      <Notification />

      <SecretMessage />

      <Panel role={"admin"} />
    </div>
  );
}

export default App;
