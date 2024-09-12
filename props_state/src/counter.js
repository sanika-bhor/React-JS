import { useState } from "react";

const Counter = ({ likes }) => {
  //define state
  const [count, setCount] = useState(likes);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };


  return (
    <div>
      <label> Likes: {count}</label>
      <br />
      <button onClick={increment}>👍</button>
      <button onClick={decrement}>👎</button>
    </div>
  );
};

export default Counter;
