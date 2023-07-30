import React from "react";
import HOC from "./HOC";

const ClickCounter = ({ count, handleClick }) => {
  return (
    <div>
      <p>Click Counter</p>
      <h3>{count}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default HOC(ClickCounter);
