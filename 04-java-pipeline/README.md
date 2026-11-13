# Experiment 04 – Java CI/CD using Jenkins Pipeline

## Aim
To automate Java checkout, compilation, testing, and packaging using a Jenkins Pipeline.

## Files
This folder contains the same Maven project structure as Experiment 01 plus `Jenkinsfile`.

## 1. Push the project to GitHub
Create a GitHub repository named `JavaPipelineProject` and push the files:

```bash
git init
git add .
git commit -m "Add Java pipeline project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/JavaPipelineProject.git
git push -u origin main
```

## 2. Configure Jenkins tools
Under **Manage Jenkins → Tools**, configure:
- JDK installation named `JDK21`
- Maven installation named `Maven3`

The names must exactly match the `Jenkinsfile`. Configure the actual installed paths or let Jenkins install them if permitted.

## 3. Create the Pipeline
1. Select **New Item**.
2. Enter `Java-Pipeline`.
3. Select **Pipeline** and click OK.
4. Under Pipeline, select **Pipeline script**.
5. Paste the content of `Jenkinsfile` (or select Pipeline script from SCM and point it to your GitHub repository).
6. Save and select **Build Now**.

## 4. Verify
Open Console Output. The stages should complete: Checkout, Compile, Test, Package. A successful run archives the JAR and publishes test results.

## Windows note
This Jenkinsfile uses `sh` for macOS/Linux agents. For a Windows agent, replace `sh 'mvn ...'` with `bat 'mvn ...'`.
