import React, { useEffect, useState } from "react";

const Generator = () => {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [pass, setPass] = useState("");

  function passGen() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (char) {
      str += "~`!@#$%^&*()-_=+*/?";
    }
    if (num) {
      str += "0123456789";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      password += str.charAt(index);
    }
    setPass(password);
  }
  useEffect(() => {
    passGen();
  }, [char, num, length]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFCEE3] rounded-lg p-8">
      <h1 className="text-xl font-bold text-center mb-4">Password Generator</h1>
      <div className="bg-white rounded-lg w-fit">
        <input
          type="text"
          placeholder="Password"
          className="p-2 focus:border-none outline-none"
          readOnly
          value={pass}
        />
        <button
          onClick={passGen}
          className="bg-blue-400 py-2 px-2 rounded-lg font-semibold text-white active:scale-98 cursor-pointer"
        >
          New
        </button>
      </div>
      <div>
        <div className="flex items-center gap-3 p-4">
          <label htmlFor="range" className="font-medium text-[18px]">
            Lenght {length}
          </label>
          <input
            type="range"
            name="length"
            id="range"
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
        </div>
        <div className="p-4 flex gap-2 items-center text-[18px] font-medium">
          <input
            type="checkbox"
            checked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
            className="scale-140 mt-1"
            name="char"
            id="char"
          />
          <label htmlFor="char">Charcter Include</label>
        </div>
        <div className="p-4 flex gap-2 items-center text-[18px] font-medium">
          <input
            type="checkbox"
            checked={num}
            onChange={() => {
              setNum((prev) => !prev);
            }}
            className="scale-140 mt-1"
            name="num"
            id="num"
          />
          <label htmlFor="num">Number Include</label>
        </div>
      </div>
    </div>
  );
};

export default Generator;
