const hostname = "127.0.0.1";
const port = 3000;
const secretKey = require("./key-module");
const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/info.txt")
});

app.get("/secretKey=" + ":secretKey", function(req, res) {
  if(req.params.secretKey === secretKey.secretKey){
    res.sendFile(__dirname + "/secret.html")
  }else{
    res.redirect("/");
  }
});

//redirects all unused querystring to default
app.get("*", function(req, res) {
  res.redirect("/");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

