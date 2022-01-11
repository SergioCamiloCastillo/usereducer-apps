import React, { useReducer } from "react";

const types = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
};
const CounterApp = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Clicks:{counter}</h1>
      <button onClick={() => dispatch({ type: types.increment })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: types.decrement })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
    </div>
  );
};

export default CounterApp;
