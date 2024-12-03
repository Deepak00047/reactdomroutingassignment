import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <h1>To-Do List</h1>
      <ToDoForm onAddTask={addTask} />
      <ToDoList tasks={tasks} />
      <br />
      <Link to="/about">Go to About Page</Link>
    </MainLayout>
  );
};

export default HomePage;
