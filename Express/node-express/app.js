//configs
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));

app.post('/users', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/users" method="POST"><input type="text" name="username"/><input type="submit" value="Submit"/></form>'
  );
});

//listen
app.listen(5000);
