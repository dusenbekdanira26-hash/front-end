import { useState } from "react";
import "./StepCounter.css";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div className="counter">
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Total operations: {operationCount}</p>
      <p>History (last 5): {history.slice(-5).join(", ")}</p>
    </div>
  );
}