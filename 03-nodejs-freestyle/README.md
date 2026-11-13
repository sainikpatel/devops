# Experiment 03 – Node.js CI/CD using Jenkins Freestyle

## Aim
To install dependencies, test, and package a Node.js project using Jenkins Freestyle.

> Note: The question sheet mentions Maven for Node.js. Maven is normally used for Java projects; Node.js projects conventionally use npm. This example uses npm.

## Files
- `app.js` – application function
- `app.test.js` – built-in Node test
- `package.json` – project configuration

## 1. Run locally

```bash
npm install
npm test
```

## 2. Push to GitHub

Create an empty repository named `NodeProject`, then run:

```bash
git init
git add .
git commit -m "Initial Node.js project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/NodeProject.git
git push -u origin main
```

## 3. Configure Jenkins Freestyle

1. Create a Freestyle project named `Node-Freestyle`.
2. Configure Git repository URL and branch `*/main`.
3. Add Poll SCM trigger `H/2 * * * *`.
4. Add an **Execute shell** build step:

```bash
npm install
npm test
npm pack
```

On Windows use **Execute Windows batch command** with the same commands.

5. Archive the generated package using `*.tgz`.
6. Save and click **Build Now**.

## 4. Verify
Check Console Output for passing tests and successful packaging. The `.tgz` file should appear under build artifacts if archived.
