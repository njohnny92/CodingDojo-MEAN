const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const PORT = 1337;

const app = express();

mongoose.connect('mongodb://localhost/otters', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.set(path.join('views', './views'));

app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

let OtterSchema = new mongoose.Schema ({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, min: 1, max: 20},
    color: {type: String, required: true, minlength: 3}
}, {timestamps: true});

let Otter = mongoose.model('Otter', OtterSchema);

app.get('/', (req, res) => {
    Otter.find()
        .then(all_otters => {
            res.render('index', {otters: all_otters});
        })
        .catch(err => {
            console.log('Had errors making otters: ', err);
            res.redirect('/');
        })
});

app.post('/', (req, res) => {
    console.log(req.body);
    let otter = new Otter ({name: req.body.name, age: req.body.age, color: req.body.color});
    otter.save()
        .then((data) => {
            console.log('successful add', data);
            res.redirect('/');
        })
        .catch(err => {
            console.log('failure to add', err);
            res.redirect('/');
        })
});

app.get('/otter/new', (req, res) => {
    res.render('new');
});

app.get('/:id/view', (req, res) => {
    console.log('Routing is in the views!');
    Otter.findOne({_id: req.params.id})
        .then(all_otters => {
            res.render('view', {otters: all_otters});
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
});

app.get('/:id/edit', (req,res) => {
    Otter.findOne({'_id': req.params.id})
        .then(data => {
            console.log('Routing into the edit page!');
            res.render('edit', {otter: data});
        })
        .catch(err => {
            console.log('Errors in routing into edit page');
            res.redirect('/');
        })
});

app.post('/:id/update', (req, res) => {
    console.log('Routing is in the edits!')
    Otter.updateOne({'_id': req.params.id}, req.body)
        .then(data => {
            console.log("Successfully updated otter's inforamation");
            res.redirect('/');
        })
        .catch(err => {
            console.log("Failure to update information");
            res.redirect('/');
        })
});


app.post('/:id/delete', (req, res) => {
    Otter.findOneAndDelete({_id: req.params.id})
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
});

app.listen(PORT, function(){
    console.log(`Server Listening on PORT ${PORT}`);
});