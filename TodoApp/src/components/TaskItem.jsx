import React from "react";

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg">
      
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
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

      <button
        onClick={() => deleteTask(task.id)}
        className="rounded-lg text-2xl cursor-pointer text-red-400 font-extrabold active:scale-95 transition"
      >
        &times;
      </button>
    </li>
  );
};

export default TaskItem;