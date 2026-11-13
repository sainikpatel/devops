# Experiment 09 – Selenium Test Cases for Containerized Applications

## Aim
To test Node.js and Python web applications running inside Docker containers using Selenium WebDriver.

## Requirements
- Docker Desktop running
- Node.js and npm
- Google Chrome
- The Node.js and Python app images from Experiment 07

## 1. Build the apps (if not already built)

From the Node.js app folder:

```bash
docker build -t nodeapp .
```

From the Python app folder:

```bash
docker build -t pythonapp .
```

## 2. Start the containers

If the containers already exist but are stopped:

```bash
docker start nodecontainer
docker start pythoncontainer
```

If they do not exist, create them:

```bash
docker run -d -p 3000:3000 --name nodecontainer nodeapp
docker run -d -p 5000:5000 --name pythoncontainer pythonapp
```

Check:

```bash
docker ps
```

Verify both pages in a browser:
- `http://localhost:3000` should display text containing `Node`.
- `http://localhost:5000` should display text containing `Python`.

## 3. Install Selenium

From this folder:

```bash
npm init -y
npm install selenium-webdriver
```

## 4. Run the Selenium test

```bash
node test.js
```

The script opens Chrome, checks both application pages, prints a pass message for each successful check, and closes Chrome.

## 5. Expected terminal output

```text
Node.js Application Test Passed
Python Application Test Passed
```

## Troubleshooting
- If a page cannot open, check `docker ps` and the container logs.
- If port 3000 or 5000 is already in use, stop the process using it or choose a different host port and update the URL in `test.js`.
- If Selenium cannot start Chrome, check that Chrome is installed and allow Selenium Manager to obtain a compatible driver if internet access is available.
