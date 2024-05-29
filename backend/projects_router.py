from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Project

router = APIRouter()


@router.get("", response_description="List all projects", response_model=List[Project])
def list_projects(request: Request):
    projects = list(request.app.database["projects"].find(limit=100))
    return projects


@router.post(
    "",
    response_description="Create a new project",
    status_code=status.HTTP_201_CREATED,
    response_model=Project,
)
def create_project(request: Request, project: Project = Body(...)):
    project = jsonable_encoder(project)
    new_project = request.app.database["projects"].insert_one(project)
    created_project = request.app.database["projects"].find_one(
        {"_id": new_project.inserted_id}
    )

    return created_project


@router.delete("/{id}", response_description="Delete a project")
def delete_project(id: str, request: Request, response: Response):
    delete_result = request.app.database["projects"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail=f"project with ID {id} not found"
    )
