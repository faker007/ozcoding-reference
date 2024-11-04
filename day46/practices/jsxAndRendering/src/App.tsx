import "./App.css";
import Calculator from "./components/Calculator";
import LoginControl from "./components/LoginControl";
import Notification from "./components/Notification";
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
    </div>
  );
}

export default App;
