// ***************************normal routing*******************

// const express = require("express");
// const app = express();

// // app.get(route, callback);
// app.get("/", (req, res) => {
//   res.send("hello form expres");
// });
// app.get("/about",(req,res)=>
// {
//     res.send("hello from about")
// })
// app.listen(8080, () => {
//   console.log("listening port at 8080");
// });

// ************ this is for Template engine
const express = require("express");
const app = express();

// to set vieww Engine
app.set("view engine", "hbs");
// template engine route
app.get("", (req, res) => {
  res.render("hbsFile");
});

app.listen(8084, () => {
  console.log("listening port at 8080");
});
