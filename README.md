## Demo exercise for web server using React and FastAPI

### Getting started:

#### Install Python libraries:

```
cd backend
pip3 install -r requirements.txt
cd ../frontend
npm install
```

Run the API server:

```
cd backend
uvicorn main:app
```

Run the Frontend react dev server:

```
cd frontend
npm start
```

For VSCODE backend debugging:

```
       {
            "name": "Python: FastAPI",
            "type": "python",
            "request": "launch",
            "module": "uvicorn",
            "cwd": "${workspaceFolder}/backend",
            "args": [
                "main:app"
            ],
            "jinja": true,
            "justMyCode": true
        }
```
