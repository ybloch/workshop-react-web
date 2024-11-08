import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TaskForm from "./screens/TaskForm";
// import Login from "./components/Login";
import { Task } from "./types/task";
import { getTasks } from "./lib/apiClient";
import { TasksView } from "./components/TasksView";
import { TaskForm } from "./components/TaskForm";

type ServerContextType = {
  tasks: Task[];
};

export const DataContext = React.createContext<ServerContextType>({
  tasks: [],
});

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((tasksFromServer: Task[]) => {
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        tasks: tasks,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksView />} />
          <Route path="/tasks" element={<TasksView />} />
          <Route path="/task-form/:id?" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
