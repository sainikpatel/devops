# Experiment 01 – Java CI/CD using Jenkins Freestyle

## Aim
To create a Java Maven project, push it to GitHub, and build, test, and package it using a Jenkins Freestyle project.

## Requirements
Java JDK, Maven, Git, GitHub account, Jenkins, and the Jenkins Git/Maven/JUnit plugins as applicable.

## Files
- `src/main/java/App.java` – application code
- `src/test/java/AppTest.java` – JUnit test
- `pom.xml` – Maven configuration

## 1. Create the project

Create this folder structure:

```text
JavaProject/
├── pom.xml
└── src/
    ├── main/java/App.java
    └── test/java/AppTest.java
```

Use the files in this experiment folder.

## 2. Run locally

```bash
mvn clean test package
```

The JAR is created under `target/`. The test report is under `target/surefire-reports/`.

## 3. Push to GitHub

Create an empty GitHub repository named `JavaProject`, then run inside the project folder:

```bash
git init
git add .
git commit -m "Initial Java Maven project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/JavaProject.git
git push -u origin main
```

## 4. Configure Jenkins

1. Open Jenkins in a browser (commonly `http://localhost:8080`).
2. Install/enable the Git, Maven Integration (if available), and JUnit plugins if your Jenkins setup requires them.
3. Configure JDK and Maven under **Manage Jenkins → Tools**. Example names: `JDK21` and `Maven3`.
4. Select **New Item → Freestyle project** and name it `Java-Freestyle`.
5. Under **Source Code Management → Git**, enter your repository URL and branch `*/main`.
6. Under **Build Triggers**, select **Poll SCM** and enter `H/2 * * * *` (checks for changes approximately every two minutes).
7. Under **Build Steps**, choose **Invoke top-level Maven targets** if available and enter:
   `clean test package`
8. Under **Post-build Actions**, archive `target/*.jar` and publish JUnit reports from `target/surefire-reports/*.xml`, if those options are available.
9. Save and select **Build Now**.

## 5. Verify
Open the build's **Console Output**. A successful build should show `BUILD SUCCESS`. Check **Test Result** and **Artifacts**.

## Note
If the Maven build step is not available, configure Maven in Jenkins and use an **Execute shell** build step with `mvn clean test package`. On Windows use an **Execute Windows batch command** with `mvn clean test package`.
