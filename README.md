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
