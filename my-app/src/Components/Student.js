import React from "react"

const Student = (props) =>{
    return(
        <div>
            <p> Student Name :{props.name} <br/> Student ID:{props.ID} <br/> CGPA:{props.cg}</p>
        </div>
    )
}

export default Student;