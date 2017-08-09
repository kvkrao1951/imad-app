var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/SC_ICON.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SC_ICON.ico'));
});

app.get('/ui/kvkr01.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kvkr01.jpg'));
});

app.get('/ui/academics.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'academics.html'));
});

app.get('/ui/industry.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'industry.html'));
});

app.get('/ui/training.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'training.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
