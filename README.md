# DevOps Lab Practicals – 10 Complex Experiments

Beginner-friendly notes, source code, commands, and execution steps for the 10 complex DevOps lab experiments.

## Experiments

| No. | Folder | Experiment |
|---|---|---|
| 01 | `01-java-freestyle` | Java CI/CD using Jenkins Freestyle |
| 02 | `02-python-freestyle` | Python CI/CD using Jenkins Freestyle |
| 03 | `03-nodejs-freestyle` | Node.js CI/CD using Jenkins Freestyle |
| 04 | `04-java-pipeline` | Java CI/CD using Jenkins Pipeline |
| 05 | `05-python-pipeline` | Python CI/CD using Jenkins Pipeline |
| 06 | `06-docker-commands` | Docker image, container, volume and network commands |
| 07 | `07-containerized-apps` | Build and run Node.js and Python apps using Docker |
| 08 | `08-selenium-javascript` | Browser automation using Selenium and JavaScript |
| 09 | `09-selenium-container-testing` | Selenium testing of Dockerized web applications |
| 10 | `10-kubernetes-deployment` | Deploy a Dockerized app using Kubernetes |

## Before you start

Install the tools required by the experiment:
- Git and a GitHub account
- Jenkins (for Experiments 01–05)
- Java JDK and Maven (for Java experiments)
- Python and pip (for Python experiments)
- Node.js and npm (for Node.js and Selenium experiments)
- Docker Desktop (for Experiments 06–10)
- Kubernetes enabled in Docker Desktop and `kubectl` (for Experiment 10)
- Google Chrome (for Selenium experiments)

Versions and menu labels can differ between lab computers. Use the versions installed by your college where specified.

## How to use this repository

1. Open the folder for the experiment.
2. Read its `README.md` from top to bottom.
3. Create a GitHub repository for the sample project where the experiment asks you to push code.
4. Replace `YOUR_USERNAME` in Git commands and Jenkins configuration with your GitHub username.
5. Run commands from the directory containing the relevant files.

## Important notes

- Jenkins Freestyle projects are configured in the Jenkins UI; the sample source files are in each experiment folder.
- Jenkins Pipeline experiments use a `Jenkinsfile`. Configure the tool names in Jenkins to match the names in that file.
- Jenkinsfiles in this repository use Linux/macOS `sh` commands. On a Windows Jenkins agent, replace `sh` with `bat` and adapt shell commands.
- Docker commands require Docker Desktop/Engine to be running.
- The Selenium examples use Selenium Manager where supported to locate/download a compatible browser driver. The first run may need internet access.
- Experiment 09 assumes the Node.js and Python apps from Experiment 07 are running and display text containing `Node` and `Python`, respectively.
- Experiment 10 uses a locally built Docker image. It is designed for Docker Desktop's local Kubernetes context. Other Kubernetes clusters may need the image pushed to a registry and the `imagePullPolicy` changed.
- These are learning examples. Do not put real passwords, API keys, or personal data in this repository.

## Git commands to publish your own copy

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Add DevOps lab practicals"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-practicals.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. If the repository already exists and has a README or other commits, follow Git's instructions to pull/reconcile those changes before pushing.
