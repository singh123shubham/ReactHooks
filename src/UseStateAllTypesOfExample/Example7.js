import React, { useState } from 'react'

const Example7 = () => {
    const [increment,setIncrement] = useState(0)
    const [decrement,setDecrement] = useState(0)

    const handleAdd = () => {
        setIncrement(increment + 3)
    }

    const handleSub = ()=> {
        setDecrement(decrement - 3)
    }
  return (
    <>
    <h1>Example useState</h1>
    <div>
        <h3>NumberADD : {increment}</h3>
        <h3>NumberSub : {decrement}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
    </div>
    </>
    )
}

export default Example7