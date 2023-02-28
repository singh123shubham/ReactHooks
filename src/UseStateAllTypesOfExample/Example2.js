import React, { useState } from 'react'

const Example2 = () => {
    const [style,setStyle] = useState({color:"black"})

    const changestyle = () => {
        setStyle({color:"red",fontweight:"bold"})
    }
    const onDoubleClick = () =>{
        setStyle({color:"green"})
    }
  return (
    <>
    <h1>Example useState</h1>

    <div>
        <h1 style={style}>color change using useState</h1>
        <button onClick={changestyle}  onDoubleClick={onDoubleClick}>Change color</button>
        
    </div>
    </>
  )
}

export default Example2