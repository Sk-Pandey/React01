import React from "react";

const TaskInput = ({ input, setInput, addTask }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your task..."
        className="flex-1 bg-gray-700 px-4 py-2 rounded-lg text-white outline-none focus:ring-2 focus:ring-teal-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />

      <button
        onClick={addTask}
        className="bg-teal-600 hover:bg-teal-500 px-4 py-2 cursor-pointer rounded-lg text-white active:scale-95 transition"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;