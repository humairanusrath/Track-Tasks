import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Tasks cannot be empty!");
      return;
    }
    addTask({ id: Date.now(), text: task, priority });
    setTask("");
    setPriority("Medium");
  };
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>{" "}
    </div>
  );
};

export default TaskInput;
