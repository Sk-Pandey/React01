import React, { useState } from "react";

const Lottery = () => {
  let lottery = () => {
    let num = Math.floor(Math.random() * 900) + 100;
    return num;
  };
  let checkWin = (number) => {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum == 15;
  };
  const [number, setNumber] = useState(lottery);

  return (
    <div>
      <div className="card w-96 bg-base-100 card-xl shadow-sm shadow-white">
        <div className="card-body">
          <h2 className="card-title mb-3 mx-auto">Lottery Game</h2>
          <p>Your Lottery Number is {number}</p>
          {checkWin(number) ? (
            <p className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold text-center">
              🎉 Congratulations! You're a lucky winner!
            </p>
          ) : (
            <p className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium text-center">
              😔 Better luck next time. Give it another shot!
            </p>
          )}
          <div className="justify-end card-actions mt-4">
            <button
              onClick={() => setNumber(lottery())}
              className="btn btn-primary active:scale-95x"
            >
              New Lottery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
