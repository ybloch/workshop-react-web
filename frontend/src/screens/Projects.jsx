import React, { useEffect, useState } from "react";

const PROJECTS_URL = "http://localhost:8000/api/v1/projects";

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [taskCounter, setCounter] = useState(0);

  useEffect(() => {
    fetch(PROJECTS_URL)
      .then((resp) => resp.json())
      .then((jsons) => setProjects(jsons));
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  function handleDelete(id) {
    fetch(`${PROJECTS_URL}/` + id, {
      method: "DELETE",
    }).then(() => setProjects(projects.filter((proj) => proj._id !== id)));
  }
  function handleAddProject() {
    fetch(PROJECTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        tasks_count: taskCounter,
      }),
    })
      .then((res) => res.json())
      .then((project) => setProjects([...projects, project]));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "50px",
      }}
    >
      <h1>Projects</h1>
      <div className="flex flex-column">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          onChange={handleNameChange}
        />
        <label>Counter</label>
        <input
          className="form-control"
          type="number"
          onChange={(e) => setCounter(parseInt(e.target.value))}
        />
      </div>
      <hr />
      <button className="btn btn-primary" onClick={handleAddProject}>
        Add project
      </button>
      <hr />
      {projects.map((project) => (
        <div className="card p-2" key={project._id}>
          {project.name} - {project.tasks_count}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(project._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
