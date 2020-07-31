const express = require('express');
const app = express();

//tell the server to use a static file folder to handle requests for static contents.
app.use(express.static(__dirname + '/static'));

//tell express that we are going to use .ejs and give its locatoin to where to find the files.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request,response) => {
    response.render('index');
})

app.get('/cats', (request, response) => {
    response.render('cats');
})

app.get('/tiger', (request, response) => {
    var details = {
        name: 'Tiger',
        food: 'Frosted Flakes',
        age: 5,
        image: 'eyes.jpg',
        spots: ['Drapes', ' Under the couch', ' Closet']
    }
    response.render('details', {cats: details});
})

app.get('/cuddles', (request, response) => {
    var details = {
        name: 'Cuddles',
        food: 'Tuna',
        age: 2,
        image: 'omg.jpg',
        spots: ['Bed']
    }
    response.render('details', {cats: details});
})
app.get('/puss', (request, response) => {
    var details = {
        name: 'Puss n Boots',
        food: 'Milk',
        age: 7,
        image: 'shrek.jpg',
        spots: ["Shrek's house", " With Donkey"]
    }
    response.render('details', {cats: details});
})

app.listen(8000, () => {
    console.log('Listening on port: 8000');
})