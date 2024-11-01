import { useState } from "react";
import "./App.css";
import CounterDisplay from "./components/CounterDisplay";
import Greeting from "./components/Greeting";
import CounterControls from "./components/CounterControls";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <Greeting name="홍길동" />
      <Greeting name="김철수" />
      <Greeting name="이영희" />

      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} />
    </>
  );
}

export default App;
