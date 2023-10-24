const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log('sumith');
});

server.listen(4000);
