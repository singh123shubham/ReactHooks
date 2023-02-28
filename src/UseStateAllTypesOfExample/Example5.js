import React, { useState } from 'react'

const Example5 = () => {
    const [isOn ,setIson] = useState(false)
    const handleClick = ()=>{
        setIson(prevIsOn =>!prevIsOn)
    }
  return (
    <>
    <h1>Example UseState</h1>
    <button onClick={handleClick}>{isOn ? 'on':'off'}</button>
    </>
  )
}

export default Example5