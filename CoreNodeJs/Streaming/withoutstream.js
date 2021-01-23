const fs = require("fs");
const http = require("http");

const server = http.createServer();

// Simple read data without Streaming
server.on("request", (req, res) => {
  fs.appendFile(
    "index.txt",
    "jkhshaahjajsjsahsjasajhsahj gsgjagsgjagsjah hasjhajsh",
    (err, data) => {
      if (err) return console.log("err", err);
    }
  );
  fs.readFile("index.txt", "utf-8", (err, data) => {
    if (err) return console.log("err", err);
    res.end(data);
  });
});



// server on
server.listen(8080, "127.0.0.1");
