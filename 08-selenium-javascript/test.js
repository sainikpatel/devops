const { Builder, By } = require("selenium-webdriver");
const assert = require("node:assert/strict");

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.google.com");

        let title = await driver.getTitle();
        console.log("Page Title:", title);

        assert.ok(title.toLowerCase().includes("google"), "Google page did not open");

        let search = await driver.findElement(By.name("q"));
        await search.sendKeys("Selenium Testing");
        await search.submit();

        console.log("Test Passed!");
    } catch (error) {
        console.error("Test Failed:", error.message);
        process.exitCode = 1;
    } finally {
        await driver.quit();
    }
}

test();
