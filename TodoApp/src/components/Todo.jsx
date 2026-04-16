import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Study"]);
  const [input, setInput] = useState("");
  function addtask() {
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, input]);
      setInput("");
    } else {
      alert("Please Enter Task First");
    }
  }
  return (
    <>
      <div className="space-x-2">
        <input
          type="text"
          placeholder="Enter Your task here"
          className="bg-gray-800 px-4 py-2 rounded-lg text-white"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={addtask}
          className=" cursor-pointer active:scale-95 bg-teal-600 px-4 py-2 rounded-lg text-white"
        >
          Add Task
        </button>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl font-bold">Task List</h1>
        <ul className="bg-rose-200 p-4 rounded-lg">
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                {index + 1}. {task}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
