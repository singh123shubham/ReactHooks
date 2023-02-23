
// ?The useEffect hook allows functional components to perform side effects like fetching data, 
// ?subscribing to events, or manipulating the DOM. It takes a functionthat performs the side effect and an 
// ?optional array of dependencies that determine when the effect should be re-run.

import React, { useEffect, useState } from 'react'

const ExampleUseEffect = () => {
    const [count,setCount] = useState(0)
    const[data,setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{

        document.title = `you clicked ${count} times`
        async function fetchData(){
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                  const json = await res.json();
                setData(json)
                setLoading(false)
            }catch{
                setError(error) 
                setLoading(false)
            }
        }
        fetchData()

        console.log(`Name:${name} Email:${email}`)

    },[name,email])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }

  return (
    <>
    <h1>UseEffect Example</h1>
    <h1>Number : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Add</button>
    <button onClick={()=>setCount(count-1)}>Sud</button>

    <div>
        <h2>Name:{name} and Email: {email}</h2>
        Name :
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        Email: 
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </div>

    <div>
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </div>

    

    </>
    )
}

export default ExampleUseEffect