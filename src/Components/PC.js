import React from "react";

const PC = React.memo(({ data }) => {
  return <div>{data}</div>;
});

export default PC;
