
// ?The useState hook allows functional components to manage state in the same way that class components do. 
// ?It returns a stateful value and a function to update it.

import React, { useState } from 'react'

const ExampleuseState = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("")

  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Email:', email);
  };

  return (
    <>
    <h1>UseState Example</h1>
    <h2>Number : {count}</h2>
    <button onClick={()=>setCount(count+1)}>ADD</button>
    <button onClick={()=>(setCount(count-1))}>Sub</button>
    <button onClick={()=>(setCount(count*0))}>Reset</button>

    <h2>My name is {name}</h2>     
    <input type="text"value={name} onChange={e => setName(e.target.value)} />

    <h2>My Email ID : {email}</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
    )
}

export default ExampleuseState