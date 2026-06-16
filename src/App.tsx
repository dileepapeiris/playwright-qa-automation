import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Buy milk", "Go for a walk"]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 data-testid="app-title">PlayWright Testing</h1>

      <section>
        <h2>Counter</h2>
        <p data-testid="count-display">Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "8px" }}>Decrease</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>Reset</button>
      </section>

      <hr />

      <section>
        <h2>Todo List</h2>
        <input
          placeholder="Type a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ul>
          {todos.map((todo, i) => (
            <li key={i} data-testid="todo-item">{todo}</li>
          ))}
        </ul>
        <p data-testid="todo-count">Total todos: {todos.length}</p>
      </section>
    </div>
  );
}
