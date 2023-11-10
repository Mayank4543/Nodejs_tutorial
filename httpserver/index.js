const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("this is a home side");
  } else if (req.url == "/about") {
    res.end("this is a about side");
  } else if (req.url == "/contact") {
    res.end("hell this contact isde");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      // const objData = JSON.parse(data);
      // res.end(objData[1].name);
      res.end(data);
    });
    // res.end("hell this userapi");
  } else {
    res.writeHead(404);
    res.end("404 error pages. PAge doest exit");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
