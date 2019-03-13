const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/m/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/m/:title_url/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/m/:title_url/:id', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`listening to: ${port}`);
});