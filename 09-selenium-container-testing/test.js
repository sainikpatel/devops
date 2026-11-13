const { Builder, By } = require("selenium-webdriver");
const assert = require("node:assert/strict");

async function test() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        // Test the Node.js application running in Docker
        await driver.get("http://localhost:3000");
        const nodeText = await driver.findElement(By.tagName("body")).getText();
        assert.ok(nodeText.includes("Node"), "Node.js app check failed");
        console.log("Node.js Application Test Passed");

        // Test the Python application running in Docker
        await driver.get("http://localhost:5000");
        const pythonText = await driver.findElement(By.tagName("body")).getText();
        assert.ok(pythonText.includes("Python"), "Python app check failed");
        console.log("Python Application Test Passed");
    } catch (error) {
        console.error("Test Failed:", error.message);
        process.exitCode = 1;
    } finally {
        await driver.quit();
    }
}

test();
