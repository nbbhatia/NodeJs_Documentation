const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readstream = fs.createReadStream("index.txt");
  readstream.on("data", (chunkadta) => {
    res.write(chunkadta);
  });
  readstream.on("end", () => {
    res.end();
  });
  readstream.on("error", () => {
    res.end("file not found!");
  });
});

server.listen(9000, "127.0.0.1");
