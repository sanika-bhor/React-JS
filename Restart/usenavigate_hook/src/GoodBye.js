import React from "react";
import { useNavigate } from "react-router-dom";
const GoodBye=()=>
{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/")
    }
    
        return (
          <div>
            <h1>Good Bye Guys See you tomorrow</h1>
            <button onClick={handleClick}>Hello</button>
          </div>
        );
    
    
}

export default GoodBye;