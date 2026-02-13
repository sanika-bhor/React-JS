import { useEffect, useState } from "react";
import SubjectService from "../Services/SubjectService";

function GetData()
{
     const [subjects, setSubjects] = useState([]);

     useEffect(()=>{
        SubjectService().then((data) => {
          setSubjects(data);
        });
     })
    return (
      <>
        <div>
          {subjects.map((subject, idx) => (
            <div key={idx} className="card mb-3">
              <div className="card-header">Id:  {subject.id}</div>
              <div className="card-body">
                <p>Subject Name: {subject.title}</p>
            
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
export default GetData;