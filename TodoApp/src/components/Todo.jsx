import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [tasksList, setTasksList] = useState([
    { id: uuidv4(), task: "Eat", done: false },
    { id: uuidv4(), task: "Code", done: false },
    { id: uuidv4(), task: "Sleep", done: false },
  ]);
  const [input, setInput] = useState("");

  function addtask() {
    const trimmed = input.trim();

    if (trimmed !== "") {
      setTasksList((prev) => [
        ...prev,
        { id: uuidv4(), task: trimmed, done: false },
      ]);
      setInput("");
    } else {
      alert("Please Enter Task First");
    }
  }

  function deleteTask(id) {
    setTasksList((prev) => prev.filter((item) => item.id !== id));
  }

  function doneUnDone(id) {
    setTasksList((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          if (task.done) {
            return { ...task, done: false };
          } else {
            return { ...task, done: true };
          }
        } else {
          return task;
        }
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          📝 Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your task..."
            className="flex-1 bg-gray-700 px-4 py-2 rounded-lg text-white outline-none focus:ring-2 focus:ring-teal-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addtask();
            }}
          />

          <button
            onClick={addtask}
            className="bg-teal-600 hover:bg-teal-500 px-4 py-2 cursor-pointer rounded-lg text-white active:scale-95 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="mt-6">
          {tasksList.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks yet 🚀</p>
          ) : (
            <ul className="space-y-3">
              {tasksList.map((task, index) => (
                <li
                  key={task.id}
                  className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg"
                >
                  {/* LEFT SIDE (grouped) */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => doneUnDone(task.id)}
                      className="checkbox checkbox-primary"
                    />
                    <span
                      className={`text-white ${
                        task.done
                          ? "line-through opacity-50"
                          : "hover:text-gray-300"
                      }`}
                    >
                      {task.task}
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="rounded-lg text-2xl cursor-pointer text-red-400 font-extrabold active:scale-95 transition"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
