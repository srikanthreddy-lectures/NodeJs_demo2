/*const express=require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Srikanth Reddy")
});

app.listen(8080);
*/

var http = require('http'),
  fs = require('fs');

fs.readFile('./www/index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { 'Content-Type': 'text/html' });
      response.write(html);
      response.end();
    })
    .listen(3000);
});