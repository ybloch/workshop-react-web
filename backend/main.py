# credit: https://github.com/mongodb-developer/pymongo-fastapi-crud
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from task_routes import tasks_router

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

    app.mongodb_client = MongoClient("Link (Connection String) to your MongoDB")
    app.database = app.mongodb_client["bootcamp"]


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


app.include_router(tasks_router, tags=["tasks"], prefix="/api/v1/tasks")
