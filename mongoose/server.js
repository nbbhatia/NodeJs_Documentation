const express = require("express");
const app = express();
const port = 5000;
const StudentRouter = require("./routers/allrouters");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose
  .connect("mongodb://localhost:27017/STUDENTRECORD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("err", err);
  });
app.use(StudentRouter);
app.listen(port, () => {
  try {
    console.log("connection established", port);
  } catch (err) {
    console.log(err);
  }
});
