import React from 'react'
import { useState } from 'react'

const Example1 = () => {
    const [student,setStudent] = useState([
        {
            id:1,
            name:"Shubham",
        },
        {
            id:2,
            name:"Saurabh",
        },
        {
            id:3,
            name:"Ankit",
        },
        {
            id:4,
            name:"Vinay",
        }
    ])

    const [selectstudentId,setSelectStudentId] = useState(null)

    const handleStududentClick = (id) => {
        setSelectStudentId(id)
    }
  return (
    <>
        <h1>Example UseState</h1>
        <div>
            <ul>
                {student.map((student)=>(
                    <li key = {student.id} style={{color:selectstudentId === student.id ? "red" : "black"}}
                     onClick={()=>handleStududentClick(student.id)}>
                        {student.name}
                     </li>
                ))}
            </ul>
        </div>

    </>
  )
}

export default Example1