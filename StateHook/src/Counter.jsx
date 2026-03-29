import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-5xl font-bold">{Counter}</h1>
      <div className="flex gap-6">
        <button
          disabled={Counter + 1 > 100}
          className="btn btn-soft btn-success"
          onClick={() => setCounter(Counter + 1)}
        >
          Increment
        </button>
        <button
          disabled={Counter - 1 < 0}
          className="btn btn-soft btn-primary"
          onClick={() => setCounter(Counter - 1)}
        >
          Decreament
        </button>
        <button
          disabled={Counter == 0}
          className="btn btn-soft btn-error"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
