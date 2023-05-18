# Demo web server using React and FastAPI

## Prerequisites

- Python 3.8+ and pip
- NodeJS 18+ and npm
- MongoDB server

## Getting started:

### Install Python and Javascript libraries:

```
cd ./backend
pip3 install -r requirements.txt
cd ../frontend
npm install
```

### Edit `.env` file with Database connection details:

```
cp ./backend/.env.example ./backend/.env
```

Enter the values:

```
MONGO_IP=localhost
MONGO_USER=*****
MONGO_PASSWORD=*****
```

### Run the API server:

```
cd ./backend
uvicorn main:app
```

### Run the Frontend react dev server:

```
cd ./frontend
npm start
```

## Debugging

### For VSCODE backend debugging:

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

## Deploy

To run with docker, copy the file `.env.exmaple` and call it `.env`, then edit the values.
To build all dockers run:

```bash
docker-compose build
# for debug you can run
docker-compose build --progress plain --no-cache backend
```

To start all dockers you can run:

```bash
docker-compose up
# OR you can make it better with
docker-compose up -d && docker-compose ps && docker-compose logs -f
```

To list all volumes on your docker daemon:

```bash
docker volume ls
docker volume rm <VOLUME_NAME>
```

To create self-sign certificate:

```bash
openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
openssl req -new -x509 -key private.key -out certificate.crt -days 365
```
