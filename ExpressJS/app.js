const express = require("express");
const app = express();

// app.get(route, callback);
app.get("/", (req, res) => {
  res.send("hello form expres");
});
app.get("/about",(req,res)=>
{ 
    res.send("hello from about page")
})
app.listen(8080, () => {
  console.log("listening port at 8080");
});
