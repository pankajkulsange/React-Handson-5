import React from "react";

const HOCdata = () => {
  return (
    <div>
      <h1>Higher order component</h1>
      <hr />
      <p>
        <span>
          <h3>Defination:</h3>
        </span>
        <span>
          <li>
            A higher-order component (HOC) is an advanced technique in React for
            reusing component logic.
          </li>
          <br />
          <li>
            Higher Order Component (HOC) is wrapping around "normal" component
            and provide additional data input. It is actually a function that
            takes one component and returns another component that wraps the
            original one.
          </li>
          <br />
          <li>
            Logic is same for both below components, and impliment once in HOC
            component.
          </li>
        </span>
      </p>
      <hr />
    </div>
  );
};

export default HOCdata;
