import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import AddEditTaskPage from "./pages/AddEditTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import { TaskProvider } from "./context/taskContext";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path='/' element={<TaskListPage />} />
          <Route path='/add' element={<AddEditTaskPage />} />
          <Route path='/edit/:id' element={<AddEditTaskPage />} />
          <Route path='/details/:id' element={<TaskDetailsPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
