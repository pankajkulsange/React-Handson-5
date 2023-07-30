import React, { useState } from "react";

const HOC = (NormalComp) => {
  function HocFunc() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <NormalComp count={count} handleClick={handleClick} />
      </div>
    );
  }
  return HocFunc;
};

export default HOC;
