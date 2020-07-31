//require
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Schema = mongoose.Schema;
const PORT = 9001;

const app = express();

mongoose.connect('mongodb://localhost/myDB', {useNewUrlParser: true, useUnifiedTopology: true });

let authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    desc: { type: String, required: false},
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    desc: { type: String, required: false, minlength: 5},
    author: { type: Schema.Types.ObjectId, ref: 'Author' }
});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

//config
app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded({ extended: true}));

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//routes
app.get('/', (req, res) => {
    Author.find().populate('books').exec()
        .then(all_authors => {
            res.render('index', {all_authors: all_authors});
        })
        .catch(err => {
            console.log('Had errors finding authors ', err);
            res.redirect('/');
        })
});

app.post('/author', (req,res) =>{
    Author.create(req.body)
        .then(newAuthor => {
            console.log('Newly created author: ', newAuthor);
            res.redirect('/')
        })
        .catch(err => {
            console.log('Had errors creating an author: ', err)
            res.redirect('/')
        });
});

app.post('/book/:id', (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(foundAuthor => {
            let newBook = new Book(req.body);
            newBook.author = foundAuthor._id;
            foundAuthor.books.push(newBook);
            foundAuthor.save()
                .then(data => {
                    newBook.save()
                        .then(data => {
                            res.redirect('/');
                        })
                        .catch(err =>{
                            console.log(err);
                            res.end();
                        })
                })
                .catch(err => {
                    console.log(err);
                    res.end();
                })
        })
        .catch(err => {
            console.log(err)
            res.end();
        })
});

app.post('/author/delete/:id', (req,res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(data => res.redirect('/'))
        .catch(err => {
            console.log(err)
            res.redirect('/')
        })
});

app.listen(PORT, () =>{
    console.log(`server is listening on port ${PORT}`);
});