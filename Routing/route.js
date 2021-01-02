const http = require("http");
// const url = require("url");
const Server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h2>you are in home page</h2>");
  } else if (req.url === "/about") {
    res.end("<h2>you are in about page</h2>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 your page is not found</h1>");
  }
});
Server.listen(8080, () => {
  console.log("pport is listing on 8000");
});
