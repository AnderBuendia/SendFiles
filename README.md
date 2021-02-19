# SendFiles

## About this Repo

You can use this web through the next link:
https://send-files-frontend.vercel.app/

## Using this repository

Before use this repository, you need to install [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

## Backend

You need to clone the following repository:

```
https://github.com/AnderBuendia/sendfiles-backend.git
```
Then go to the directory and modify the .env.example file:

```
cd sendfiles-backend
mv .env.example .env
```

Run docker-compose to build and initialize the server:

```
docker-compose up [-d]
```

Go to the web browser and test this at [http://localhost:$PORT](http://localhost:$PORT) and Hello World! must be appears.

## Frontend
