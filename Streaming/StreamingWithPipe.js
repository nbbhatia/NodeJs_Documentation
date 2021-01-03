const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  const ReadStream = fs.createReadStream("index.txt");
  //   pipe 2 cheez connect rehta hai kha se data read krna hai or kha paste krna hai
  //   ReadStream =>>>>>> kha se liya
  //  res ===>>>>> kha diya
  ReadStream.pipe(res);
});
server.listen(9090, "127.0.0.1");
