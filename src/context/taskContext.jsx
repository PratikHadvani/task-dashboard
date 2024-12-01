import React, { createContext, useContext, useState, useEffect } from "react";
import { getTasks } from "../utils/localData";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks); // Fetch initial tasks
  }, []);

  const value = { tasks, setTasks };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
