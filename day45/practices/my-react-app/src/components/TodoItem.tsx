const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
