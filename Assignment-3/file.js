const fs = require("fs");
const https = require("http").createServer((request, response) => {
  fs.writeFile(
    "index.html",
    "<div><h1> Hello World </h1><p>This is jennifer...</p></div>",
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("created");
    }
  );
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
});
https.listen(5000, () => console.log("server running at 5000"));
