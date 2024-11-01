import { useState } from "react";

// 자식 컴포넌트: AddTodo
const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState("");

  // 입력 변경 핸들러
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="할 일 입력"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodo;
