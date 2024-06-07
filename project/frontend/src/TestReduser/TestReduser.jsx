import React, { useReducer } from "react";

import "../TestReduser/TestReduser.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        count: state.count + 1,
      };
    }
    case "MINUS": {
      return {
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default function TestReduser() {
  const [counter, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-customTwo rounded-md shadow-md p-3 w-[300px] text-myWhite shadow-black flex flex-col gap-3">
        <h1 className="text-lg text-center">test reduser</h1>

        <p className="text-2xl">{counter.count}</p>

        <div className="flex w-full justify-between">
          <button onClick={() => dispatch({ type: "ADD" })}>add</button>
          <button onClick={() => dispatch({ type: "MINUS" })}>minus</button>
        </div>
      </div>
    </div>
  );
}
