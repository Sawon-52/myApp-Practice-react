import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  function handleAdd() {
    const newCount = count + 1;
    setCounter(newCount);
  }

  function handleReduce() {
    const newCount = count - 1;
    setCounter(newCount);
  }
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleReduce}>decrement</button>
    </div>
  );
}

