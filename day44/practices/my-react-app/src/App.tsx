import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./Calculator";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup 함수
  }, []);

  return (
    <div>
      {/* <p>당신은 {count}번 클릭 했수다</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>

      <NumberList />

      <CategoryList />

      <NameForm />

      <EmailForm /> */}

      <Calculator />
    </div>
  );
}

function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => {
    return <li>{number}</li>;
  });

  return <ul>{listItems}</ul>;
}

function CategoryList() {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Orange"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.name}>
            <h2>{category.name}</h2>
            <ul>
              {category.items.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// 제어 컴포넌트 (Controlled Component)
function NameForm() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + value);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>

      <input type="text" value={value} onChange={handleChange} />

      <input type="submit" value={"Submit"} />
    </form>
  );
}

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
      // 서버로 전송하는 로직
    }
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleChange} />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
