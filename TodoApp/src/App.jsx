import React from "react";
import "./App.css";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Todo />
    </div>
  );
};

export default App;
