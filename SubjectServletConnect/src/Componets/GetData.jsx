import { useEffect, useState } from "react";
import SubjectService from "../Services/SubjectService";

function GetData()
{
     const [subjects, setSubjects] = useState([]);

     useEffect(()=>{
        SubjectService().then((data)=>{
            setSubjects(data);
        })
     })
    return(
        
    <>

   
        <div>
            <h1>{subjects}</h1>
        </div>
    </>
    );
}
export default GetData;