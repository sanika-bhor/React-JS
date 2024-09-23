import { useState } from "react";

const Counter =({likes})=>{
    const [count, setCount]=useState(likes);

    const onHandleClick=()=>{
        setCount(count+1);
    }
    return(
        <>
            <button onClick={onHandleClick}></button>
        </>

    );
}
export default Counter;