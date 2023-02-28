import React, { useState } from 'react'

const Example4 = () => {
    const [change,setChange] = useState({color:"red"})

    const handleChangeColor = () =>{
        // const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setChange({color:"blue"})
    }
  return (
    <>
    <h1>Example useState</h1>
    <div style={change}>
        <h1>Change Background color</h1>
    </div>
    <button onClick={handleChangeColor}>changeBackground</button>
    </>
  )
}

export default Example4