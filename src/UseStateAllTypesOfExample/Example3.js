import React, { useState } from 'react'

const Example3 = () => {
    const [Visible,setVisible] = useState(false)

    const toggle = () => {
        setVisible(!Visible)
    }
  return (
    <>
        <h1>Example useState</h1>
        <div>
            <button onClick={toggle}>{Visible ? 'hide' : 'show'}</button>
            {Visible && <p>Shubham Singh React Developer</p>}

        </div>
    </>
    )
}

export default Example3