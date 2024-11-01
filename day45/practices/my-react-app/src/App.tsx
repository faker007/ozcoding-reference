import { useState } from "react";
import "./App.css";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import Greeting from "./components/Greeting";
import Store from "./components/Store";
import UserProfile from "./components/UserProfile";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    username: "홍길동",
    age: 25,
    hobby: "독서",
  });

  const [todos, setTodos] = useState([
    { id: 1, text: "React 학습", completed: false },
    { id: 2, text: "코딩 연습", completed: false },
    { id: 3, text: "블로그 글 작성", completed: false },
  ]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const changeHobby = () => {
    setUser({ ...user, hobby: "운동" });
  };

  return (
    <>
      <TodoList />

      <Greeting name="홍길동" />
      <Greeting name="김철수" />
      <Greeting name="이영희" />

      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} />

      <UserProfile username={user.username} age={user.age} hobby={user.hobby} />

      <button onClick={changeHobby}>취미 변경</button>

      <Store />
    </>
  );
}

export default App;
