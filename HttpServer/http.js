const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello , this is nidhi from my own server");
});
server.listen(8000, () => {
  console.log("server is runnig on 8000");
});
