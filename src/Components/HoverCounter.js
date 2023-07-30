import React from "react";
import HOC from "./HOC";

const HoverCounter = ({ count, handleClick }) => {
  return (
    <div>
      <p>Hover Counter</p>

      <h3>{count}</h3>
      <button onMouseOver={handleClick}>Increment</button>
    </div>
  );
};

export default HOC(HoverCounter);
