import { useState } from "react";


const Counter=({likes ,onChangeLikes})=>{
    //state
  const [count, setCount] = useState(likes)

    const onHandleClick=()=>{
        // setCount((count) => count + 1);
         onChangeLikes();
    }
    return(
        <>
            <button onClick={onHandleClick}>LIKE</button>
        </>

    );
}
export default Counter;