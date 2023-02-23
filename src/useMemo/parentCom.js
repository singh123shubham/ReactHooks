import React, { useState, useMemo } from 'react';

function ParentCom() {
  const [count, setCount] = useState(0);

  function fibonacci(n) {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const fib = useMemo(() => fibonacci(count), [count]);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Fibonacci: {fib}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default ParentCom;
