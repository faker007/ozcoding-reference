import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 0, text: "React 학습", completed: false },
    { id: 1, text: "코딩 연습", completed: false },
    { id: 2, text: "블로그 글 작성", completed: true },
  ]);

  const toggleTodo = (id) => {
    console.log("called234124    " + id);
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    setTodos(updatedTodos);
    console.log(updatedTodos);

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>투두 리스트</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
