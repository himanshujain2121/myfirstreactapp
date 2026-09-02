import React from "react";

const StateWithFunctionHooks = () => {
  let [count, setCount] = React.useState(0);

  let inc = () => {
    setCount( count + 1);
  };

  let dec = () => {
    setCount( count - 1)
  }

  let reset = ()=> {
    setCount(0);
  }

  return (
    <>
      <div> StateWithFunctionHooks</div>
      <h1> Count: {count} </h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default StateWithFunctionHooks;
