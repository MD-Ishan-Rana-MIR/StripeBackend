const express = require("express");
const app = new express();
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server running");
});
const router = require("./src/routes/api");

app.use("/api/v1", router);

module.exports = app;
