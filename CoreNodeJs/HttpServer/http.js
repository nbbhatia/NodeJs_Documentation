const { fstat } = require("fs");
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/showUsers") {
    fs.readFile(`${__dirname}/UserAPI/userapi.json`, "utf-8", (err, data) => {
      res.end(data);
      console.log("data", data);
    });
  }
});
server.listen(8090, () => {
  console.log("server is runnig on 8000");
});
