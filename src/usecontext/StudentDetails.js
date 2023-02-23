import React, { useContext } from 'react'
import { DataContext } from './DataContext';


const StudentDetails = () => {
    const {studentDetails} = useContext(DataContext)
  return (
   <>
    <h1>Student Details</h1>
    <div>
        <h4>{studentDetails.fname}</h4>
        <h4>{studentDetails.lname}</h4>
        <h4>{studentDetails.Collage}</h4>



    </div>
   </>
  )
}

export default StudentDetails