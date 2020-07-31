//require
const express = require('express');
const path = require('path');
const PORT = 9001;
const app = express();

//config
app.use(express.static(path.join(__dirname, '/static')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//routes
app.get('/', function(req, res) {
    res.render('index', {data: 'hello Johnny!'});
});

//listen
app.listen(PORT, function() {
    console.log(`My first express port ${PORT}`)
});