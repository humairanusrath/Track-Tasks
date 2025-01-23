import React, { useState } from "react";
import TaskInput from "./components/TaskInput/TaskInput";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("Tasks:", [...tasks, newTask]);
  };
  return (
    <div>
      <h1>Track Tasks</h1>
      <TaskInput addTask={addTask} />
    </div>
  );
};

export default App;
