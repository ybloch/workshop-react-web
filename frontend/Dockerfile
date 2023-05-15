FROM node:20-alpine

WORKDIR frontend/

COPY frontend/ .

RUN ls -la

RUN npm install

ENTRYPOINT ["npm", "start"]
