const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.redirect();
});

app.post("/adicionar", (req, res) => {
  res.redirect("/");
});
