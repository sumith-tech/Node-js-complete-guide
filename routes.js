const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("message data", data);

      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(`<span>${data}</span>`);
      res.write(
        "<body><form action='/message' method='POST' ><input type='text' name='message'><button type='submit'>submit</button></form></body>"
      );
      res.write("</html>");

      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const phraseBody = Buffer.concat(body).toString();
      const message = phraseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My node page</title></head>");
    res.write("<body><h1>Hello World from my server</h1></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
