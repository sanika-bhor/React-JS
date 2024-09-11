import { useState } from "react";

const Counter = ({ likes }) => {
  return (
    <div>
      <button>-</button>
      <label>{likes}</label>
      <button >+</button>
    </div>
  );
};

export default Counter;
