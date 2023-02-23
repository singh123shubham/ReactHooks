import React, { useState, useMemo } from 'react';

function ExampleUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const slowOperation = useMemo(() => {
    let result = 100;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <p>Slow Operation: {slowOperation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

export default ExampleUseMemo