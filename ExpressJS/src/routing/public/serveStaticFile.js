const express = require("express");
const app = express();
// path module
const path = require("path");
// serve static file
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.listen(8080, () => {
  console.log("listening port at 8080");
});
