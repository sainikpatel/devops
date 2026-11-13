# Experiment 10 – Kubernetes Deployment of a Containerized Application

## Aim
To deploy and manage a containerized Node.js application using Kubernetes.

## Requirements
- Docker Desktop
- Kubernetes enabled in Docker Desktop
- `kubectl` command available
- The `nodeapp` image built locally using Experiment 07

## 1. Build the image

From `07-containerized-apps/nodejs`:

```bash
docker build -t nodeapp .
```

For Docker Desktop's local Kubernetes, the local image is normally available to its Kubernetes runtime. If using another cluster, push the image to a registry and update the image name and pull policy.

## 2. Enable Kubernetes
In Docker Desktop, open **Settings → Kubernetes**, enable Kubernetes, and wait for it to become ready.

Check the cluster:

```bash
kubectl config current-context
kubectl get nodes
```

## 3. Apply the deployment

From this folder, run:

```bash
kubectl apply -f deployment.yaml
```

## 4. Apply the service

```bash
kubectl apply -f service.yaml
```

## 5. Verify

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

Wait until both pods show `Running` and the deployment is ready.

## 6. Access the application

```bash
kubectl port-forward service/node-service 8080:3000
```

Keep that terminal running and open `http://localhost:8080` in a browser. Press Ctrl+C to stop port forwarding.

## 7. Useful commands

```bash
kubectl describe deployment node-deployment
kubectl describe pods
kubectl logs deployment/node-deployment
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
```

## Important
- A Pod is the smallest deployable Kubernetes unit.
- A Deployment manages Pods and replicas.
- A Service provides a stable network endpoint for Pods.
- The YAML uses `imagePullPolicy: Never` because it expects the image to exist locally. For a registry image, use `IfNotPresent` or `Always` as appropriate.
