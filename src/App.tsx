import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 data-testid="app-title">PlayWright Testing</h1>

      <section>
        <h2>Counter</h2>
        <p data-testid="count-display">Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </section>
    </div>
  );
}
