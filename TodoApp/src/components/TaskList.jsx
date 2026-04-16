import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="mt-6">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet 🚀</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;