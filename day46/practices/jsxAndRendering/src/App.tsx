import "./App.css";
import Calculator from "./components/Calculator";
import LoginControl from "./components/LoginControl";
import ToggleMessage from "./components/ToggleMessage";
import Weclome from "./components/Welcome";

function App() {
  return (
    <div>
      <Calculator />

      <Weclome username={"faker337"} />

      <ToggleMessage />

      <LoginControl />
    </div>
  );
}

export default App;
