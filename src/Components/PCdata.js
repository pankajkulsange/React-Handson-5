import React from "react";

const PCdata = () => {
  return (
    <div>
      <h1>Pure Component</h1>
      <hr />
      <h3>Defination</h3>
      <li>
        Starting from React version 16.6, you can use the React.memo
        higher-order component to achieve similar performance optimization for
        functional components. React.memo will memoize the component and only
        re-render it if its props have changed. This is similar to the behavior
        of React.PureComponent for class components.
      </li>

      <br />

      <hr />
    </div>
  );
};

export default PCdata;
