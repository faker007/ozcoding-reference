import "./App.css";
import Calculator from "./components/Calculator";
import Weclome from "./components/Welcome";

function App() {
  return (
    <div>
      <Calculator />

      <Weclome username={"faker337"} />
    </div>
  );
}

export default App;
