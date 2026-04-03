import {React} from "react"
import {  useNavigate } from "react-router-dom";

const  Hello =()=>{
    const navigate = useNavigate();
   const  handleClick=()=>
  {
    console.log("bye");
   navigate("/bye");
  }
  
    return (
      <div>
        <h1>Welcome to transflower</h1>
        <button onClick={handleClick}>Good Bye</button>
      </div>
    );
  
}

export default Hello;