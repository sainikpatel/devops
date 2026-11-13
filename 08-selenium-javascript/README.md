# Experiment 08 – JavaScript and Selenium Testing

## Aim
To automate a browser using Selenium WebDriver and JavaScript.

## Requirement
Node.js, npm, Google Chrome, and internet access for the sample Google page. Selenium Manager may need internet access on the first run to obtain a compatible browser driver.

## 1. Create project and install package

```bash
npm init -y
npm install selenium-webdriver
```

## 2. Create `test.js`

Use the `test.js` file in this folder.

## 3. Run

```bash
node test.js
```

The browser opens, navigates to Google, enters a search phrase, submits it, and closes. The terminal prints the test result.

## Note
The test depends on Google being reachable and Chrome being installed. Browser/driver compatibility and lab network restrictions may affect execution.
