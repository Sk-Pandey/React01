import React, { useState } from "react";

const Ludo = () => {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  return (
    <div className="bg-[#313131] p-4 rounded-lg space-y-4 text-white">
      <div>
        <p>Blue Moves: {moves.blue}</p>
        <button
          onClick={() => {
            setMoves((prev) => ({
              ...prev,
              blue: prev.blue + 1,
            }));
          }}
          className="px-4 py-2 mt-3 cursor-pointer rounded-lg bg-blue-500"
        >
          +1
        </button>
      </div>
      <div>
        <p>Yellow Moves: {moves.yellow}</p>
        <button
          onClick={() => {
            setMoves((prev) => ({
              ...prev,
              yellow: prev.yellow + 1,
            }));
          }}
          className="px-4 py-2 mt-3 cursor-pointer rounded-lg bg-yellow-500"
        >
          +1
        </button>
      </div>
      <div>
        <p>Green Moves: {moves.green}</p>
        <button
          onClick={() => {
            setMoves((prev) => ({
              ...prev,
              green: prev.green + 1,
            }));
          }}
          className="px-4 py-2 mt-3  cursor-pointer rounded-lg bg-green-500"
        >
          +1
        </button>
      </div>
      <div>
        <p>Red Moves: {moves.red}</p>
        <button
          onClick={() => {
            setMoves((prev) => ({
              ...prev,
              red: prev.red + 1,
            }));
          }}
          className="px-4 py-2 mt-3 cursor-pointer rounded-lg bg-red-500"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Ludo;
