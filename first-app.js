const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      "<body><form action='/message' method='POST' ><input type='text'><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My node page</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My node page</title></head>");
    res.write("<body><h1> Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My node page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My node page</title></head>");
  res.write("<body><h1>Hello World from my server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
