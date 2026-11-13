const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Node.js Application Running in Docker");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Node.js app running on port 3000");
});
