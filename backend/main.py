# credit: https://github.com/mongodb-developer/pymongo-fastapi-crud
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import dotenv_values
from routes import router as task_router
from projects_router import router as projects_router

dotenv_values(".env")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient("")
    app.database = app.mongodb_client["bootcamp"]


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


app.include_router(task_router, tags=["tasks"], prefix="/api/v1/tasks")
app.include_router(projects_router, tags=["projects"], prefix="/api/v1/projects")
