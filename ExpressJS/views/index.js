const express = require("express");
const app = express();

// to set vieww Engine
app.set("view engine", "hbs");
// template engine route
app.get("", (req, res) => {
  res.render("hbsFile", {
    // Name: "nidhi",
    state: "uttarakhand",
  });
});
app.listen(8083, () => {
  console.log("listening port at 8080");
});
