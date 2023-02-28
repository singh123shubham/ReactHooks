import React, { useState } from 'react'

const Interview = () => {
    const [selectstudentname,setSelectstudentName] = useState("")
    const [student,setStudent] = useState([
        {
            name:"Shubham Singh",
            collage:"BBDU"
        },
        {
            name:"Ankit",
            collage:"LKO"
        },
        {
            name:"Saurabh Singh",
            collage:"PSIT"
        }
    ])
  return (
    <>
    <h2>Interview Question</h2>
        <select onChange={(event)=>{
            setSelectstudentName(event.target.value)
        }}>
            {student && student.length >0 &&
                student.map((student)=>{
                    return(<option>{student.name}</option>)
                })
            }
        </select>

        {selectstudentname && <label>{selectstudentname}</label>}

    </>
  )
}

export default Interview