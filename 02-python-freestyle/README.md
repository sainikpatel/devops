# Experiment 02 – Python CI/CD using Jenkins Freestyle

## Aim
To build, test, and package a Python project using a Jenkins Freestyle project.

## Files
- `app.py` – application function
- `test_app.py` – pytest test
- `requirements.txt` – test dependency

## 1. Run locally

```bash
python -m pip install -r requirements.txt
python -m pytest -q
```

On systems where Python is named `python3`, use `python3` instead.

## 2. Push to GitHub

Create an empty repository named `PythonProject`, then run:

```bash
git init
git add .
git commit -m "Initial Python project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/PythonProject.git
git push -u origin main
```

## 3. Configure Jenkins Freestyle

1. Create a Freestyle project named `Python-Freestyle`.
2. Under **Source Code Management → Git**, enter the repository URL and branch `*/main`.
3. Under **Build Triggers**, select **Poll SCM** and enter `H/2 * * * *`.
4. Add an **Execute shell** build step on macOS/Linux and paste:

```bash
python3 -m pip install -r requirements.txt
python3 -m compileall -q app.py test_app.py
python3 -m pytest -q --junitxml=test-results.xml
mkdir -p dist
python3 -m zipfile -c dist/PythonProject.zip app.py
```

On Windows, use **Execute Windows batch command** and paste:

```bat
python -m pip install -r requirements.txt
python -m compileall -q app.py test_app.py
python -m pytest -q --junitxml=test-results.xml
if not exist dist mkdir dist
python -m zipfile -c dist/PythonProject.zip app.py
```

5. Under **Post-build Actions**, archive `dist/*.zip` and publish JUnit report `test-results.xml` if the corresponding plugins/actions are available.
6. Save and click **Build Now**.

## 4. Verify
Check the Console Output for a successful build, the test result, and the archived ZIP artifact.
