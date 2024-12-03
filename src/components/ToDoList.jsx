import React from "react";

const ToDoList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks added yet. Start by adding one!</p>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
