var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World! I am a node app.');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
