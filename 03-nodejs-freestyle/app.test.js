const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./app");

test("greet returns a greeting", () => {
    assert.equal(greet("DevOps"), "Hello, DevOps!");
});
