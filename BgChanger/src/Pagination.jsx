import React, { useState } from "react";

const Pagination = () => {
  const [Color, setColor] = useState("bg-rose-400");
  return (
    <div className={`container ${Color}`}>
      <div className="join">
        <button
          onClick={() => setColor("bg-violet-500")}
          className="join-item btn btn-md"
        >
          Lavender Purple
        </button>
        <button
          onClick={() => setColor("bg-emerald-400")}
          className="join-item btn btn-md"
        >
          Mint Green
        </button>
        <button
          onClick={() => setColor("bg-sky-500")}
          className="join-item btn btn-md"
        >
          Sky Blue
        </button>
        <button
          onClick={() => setColor("bg-orange-300")}
          className="join-item btn btn-md"
        >
          Peach
        </button>
        <button
          onClick={() => setColor("bg-rose-400")}
          className="join-item btn btn-md"
        >
          Rose
        </button>
      </div>
    </div>
  );
};

export default Pagination;
