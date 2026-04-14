import React from "react";
import "./App.css";
import HelloUser from "./components/HelloUser";
const App = () => {
  return (
    <div>
      <HelloUser name="Mayank" color="teal" />
      <HelloUser name="Akash" color="tomato" />
    </div>
  );
};

export default App;
