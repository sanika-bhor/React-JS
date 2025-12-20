import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="body">
      <div class="container">
        <div class="title">Counter</div>
        <div class="count" id="count">
          {count}
        </div>
        <div class="buttonGroup">
          <button class="increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button class="decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
        <button class="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
