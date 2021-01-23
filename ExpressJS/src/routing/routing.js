const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("about page");
});
app.get("/contact", (req, res) => {
  res.send("this is contact page");
});
app.get("/temp", (req, res) => {
  res.send("temp page");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
app.listen(port, () => {
  console.log(`listening port`, port);
});
