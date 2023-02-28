import React, { useState } from 'react'

const Example6 = () => {
    const [value,SetValue] = useState("Shubham")

    const handleChange = (event) => {
        SetValue(event.target.value)
    }

    const submit = (e)=>{
        e.preventDefault();
        console.log("input" ,value)

    }
  return (
    <>
    <h1>Example useState</h1>
    <div>
        <h3>{value}</h3>

       <form onSubmit={submit}>
       <label>
            Input value:
            <input type='text' value={value} onChange={handleChange}/>
            <button>submit</button>
        </label>
       </form>
    </div>
    </>
    )
}

export default Example6