import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <Counter />

      <Greeting name="홍길동" />
      <Greeting name="김철수" />
      <Greeting name="이영희" />
    </>
  );
}

export default App;
