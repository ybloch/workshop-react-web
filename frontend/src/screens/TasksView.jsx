import React from "react";
import { DataContext } from "../App";
import TaskCard from "../components/TaskCard";

function TasksView() {
  const { tasks } = React.useContext(DataContext);
  console.log("tasks here", tasks);
  return (
    <div className="p-5">
      <h1>My Tasks 123</h1>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>

      <button
        className="btn btn-success mt-3 ms-2"
        onClick={() => {
          document.location.href = "/task-form";
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default TasksView;
