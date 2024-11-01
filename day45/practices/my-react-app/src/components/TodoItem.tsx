const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
