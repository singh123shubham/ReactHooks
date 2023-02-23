import React from 'react';

function ChildCom({ increment }) {
  console.log('Child component rendered');
  return <button onClick={increment}>Increment Count</button>;
}

export default ChildCom;
