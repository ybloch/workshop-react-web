import React, { useEffect, useState } from "react";

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [taskCounter, setTaskCounter] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  function addProject() {
    fetch("http://localhost:8000/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        tasks_count: taskCounter,
      }),
    });
  }

  function removeProject(id) {
    fetch(`http://localhost:8000/api/v1/projects/${id}`, {
      method: "DELETE",
    }).then(() =>
      setProjects(projects.filter((project) => project._id !== id))
    );
  }

  return (
    <div
      className="flex flex-column p-5"
      style={{
        gap: "22px",
      }}
    >
      <div className="mb-5">Projects</div>
      <div>
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex flex-row card p-3 justify-content-between align-items-center"
          >
            <label>{project.name}</label>
            <button
              onClick={() => removeProject(project._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-column card p-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={taskCounter}
          onChange={(e) => setTaskCounter(parseInt(e.target.value))}
        />
      </div>
      <button className="btn btn-primary" onClick={addProject}>
        Add project
      </button>
    </div>
  );
}
