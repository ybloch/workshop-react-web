from pymongo import MongoClient


client = MongoClient(
    "mongodb+srv://yinonb11:al0NQ4lsGn1t@cluster0.04aztqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

db = client["bootcamp"]
tasks_collection = db["tasks"]

my_tasks = [
    {"title": "Task 1", "description": "This is a description of Task 1"},
    {"title": "Task 2", "description": "This is a description of Task 2"},
    {"title": "Task 3", "description": "This is a description of Task 3"},
    {"title": "Task 4", "description": "This is a description of Task 4"},
    {"title": "Task 5", "description": "This is a description of Task 5"},
    {"title": "Task 6", "description": "This is a description of Task 6"},
    {"title": "Task 7", "description": "This is a description of Task 7"},
    {"title": "Task 8", "description": "This is a description of Task 8"},
    {"title": "Task 9", "description": "This is a description of Task 9"},
    {"title": "Task 10", "description": "This is a description of Task 10"},
]

tasks_collection.insert_many(my_tasks)
