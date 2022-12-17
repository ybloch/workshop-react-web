import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TaskForm from "./screens/TaskForm";
import TasksView from "./screens/TasksView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksView />} />
        <Route path="/tasks" element={<TasksView />} />
        <Route path="/task-form/:id?" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
