# Experiment 05 – Python CI/CD using Jenkins Pipeline

## Aim
To automate checkout, dependency installation, compilation, testing, and packaging of a Python project using Jenkins Pipeline.

## 1. Push to GitHub

Create `PythonPipelineProject` and run:

```bash
git init
git add .
git commit -m "Add Python pipeline project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/PythonPipelineProject.git
git push -u origin main
```

## 2. Create Jenkins Pipeline

1. Select **New Item → Pipeline** and name it `Python-Pipeline`.
2. Select **Pipeline script**.
3. Paste the `Jenkinsfile` from this folder. Replace `YOUR_USERNAME` with your GitHub username.
4. Save and click **Build Now**.
5. Check Console Output and test results.

## 3. Run locally first

```bash
python3 -m pip install -r requirements.txt
python3 -m pytest -q
```

## Windows note
The provided Jenkinsfile uses `sh` and `python3` for macOS/Linux agents. For Windows agents, replace `sh` with `bat` and `python3` with `python`; change `mkdir -p dist` to `if not exist dist mkdir dist`.
