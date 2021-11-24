import React from "react"


import { useParams } from "react-router-dom";

const Student_details=()=>{

    const {id} =useParams();
    return(
        <h1>The name of the student is : {id}</h1>
    )
}
export default Student_details;