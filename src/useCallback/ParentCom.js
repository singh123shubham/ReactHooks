import React, { useState, useCallback } from 'react';
import ChildCom from './ChildCom';

function ParentCom() {
  const [count, setCount] = useState(0);
  const [num,setNum] = useState(20)

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);


  return (
    <div>
    <h1>UseCallback</h1>
    <h3>useCallback is a React hook that is used to memoize a function, which means it will only be re-created when one of its dependencies change. This can be useful for optimizing the performance of your React app, especially when passing functions down as props to child components.</h3>
      <p>Count: {count}</p>
      <p>Number:{num}</p>
      <button onClick={()=>setNum(num - 20)}>Decrement</button>
      <button onClick={incrementCount}>Increment Count</button>
      <ChildCom increment={incrementCount} />
    </div>
  );
}

export default ParentCom;
