import React from "react";
import { useParams } from "react-router-dom";

function TaskForm() {
  let { id } = useParams();
  const isEdit = !!id;

  return (
    <div>
      <div className="d-flex justify-content-start mt-5 ms-5">
        <h1>{isEdit ? "Edit Task" : "Create Task"}</h1>
      </div>
      <div className="p-5 ">
        <div className="my-3 row">
          <label className="col-1" htmlFor="title">
            Title
          </label>
          <input className="col-4" type="text" id="title" name="title" />
        </div>
        <div className="my-3 row">
          <label className="col-1" htmlFor="description">
            Description
          </label>
          <input
            className="col-4"
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button className="">{isEdit ? "Update Task" : "Create Task"}</button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
