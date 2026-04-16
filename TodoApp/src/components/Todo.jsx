import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todo = () => {
  const [tasksList, setTasksList] = useState([
    { id: uuidv4(), task: "Eat", done: false },
    { id: uuidv4(), task: "Code", done: false },
    { id: uuidv4(), task: "Sleep", done: false },
  ]);

  const [input, setInput] = useState("");

  function addTask() {
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

  function toggleTask(id) {
    setTasksList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        
        <Header />

        <TaskInput
          input={input}
          setInput={setInput}
          addTask={addTask}
        />

        <TaskList
          tasks={tasksList}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

      </div>
    </div>
  );
};

export default Todo;