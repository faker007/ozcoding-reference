import { useState } from "react";
import "./App.css";
import CounterDisplay from "./components/CounterDisplay";
import Greeting from "./components/Greeting";
import CounterControls from "./components/CounterControls";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    username: "홍길동",
    age: 25,
    hobby: "독서",
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const changeHobby = () => {
    setUser({ ...user, hobby: "운동" });
  };

  return (
    <>
      <Greeting name="홍길동" />
      <Greeting name="김철수" />
      <Greeting name="이영희" />

      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} />

      <UserProfile username={user.username} age={user.age} hobby={user.hobby} />

      <button onClick={changeHobby}>취미 변경</button>
    </>
  );
}

export default App;
