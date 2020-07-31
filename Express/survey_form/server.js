const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 8000;
const app = express();

//config
app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//routes
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/result', (req,res) => {
    req.session.results = req.body;
    console.log(req.body);
    res.redirect('/result')
})

app.get('/result', (req, res) => {
    res.render('result', {results: req.session.results});
})

app.listen(PORT, (req,res) => {
    console.log('listening on port: 8000');
})