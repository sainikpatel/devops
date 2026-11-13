# Experiment 07 – Containerize Node.js and Python Applications

## Aim
To create Docker images and run Node.js and Python applications inside containers.

## Requirement
Docker Desktop must be running. Install Node.js/npm and Python only if you also want to run the apps outside Docker.

## Part A – Node.js app

1. Open the `nodejs` folder.
2. Build the image:

```bash
docker build -t nodeapp .
```

3. Run the container:

```bash
docker run -d -p 3000:3000 --name nodecontainer nodeapp
```

4. Open `http://localhost:3000`.
5. Check it using `docker ps` and `docker logs nodecontainer`.

## Part B – Python app

1. Open the `python` folder.
2. Build the image:

```bash
docker build -t pythonapp .
```

3. Run the container:

```bash
docker run -d -p 5000:5000 --name pythoncontainer pythonapp
```

4. Open `http://localhost:5000`.
5. Check it using `docker ps` and `docker logs pythoncontainer`.

## Stop and remove containers

```bash
docker stop nodecontainer pythoncontainer
docker rm nodecontainer pythoncontainer
```

To remove the images:

```bash
docker rmi nodeapp pythonapp
```

## Dockerfile explanation
- `FROM` selects the base image.
- `WORKDIR` sets the working directory inside the image.
- `COPY` copies files into the image.
- `RUN` executes a command while building the image.
- `EXPOSE` documents the port used by the app.
- `CMD` specifies the default command when the container starts.

`EXPOSE` does not publish a port by itself. `-p HOST_PORT:CONTAINER_PORT` publishes it.
