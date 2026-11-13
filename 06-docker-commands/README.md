# Experiment 06 – Docker Commands

## Aim
To perform basic Docker image, container, volume, network, and system operations using Docker CLI.

## Requirement
Docker Desktop / Docker Engine must be installed and running.

## 1. Image commands

```bash
docker pull nginx
docker images
docker build -t myapp .
docker rmi nginx
docker image prune
```

- `pull` downloads an image.
- `images` lists local images.
- `build` creates an image from a Dockerfile.
- `rmi` removes an image (only if no container is using it).
- `image prune` removes unused dangling images.

## 2. Container commands

```bash
docker run -d -p 8080:80 --name mycontainer nginx
docker ps
docker ps -a
docker logs mycontainer
docker stop mycontainer
docker start mycontainer
docker restart mycontainer
docker rm mycontainer
```

To force-remove a running container:

```bash
docker rm -f mycontainer
```

To open a shell inside a running container:

```bash
docker exec -it mycontainer sh
```

## 3. Volume commands

```bash
docker volume create myvolume
docker volume ls
docker volume inspect myvolume
docker volume rm myvolume
```

## 4. Network commands

```bash
docker network ls
docker network create mynetwork
docker network inspect mynetwork
docker network rm mynetwork
```

## 5. System commands

```bash
docker version
docker info
docker system df
docker system prune
```

`docker system prune` removes unused Docker data. Read its confirmation prompt before accepting.

## 6. Simple demonstration

1. Run `docker pull nginx`.
2. Run `docker run -d -p 8080:80 --name mycontainer nginx`.
3. Open `http://localhost:8080` in a browser.
4. Run `docker ps` to view the container.
5. Run `docker logs mycontainer`.
6. Run `docker stop mycontainer`.
7. Run `docker rm mycontainer`.

## Important
- In `-p 8080:80`, 8080 is the host port and 80 is the container port.
- `docker ps` shows running containers; `docker ps -a` shows all containers.
